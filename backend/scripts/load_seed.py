"""Rebuild the local working DB (data/atlas.db) from seed/atlas-seed.json.

Run this after `git pull` and before editing, so you edit the current
library. It builds a new file first and only swaps it in if the load worked;
the previous file is kept as atlas.db.bak.

  PYTHONPATH=. .venv/Scripts/python scripts/load_seed.py
"""

import os
import pathlib

DATA = pathlib.Path(__file__).resolve().parent.parent / "data"
DEV_DB = DATA / "atlas.db"
NEW_DB = DATA / "atlas.db.new"


def main() -> None:
    NEW_DB.unlink(missing_ok=True)
    os.environ["DATABASE_URL"] = f"sqlite:///{NEW_DB.as_posix()}"

    from alembic import command
    from alembic.config import Config

    import app.models.entry  # noqa: F401 — registers the tables on Base
    import app.models.tag  # noqa: F401
    from app.db.base import Base
    from app.db.seed import load_seed_rows
    from app.db.session import SessionLocal, engine
    from app.models.entry import Entry

    Base.metadata.create_all(bind=engine)
    command.stamp(Config(str(DATA.parent / "alembic.ini")), "head")
    with SessionLocal() as db:
        n = load_seed_rows(db)
        total = db.query(Entry).count()
    engine.dispose()
    if total != n:
        raise SystemExit(f"load mismatch: {n} rows in the seed, {total} in the new DB — nothing swapped")

    if DEV_DB.exists():
        DEV_DB.replace(DEV_DB.with_suffix(".db.bak"))
    NEW_DB.replace(DEV_DB)
    print(f"data/atlas.db: loaded {n} entries from the seed")


if __name__ == "__main__":
    main()
