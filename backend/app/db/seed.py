"""Seeding for ephemeral deploys.

On Vercel the SQLite file lives in `/tmp` and is wiped on every cold start,
so the app would otherwise boot with an empty library. Two speed-ups:

1. `ensure_seed_db_file()` — if a committed, pre-built `seed/atlas-seed.db`
   exists and the target SQLite file is missing, copy the file. Milliseconds
   instead of re-inserting ~900 rows. Build it with `scripts/build_seed_db.py`.
2. `load_seed_rows()` — the JSON fallback, as ONE transaction.

The real fix is a persistent database (Render paid disk / Postgres); this
keeps the serverless deploy usable until then. Note: favorites and visit
timestamps do NOT survive a cold start on this setup.
"""

import json
import pathlib
import shutil

from sqlalchemy.orm import Session

from app.config import settings

_BACKEND_ROOT = pathlib.Path(__file__).resolve().parent.parent.parent
SEED_JSON = _BACKEND_ROOT / "seed" / "atlas-seed.json"
SEED_DB = _BACKEND_ROOT / "seed" / "atlas-seed.db"


def _sqlite_path() -> pathlib.Path | None:
    url = settings.database_url
    if not url.startswith("sqlite"):
        return None
    return pathlib.Path(url.split("sqlite:///", 1)[1])


def ensure_seed_db_file() -> bool:
    """If the target SQLite file doesn't exist yet and a pre-built seed DB is
    committed, copy it into place. Returns True if it did."""
    target = _sqlite_path()
    if target is None or target.exists() or not SEED_DB.exists():
        return False
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(SEED_DB, target)
        return True
    except OSError:
        return False


def load_seed_rows(db: Session) -> int:
    """Fallback: load the JSON seed in a single transaction. Returns row count."""
    from app.schemas.entry import EntryCreate
    from app.services import entry_service

    if not SEED_JSON.exists():
        return 0
    rows = json.loads(SEED_JSON.read_text(encoding="utf-8"))
    for row in rows:
        entry_service.upsert_entry(
            db, EntryCreate(**row), source=row.get("source", "capture"), commit=False
        )
    db.commit()
    return len(rows)
