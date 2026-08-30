"""One-off: report data-quality hotspots so a cleanup pass has a target.
Run from backend/:  PYTHONPATH=. .venv/Scripts/python scripts/inspect_quality.py
"""
from collections import Counter

from sqlalchemy.orm import selectinload

from app.db.session import SessionLocal
from app.models.entry import Entry


def main() -> None:
    with SessionLocal() as db:
        rows = db.query(Entry).options(selectinload(Entry.tags)).all()
    n = len(rows)
    cats = Counter(e.category for e in rows)
    boiler = sum(1 for e in rows if (e.use_case or "").startswith("When you need:"))
    echo_uc = sum(
        1
        for e in rows
        if e.use_case and e.description and e.use_case.rstrip(".").lower().endswith((e.description or "").rstrip(".").lower()[:40])
    )
    no_uc = sum(1 for e in rows if not (e.use_case or "").strip())
    misc_cat = sum(1 for e in rows if e.category.strip().lower() in {"misc", "miscellaneous", ""})
    misc_tag = sum(1 for e in rows if [t.name for t in e.tags] in ([], ["misc"]))
    by_source = Counter(e.source for e in rows)

    print(f"{n} entries\n")
    print(f"category == misc/blank : {misc_cat} ({misc_cat / n:.0%})")
    print(f"tags empty or just misc: {misc_tag} ({misc_tag / n:.0%})")
    print(f"use_case 'When you need:': {boiler} ({boiler / n:.0%})")
    print(f"use_case echoes desc     : {echo_uc}")
    print(f"use_case blank           : {no_uc}")
    print(f"\nby source: {dict(by_source)}")
    print(f"\n{len(cats)} categories:")
    for c, k in cats.most_common():
        print(f"  {k:4d}  {c}")


if __name__ == "__main__":
    main()
