"""Write the local working DB (data/atlas.db) out to seed/atlas-seed.json.

Run this after any change to the library, then commit the JSON. Pushing to
main redeploys the public site from it. The JSON is one readable record per
entry in id order, so a capture batch shows up in git as a normal diff.

Favorites and visits are not exported — they live in each viewer's browser.

  PYTHONPATH=. .venv/Scripts/python scripts/export_seed.py
"""

import json
import pathlib

from sqlalchemy import create_engine
from sqlalchemy.orm import selectinload, sessionmaker

from app.db.seed import SEED_JSON
from app.models.entry import Entry
from app.taxonomy import CATEGORIES

DEV_DB = pathlib.Path(__file__).resolve().parent.parent / "data" / "atlas.db"


def main() -> None:
    engine = create_engine(f"sqlite:///{DEV_DB.as_posix()}")
    with sessionmaker(bind=engine)() as db:
        rows = db.query(Entry).options(selectinload(Entry.tags)).order_by(Entry.id).all()
        payload = [
            {
                "link": e.link,
                "title": e.title,
                "category": e.category,
                "description": e.description,
                "use_case": e.use_case,
                "tags": sorted(t.name for t in e.tags),
                "source": e.source,
                "added": e.created_at.date().isoformat(),
            }
            for e in rows
        ]
    unknown = sorted({r["category"] for r in payload} - set(CATEGORIES))
    if unknown:
        raise SystemExit(f"Not exported: categories outside app/taxonomy.py: {unknown}")
    SEED_JSON.write_text(json.dumps(payload, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"{SEED_JSON.name}: {len(payload)} entries")


if __name__ == "__main__":
    main()
