"""Build backend/seed/atlas-seed.json + atlas-seed.db from the current dev DB.

Commit both. On the ephemeral Vercel deploy the app copies the .db into place
on cold start (milliseconds) instead of re-inserting the JSON row-by-row.

Run from backend/ after the library changes:
  PYTHONPATH=. .venv/Scripts/python scripts/build_seed_db.py
"""

import json
import os
import pathlib
import time

BACKEND = pathlib.Path(__file__).resolve().parent.parent
SEED_DIR = BACKEND / "seed"
SEED_JSON = SEED_DIR / "atlas-seed.json"
SEED_DB = SEED_DIR / "atlas-seed.db"
DEV_DB = BACKEND / "data" / "atlas.db"


def _dump_json() -> int:
    """Snapshot the dev DB to atlas-seed.json (link + catalog fields only —
    favorites/visits are per-use, not seed data). Uses a throwaway engine so
    it doesn't pin app.config to the dev DATABASE_URL."""
    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker

    from app.models.entry import Entry  # noqa: F401 — registers the mapper

    SEED_DIR.mkdir(exist_ok=True)
    engine = create_engine(f"sqlite:///{DEV_DB.as_posix()}")
    with sessionmaker(bind=engine)() as db:
        rows = db.query(Entry).order_by(Entry.id).all()
        payload = [
            {
                "link": e.link,
                "title": e.title,
                "category": e.category,
                "description": e.description,
                "use_case": e.use_case,
                "tags": [t.name for t in e.tags],
                "source": e.source,
            }
            for e in rows
        ]
    SEED_JSON.write_text(json.dumps(payload, indent=1, ensure_ascii=False), encoding="utf-8")
    return len(payload)


def _build_db() -> tuple[int, int]:
    """Load the JSON into a fresh SQLite file via the real app bootstrap path."""
    if SEED_DB.exists():
        SEED_DB.unlink()
    os.environ["DATABASE_URL"] = f"sqlite:///{SEED_DB.as_posix()}"

    from app.db.base import Base
    from app.db.seed import load_seed_rows
    from app.db.session import SessionLocal, engine
    from app.models.entry import Entry

    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db:
        n = load_seed_rows(db)
        total = db.query(Entry).count()
    return n, total


def main() -> None:
    t = time.time()
    dumped = _dump_json()
    n, total = _build_db()
    print(
        f"seed/atlas-seed.json — {dumped} rows\n"
        f"seed/atlas-seed.db   — {n} loaded, {total} in db, "
        f"{SEED_DB.stat().st_size / 1024:.0f} KB, {time.time() - t:.1f}s"
    )


if __name__ == "__main__":
    main()
