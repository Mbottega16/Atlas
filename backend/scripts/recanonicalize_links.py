"""Rewrite every stored entry.link to its canonical form (see
app/services/links.canonical_link). If two rows collapse to the same
canonical URL, keep the richer one (more tags, then a use_case, then the
lower id), union its tags, and delete the other.

Run from backend/ with the venv:  PYTHONPATH=. .venv/Scripts/python scripts/recanonicalize_links.py
Add --dry-run to preview without writing.
"""
import sys

from app.db.session import SessionLocal
from app.models.entry import Entry
from app.services.links import canonical_link


def richness(e: Entry):
    return (len(e.tags), 1 if (e.use_case or "").strip() else 0, -e.id)


def main(dry_run: bool) -> None:
    db = SessionLocal()
    try:
        by_canon: dict[str, list[Entry]] = {}
        for e in db.query(Entry).all():
            by_canon.setdefault(canonical_link(e.link), []).append(e)

        changed = merged = deleted = 0
        for canon, rows in by_canon.items():
            rows.sort(key=richness, reverse=True)
            survivor, losers = rows[0], rows[1:]
            if losers:
                merged += 1
                names = {t.name for t in survivor.tags}
                for loser in losers:
                    assert not loser.is_favorite and loser.visited_at is None, loser.id
                    for t in loser.tags:
                        if t.name not in names:
                            survivor.tags.append(t)
                            names.add(t.name)
                    if not dry_run:
                        db.delete(loser)
                    deleted += 1
                    print(f"  merge #{loser.id} -> #{survivor.id}  {canon}")
            if survivor.link != canon:
                changed += 1
                print(f"  rewrite #{survivor.id}: {survivor.link} -> {canon}")
                if not dry_run:
                    survivor.link = canon

        if dry_run:
            db.rollback()
            print(f"\n[dry run] would rewrite {changed}, merge {merged} groups, delete {deleted}")
        else:
            db.commit()
            print(f"\nrewrote {changed}, merged {merged} groups, deleted {deleted}")
            print("total entries now:", db.query(Entry).count())
    finally:
        db.close()


if __name__ == "__main__":
    main("--dry-run" in sys.argv)
