"""The library's source of truth: `seed/atlas-seed.json`.

That file is what git tracks, what the public static site is built from
(`frontend/scripts/build-data.mjs`), and what a fresh local database is
loaded from. The local SQLite file (`data/atlas.db`) is only a working copy
for editing — see `scripts/export_seed.py` and `scripts/load_seed.py`.
"""

import json
import pathlib
from datetime import datetime, timezone

from sqlalchemy.orm import Session

_BACKEND_ROOT = pathlib.Path(__file__).resolve().parent.parent.parent
SEED_JSON = _BACKEND_ROOT / "seed" / "atlas-seed.json"


def read_seed() -> list[dict]:
    if not SEED_JSON.exists():
        return []
    return json.loads(SEED_JSON.read_text(encoding="utf-8"))


def load_seed_rows(db: Session) -> int:
    """Load the JSON seed in a single transaction. Returns row count."""
    from app.schemas.entry import EntryCreate
    from app.services import entry_service

    rows = read_seed()
    for row in rows:
        entry, _ = entry_service.upsert_entry(
            db, EntryCreate(**row), source=row.get("source", "capture"), commit=False
        )
        if row.get("added"):
            entry.created_at = datetime.fromisoformat(row["added"]).replace(tzinfo=timezone.utc)
    db.commit()
    return len(rows)
