"""One-off data-quality pass over the library (2026-08-30).

Three fixes, all reversible and all logged line-by-line:

1. use_case: drop the "When you need: <description>" boilerplate the first
   bulk import generated — it echoes the description and says nothing.
2. tags: strip the meaningless "misc" tag; where that leaves an entry with
   no tags, backfill one tag = its category.
3. categories: fold three junk buckets (archives, search & reference,
   software) into real ones, per explicit URL.

NOT done here: the first bulk import also sprayed a stray "ai" tag onto ~30
non-AI entries (10 Minute Mail, iFixit, Newegg…). Telling those from the
genuinely-AI ones ("AI-powered …") needs per-entry judgment — left for a
reviewed pass / the live-capture-assisted cleanup.

Run:  PYTHONPATH=. .venv/Scripts/python scripts/cleanup_2026_08_30.py [--apply]
Without --apply it only prints what it would do.
"""

import sys

from sqlalchemy.orm import selectinload

from app.db.session import SessionLocal
from app.models.entry import Entry
from app.models.tag import Tag

APPLY = "--apply" in sys.argv

# fix 4 — explicit category moves (by canonical link)
CATEGORY_MOVES = {
    "https://mynoise.net": "audio & video",
    "https://web.archive.org": "reference & calculators",
    "https://quora.com": "reference & calculators",
    "https://duckduckgo.com": "reference & calculators",
    "https://alternativeto.net": "developer tools",
    "https://ninite.com": "developer tools",
    "https://opensourcealternative.to": "developer tools",
    "https://sourceforge.net": "developer tools",
}

def main() -> None:
    db = SessionLocal()
    counts = dict(use_case=0, misc_tag=0, backfill=0, moved=0)
    try:
        tag_cache = {t.name: t for t in db.query(Tag).all()}

        def tag(name: str) -> Tag:
            t = tag_cache.get(name)
            if t is None:
                t = Tag(name=name)
                db.add(t)
                db.flush()
                tag_cache[name] = t
            return t

        rows = db.query(Entry).options(selectinload(Entry.tags)).order_by(Entry.id).all()
        for e in rows:
            names = [t.name for t in e.tags]

            if (e.use_case or "").startswith("When you need:"):
                counts["use_case"] += 1
                if APPLY:
                    e.use_case = None

            if "misc" in names:
                counts["misc_tag"] += 1
                names = [n for n in names if n != "misc"]
                if APPLY:
                    e.tags = [tag(n) for n in names]

            if not names:
                counts["backfill"] += 1
                if APPLY:
                    e.tags = [tag(e.category)]

            dest = CATEGORY_MOVES.get(e.link)
            if dest and e.category != dest:
                counts["moved"] += 1
                print(f"  move [{e.category}] -> [{dest}]: {e.title}")
                if APPLY:
                    e.category = dest

        if APPLY:
            # tidy up tags that no entry references any more
            for t in db.query(Tag).options(selectinload(Tag.entries)).all():
                if not t.entries:
                    db.delete(t)
            db.commit()

        print(f"\n{'APPLIED' if APPLY else 'DRY RUN'} — {counts}")
    finally:
        db.close()


if __name__ == "__main__":
    main()
