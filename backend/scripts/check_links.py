"""Check every entry.link for reachability and print a report of the ones
that look broken (connection errors, 4xx/5xx, or a redirect to a different
host). Read-only — it never edits the DB; use the output to fix entries by
hand or with the update endpoint.

Run from backend/ with the venv:
  PYTHONPATH=. .venv/Scripts/python scripts/check_links.py
Options:
  --timeout N   per-request timeout in seconds (default 12)
  --limit N     only check the first N entries (for a quick sample)
"""
import concurrent.futures
import sys
import urllib.request
from urllib.parse import urlsplit

from app.db.session import SessionLocal
from app.models.entry import Entry

UA = "Mozilla/5.0 (compatible; AtlasLinkCheck/1.0)"


def _arg(name: str, default: int) -> int:
    if name in sys.argv:
        return int(sys.argv[sys.argv.index(name) + 1])
    return default


def check(entry: tuple[int, str, str | None], timeout: int) -> str | None:
    entry_id, link, title = entry
    req = urllib.request.Request(link, method="GET", headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            final = resp.geturl()
            if urlsplit(final).hostname != urlsplit(link).hostname:
                return f"[redirect] #{entry_id} {title or ''}\n    {link}\n -> {final}"
            return None
    except urllib.error.HTTPError as e:
        if e.code in (403, 405, 429, 999):  # anti-bot noise, not really dead
            return None
        return f"[HTTP {e.code}] #{entry_id} {title or ''}\n    {link}"
    except Exception as e:  # noqa: BLE001 — timeout, DNS, SSL, connection reset
        return f"[{type(e).__name__}] #{entry_id} {title or ''}\n    {link}"


def main() -> None:
    timeout = _arg("--timeout", 12)
    limit = _arg("--limit", 0)

    db = SessionLocal()
    try:
        q = db.query(Entry.id, Entry.link, Entry.title).order_by(Entry.id)
        rows = q.limit(limit).all() if limit else q.all()
    finally:
        db.close()

    print(f"checking {len(rows)} links (timeout {timeout}s)…\n")
    problems: list[str] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=16) as pool:
        for result in pool.map(lambda r: check(tuple(r), timeout), rows):
            if result:
                problems.append(result)
                print(result)

    print(f"\n{len(problems)} of {len(rows)} links need a look")


if __name__ == "__main__":
    main()
