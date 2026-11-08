"""Bring the local working DB (data/atlas.db) up to date with the seed, safely.

`run_atlas.py` runs this on every start, so a `git pull` that adds entries to
seed/atlas-seed.json shows up on this machine without a manual step.

- No DB yet: does nothing. The backend loads the whole seed on first start.
- DB older than the profile columns: rebuilds it from the seed
  (scripts/load_seed.py); the old file is kept as data/atlas.db.bak.
- Otherwise: adds seed entries whose link is not in the DB. It never changes
  or deletes an entry that is already there, so local edits are kept.
  To take every seed change, including edits to existing entries, run
  scripts/load_seed.py instead (export first: scripts/export_seed.py).

  PYTHONPATH=. .venv/bin/python scripts/sync_seed.py
"""

import pathlib
import sys
from datetime import datetime, timezone

DATA = pathlib.Path(__file__).resolve().parent.parent / "data"
DEV_DB = DATA / "atlas.db"


def main() -> None:
    if not DEV_DB.exists():
        print("sync_seed: no local DB yet; the backend loads the seed on first start")
        return

    from sqlalchemy import inspect

    from app.db.seed import read_seed
    from app.db.session import SessionLocal, engine
    from app.models.entry import PROFILE_FIELDS, Entry
    from app.schemas.entry import EntryCreate
    from app.services import entry_service

    have_cols = {c["name"] for c in inspect(engine).get_columns("entries")}
    if any(f not in have_cols for f in PROFILE_FIELDS):
        engine.dispose()
        print("sync_seed: local DB predates the profile columns; rebuilding it from the seed")
        sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
        import load_seed

        load_seed.main()
        return

    with SessionLocal() as db:
        known = {link for (link,) in db.query(Entry.link)}
        added = 0
        for row in read_seed():
            if row["link"] in known:
                continue
            entry, _ = entry_service.upsert_entry(
                db, EntryCreate(**row), source=row.get("source", "capture"), commit=False
            )
            if row.get("added"):
                entry.created_at = datetime.fromisoformat(row["added"]).replace(tzinfo=timezone.utc)
            added += 1
        db.commit()
        total = db.query(Entry).count()
    print(f"sync_seed: added {added} new entries from the seed; local library has {total}")


if __name__ == "__main__":
    main()
