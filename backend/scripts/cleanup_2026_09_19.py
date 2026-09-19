"""One-off taxonomy pass over the library (2026-09-19).

1. categories: fold 34 into the 20 in app/taxonomy.py. When an entry's
   category changes, its old category name is kept as a tag (so "cooking"
   is still findable inside "everyday life").
2. tags: drop tags that only repeat the entry's own category (264 rows of
   noise), fold plural/spelling twins, drop two empty tags ("tools",
   "online"), and rename the stale project tag pixelroom -> edusystem.
3. delete tags that no entry uses any more.

Run:  PYTHONPATH=. .venv/Scripts/python scripts/cleanup_2026_09_19.py [--apply]
Without --apply it only prints what it would do.
"""

import sys
from collections import Counter

from sqlalchemy.orm import selectinload

from app.db.session import SessionLocal
from app.models.entry import Entry
from app.models.tag import Tag
from app.taxonomy import CATEGORIES, CATEGORY_MOVES

APPLY = "--apply" in sys.argv

TAG_RENAMES = {
    "pixelroom": "edusystem",
    "game dev": "gamedev",
    "full-stack": "full stack",
    "calculators": "calculator",
    "converters": "converter",
    "generators": "generator",
    "map": "maps",
    "book": "books",
    "portfolios": "portfolio",
    "illustrations": "illustration",
    "languages": "language",
    "practices": "practice",
    "databases": "database",
    "calendars": "calendar",
    "guides": "guide",
    "simulations": "simulation",
    "backgrounds": "background",
    "component": "components",
    "standard": "standards",
}
TAG_DROPS = {"tools", "online"}


def main() -> None:
    db = SessionLocal()
    stats: Counter = Counter()
    try:
        tags_by_name = {t.name: t for t in db.query(Tag).all()}

        def tag(name: str) -> Tag:
            if name not in tags_by_name:
                tags_by_name[name] = Tag(name=name)
                db.add(tags_by_name[name])
            return tags_by_name[name]

        entries = db.query(Entry).options(selectinload(Entry.tags)).all()
        for e in entries:
            names = [t.name for t in e.tags]
            new_cat = CATEGORY_MOVES.get(e.category, e.category)
            if new_cat != e.category:
                names.append(e.category)
                stats["category moved"] += 1
            names = [TAG_RENAMES.get(n, n) for n in names]
            names = [n for n in names if n not in TAG_DROPS and n != new_cat]
            names = list(dict.fromkeys(names))  # dedupe, keep order
            if new_cat != e.category or names != [t.name for t in e.tags]:
                stats["entries touched"] += 1
            e.category = new_cat
            e.tags = [tag(n) for n in names]

        db.flush()
        unknown = sorted({e.category for e in entries} - set(CATEGORIES))
        if unknown:
            raise SystemExit(f"categories outside app/taxonomy.py: {unknown}")

        for t in list(tags_by_name.values()):
            if t.id is not None and not t.entries:
                db.delete(t)
                stats["empty tags deleted"] += 1

        cats = Counter(e.category for e in entries)
        print(dict(stats))
        print(f"{len(cats)} categories:", dict(sorted(cats.items(), key=lambda kv: -kv[1])))
        if APPLY:
            db.commit()
            print("applied")
        else:
            db.rollback()
            print("dry run — pass --apply to write")
    finally:
        db.close()


if __name__ == "__main__":
    main()
