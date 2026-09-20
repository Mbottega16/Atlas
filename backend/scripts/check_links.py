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


def classify(link: str, timeout: int) -> tuple[str, str]:
    """Return (status, detail). status in ok/dead/redirect/bounced/unreachable."""
    req = urllib.request.Request(link, method="GET", headers={"User-Agent": UA})
    last_exc_name = ""
    for attempt in range(_RETRIES):
        try:
            with urllib.request.urlopen(req, timeout=timeout, context=_SSL_CONTEXT) as resp:
                final = resp.geturl()
                if _domain(final) != _domain(link):
                    return "redirect", f"-> {final}"
                if urlsplit(link).path.strip("/") and not urlsplit(final).path.strip("/"):
                    return "bounced", f"-> {final}"
                return "ok", ""
        except urllib.error.HTTPError as e:
            if e.code in _ANTIBOT or _domain(link) in _ANTIBOT_HOSTS:
                return "ok", f"HTTP {e.code} (anti-bot, treated as ok)"
            if e.code >= 500:
                return "unreachable", f"HTTP {e.code}"
            return "dead", f"HTTP {e.code}"
        except Exception as e:  # noqa: BLE001 — timeout, DNS, SSL, connection reset
            last_exc_name = type(e).__name__
            if attempt + 1 < _RETRIES:
                time.sleep(1)
    return "unreachable", last_exc_name


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
        statuses = pool.map(lambda r: classify(r[0], timeout), rows)
        for (link, title), (status, detail) in zip(rows, statuses):
            results.append({"link": link, "title": title, "status": status, "detail": detail})

    if "--write-status" in sys.argv:
        write_status(results)

    if as_json:
        print(json.dumps(results, indent=1))
        return

    bad = [r for r in results if r["status"] != "ok"]
    for r in bad:
        print(f'[{r["status"]}] {r["title"] or ""}\n    {r["link"]}  {r["detail"]}')
    counts: dict[str, int] = {}
    for r in results:
        counts[r["status"]] = counts.get(r["status"], 0) + 1
    print(f'\n{len(bad)} of {len(results)} need a look  |  {counts}')


if __name__ == "__main__":
    main()
