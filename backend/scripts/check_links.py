"""Check every entry.link for reachability and classify its health.

Status values: 'ok', 'dead' (4xx/5xx or gone), 'redirect' (off-host bounce),
'bounced' (deep link -> a bare homepage), 'unreachable' (DNS/timeout from
the checker — NOT proof it's dead on its own).

It reads seed/atlas-seed.json — the library itself, no database needed — and
never edits entries. With --write-status it records each result in
seed/link-status.json, counting consecutive failed checks per link. The site
shows a "may be dead" badge once a link has failed twice in a row, so one bad
night on the checker's side never flags a live site. A weekly GitHub Action
(.github/workflows/link-check.yml) runs this with --write-status.

Run from backend/:
  PYTHONPATH=. .venv/Scripts/python scripts/check_links.py
Options:
  --timeout N      per-request timeout in seconds (default 12)
  --limit N        only check the first N entries (for a quick sample)
  --json           emit a JSON array [{link, title, status, detail}]
  --write-status   update seed/link-status.json
  --repoint        rewrite seed/atlas-seed.json links that answer a permanent 301
                   (same site, landing ok) to their new address. Not run by the
                   weekly job; review the printed list, then commit the seed.
"""
import concurrent.futures
import datetime
import json
import pathlib
import ssl
import sys
import time
import urllib.error
import urllib.request
from urllib.parse import urlsplit

import certifi

UA = "Mozilla/5.0 (compatible; AtlasLinkCheck/1.0)"
_ANTIBOT = {401, 403, 405, 429, 999}  # a response, but a bot-block — not "dead"
# Hosts that bot-wall every automated check, whatever status they return.
# Only add one after checking the link by hand in a real browser.
_ANTIBOT_HOSTS = {"amazon.com"}
# Default Windows Python has no CA bundle wired into `ssl`, so every site
# needing chain validation was falsely flagged "unreachable"
# (CERTIFICATE_VERIFY_FAILED) — use certifi's bundle explicitly. Ported from
# the same fix in Almanac's check_links.py (same bug by construction — this
# script was the one Almanac's was forked from).
_SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
_RETRIES = 2  # DNS timeouts/resets are often transient, not proof of death


def _arg(name: str, default: int) -> int:
    if name in sys.argv:
        return int(sys.argv[sys.argv.index(name) + 1])
    return default


def _domain(url: str) -> str:
    """Registrable-ish domain: the last two labels, lowercased. Collapses
    www/non-www and regional subdomains so only a real host change trips
    'redirect'."""
    labels = (urlsplit(url).hostname or "").lower().split(".")
    return ".".join(labels[-2:]) if len(labels) >= 2 else ".".join(labels)


class _Hops(urllib.request.HTTPRedirectHandler):
    """Records the status code of each redirect hop, so a permanent 301 move can
    be told apart from a temporary 302/307 bounce."""

    def __init__(self) -> None:
        self.codes: list[int] = []

    def redirect_request(self, req, fp, code, msg, headers, newurl):  # noqa: ANN001
        self.codes.append(code)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def classify(link: str, timeout: int) -> tuple[str, str, str]:
    """Return (status, detail, moved_to). status in ok/dead/redirect/bounced/unreachable.
    moved_to is the final URL when the link answers 301 (permanent) and lands ok on
    the same site; otherwise ""."""
    req = urllib.request.Request(link, method="GET", headers={"User-Agent": UA})
    last_exc_name = ""
    for attempt in range(_RETRIES):
        hops = _Hops()
        opener = urllib.request.build_opener(hops, urllib.request.HTTPSHandler(context=_SSL_CONTEXT))
        try:
            with opener.open(req, timeout=timeout) as resp:
                final = resp.geturl()
                if _domain(final) != _domain(link):
                    return "redirect", f"-> {final}", ""
                if urlsplit(link).path.strip("/") and not urlsplit(final).path.strip("/"):
                    return "bounced", f"-> {final}", ""
                moved = final if hops.codes[:1] == [301] and final != link else ""
                return "ok", "", moved
        except urllib.error.HTTPError as e:
            if e.code in _ANTIBOT or _domain(link) in _ANTIBOT_HOSTS:
                return "ok", f"HTTP {e.code} (anti-bot, treated as ok)", ""
            if e.code >= 500:
                return "unreachable", f"HTTP {e.code}", ""
            return "dead", f"HTTP {e.code}", ""
        except Exception as e:  # noqa: BLE001 — timeout, DNS, SSL, connection reset
            last_exc_name = type(e).__name__
            if attempt + 1 < _RETRIES:
                time.sleep(1)
    return "unreachable", last_exc_name, ""


def repoint(rows: list[dict], moves: dict[str, str]) -> tuple[list[str], list[str]]:
    """Swap each moved link in `rows` (in place) for its canonical target.
    Returns (done, skipped) as readable lines. A target that another entry already
    has is skipped, so the canonical-link uniqueness rule still holds. Needs
    app.services.links, so run it with PYTHONPATH=. (not in the weekly CI job)."""
    from app.services.links import canonical_link

    taken = {canonical_link(r["link"]) for r in rows}
    done: list[str] = []
    skipped: list[str] = []
    for r in rows:
        if r["link"] not in moves:
            continue
        old = r["link"]
        target = canonical_link(moves[old])
        if target == canonical_link(old):
            continue
        if target in taken:
            skipped.append(f"{old} -> {target} (already in the library)")
            continue
        taken.discard(canonical_link(old))
        taken.add(target)
        r["link"] = target
        done.append(f"{old} -> {target}")
    return done, skipped


SEED_DIR = pathlib.Path(__file__).resolve().parent.parent / "seed"
STATUS_FILE = SEED_DIR / "link-status.json"
# Only a real 4xx counts against a link. "unreachable" (DNS, timeout, reset)
# says as much about the checker's network as about the site — it goes in the
# weekly issue, but it never puts a "may be dead" badge on a live site.
_FAILING = {"dead"}


def _rows(limit: int) -> list[tuple[str, str | None]]:
    rows = json.loads((SEED_DIR / "atlas-seed.json").read_text(encoding="utf-8"))
    pairs = [(r["link"], r.get("title")) for r in rows]
    return pairs[:limit] if limit else pairs


def write_status(results: list[dict]) -> None:
    """Merge results into link-status.json. `fails` counts consecutive failing
    checks; a passing check resets it. Links no longer in the library drop out."""
    old = json.loads(STATUS_FILE.read_text(encoding="utf-8")) if STATUS_FILE.exists() else {}
    today = datetime.date.today().isoformat()
    new = {}
    for r in results:
        fails = old.get(r["link"], {}).get("fails", 0) + 1 if r["status"] in _FAILING else 0
        new[r["link"]] = {"status": r["status"], "detail": r["detail"], "checked": today, "fails": fails}
    STATUS_FILE.write_text(json.dumps(dict(sorted(new.items())), indent=1) + "\n", encoding="utf-8")
    flagged = sum(1 for v in new.values() if v["fails"] >= 2)
    print(f"{STATUS_FILE.name}: {len(new)} links, {flagged} failing twice or more")


def main() -> None:
    timeout = _arg("--timeout", 12)
    limit = _arg("--limit", 0)
    as_json = "--json" in sys.argv

    rows = _rows(limit)
    results: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=16) as pool:
        checked = pool.map(lambda r: classify(r[0], timeout), rows)
        for (link, title), (status, detail, moved_to) in zip(rows, checked):
            results.append(
                {"link": link, "title": title, "status": status, "detail": detail, "moved_to": moved_to}
            )

    if "--write-status" in sys.argv:
        write_status(results)

    if "--repoint" in sys.argv:
        seed_path = SEED_DIR / "atlas-seed.json"
        seed = json.loads(seed_path.read_text(encoding="utf-8"))
        moves = {r["link"]: r["moved_to"] for r in results if r["moved_to"]}
        done, skipped = repoint(seed, moves)
        if done:
            seed_path.write_text(json.dumps(seed, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"{seed_path.name}: repointed {len(done)} permanent redirect(s), skipped {len(skipped)}")
        for line in done + [f"skipped: {s}" for s in skipped]:
            print(f"    {line}")

    if as_json:
        print(json.dumps(results, indent=1))
        return

    bad = [r for r in results if r["status"] != "ok" or r["moved_to"]]
    for r in bad:
        note = f'moved (301) -> {r["moved_to"]}' if r["moved_to"] else r["detail"]
        status = "moved" if r["moved_to"] else r["status"]
        print(f'[{status}] {r["title"] or ""}\n    {r["link"]}  {note}')
    counts: dict[str, int] = {}
    for r in results:
        counts[r["status"]] = counts.get(r["status"], 0) + 1
    print(f'\n{len(bad)} of {len(results)} need a look  |  {counts}')


if __name__ == "__main__":
    main()
