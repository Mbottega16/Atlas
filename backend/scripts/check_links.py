"""Check every entry.link for reachability and classify its health.

Status values: 'ok', 'dead' (4xx/5xx or gone), 'redirect' (off-host bounce),
'bounced' (deep link -> a bare homepage), 'unreachable' (DNS/timeout from
the checker — NOT proof it's dead; this build environment can't resolve a
lot of live domains). Read-only — it never edits the DB; use the output to
fix entries by hand or with the update endpoint.

Run from backend/ with the venv:
  PYTHONPATH=. .venv/Scripts/python scripts/check_links.py
Options:
  --timeout N   per-request timeout in seconds (default 12)
  --limit N     only check the first N entries (for a quick sample)
  --json        emit a JSON array [{id, link, title, status, detail}]
"""
import concurrent.futures
import json
import ssl
import sys
import time
import urllib.error
import urllib.request
from urllib.parse import urlsplit

import certifi

from app.db.session import SessionLocal
from app.models.entry import Entry

UA = "Mozilla/5.0 (compatible; AtlasLinkCheck/1.0)"
_ANTIBOT = {403, 405, 429, 999}  # a response, but a bot-block — not "dead"
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
            if e.code in _ANTIBOT:
                return "ok", f"HTTP {e.code} (anti-bot, treated as ok)"
            if e.code >= 500:
                return "unreachable", f"HTTP {e.code}"
            return "dead", f"HTTP {e.code}"
        except Exception as e:  # noqa: BLE001 — timeout, DNS, SSL, connection reset
            last_exc_name = type(e).__name__
            if attempt + 1 < _RETRIES:
                time.sleep(1)
    return "unreachable", last_exc_name


def _rows(limit: int) -> list[tuple[int, str, str | None]]:
    db = SessionLocal()
    try:
        q = db.query(Entry.id, Entry.link, Entry.title).order_by(Entry.id)
        return [tuple(r) for r in (q.limit(limit).all() if limit else q.all())]
    finally:
        db.close()


def main() -> None:
    timeout = _arg("--timeout", 12)
    limit = _arg("--limit", 0)
    as_json = "--json" in sys.argv

    rows = _rows(limit)
    results: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=16) as pool:
        statuses = pool.map(lambda r: classify(r[1], timeout), rows)
        for (rid, link, title), (status, detail) in zip(rows, statuses):
            results.append({"id": rid, "link": link, "title": title,
                            "status": status, "detail": detail})

    if as_json:
        print(json.dumps(results, indent=1))
        return

    bad = [r for r in results if r["status"] != "ok"]
    for r in bad:
        print(f'[{r["status"]}] #{r["id"]} {r["title"] or ""}\n    {r["link"]}  {r["detail"]}')
    counts: dict[str, int] = {}
    for r in results:
        counts[r["status"]] = counts.get(r["status"], 0) + 1
    print(f'\n{len(bad)} of {len(results)} need a look  |  {counts}')


if __name__ == "__main__":
    main()
