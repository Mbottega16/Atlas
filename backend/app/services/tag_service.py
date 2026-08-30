"""Rename and merge tags. Because tags are a real many-to-many table, a
rename is normally a one-row update — but if the new name already exists it
becomes a merge, so both paths live here."""

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.entry import Entry
from app.models.tag import Tag


def _norm(name: str) -> str:
    return name.strip().lower()


def _get(db: Session, name: str) -> Tag | None:
    return db.execute(select(Tag).where(Tag.name == _norm(name))).scalar_one_or_none()


def _absorb(db: Session, source: Tag, target: Tag) -> int:
    """Move every entry on `source` onto `target`, then delete `source`.
    Returns the number of entries touched."""
    entries = db.execute(
        select(Entry).join(Entry.tags).where(Tag.id == source.id)
    ).scalars().unique().all()
    for entry in entries:
        if target not in entry.tags:
            entry.tags.append(target)
        entry.tags.remove(source)
    db.delete(source)
    return len(entries)


def rename_tag(db: Session, old_name: str, new_name: str) -> tuple[Tag, int, bool]:
    """Returns (resulting_tag, entries_touched, was_merge). Raises LookupError
    if `old_name` doesn't exist, ValueError if `new_name` is blank."""
    source = _get(db, old_name)
    if source is None:
        raise LookupError(f"No tag named {old_name!r}")
    new_norm = _norm(new_name)
    if not new_norm:
        raise ValueError("New tag name is empty")
    if new_norm == source.name:
        return source, 0, False

    existing = _get(db, new_norm)
    if existing is None:
        source.name = new_norm
        db.commit()
        db.refresh(source)
        return source, 0, False

    touched = _absorb(db, source, existing)
    db.commit()
    db.refresh(existing)
    return existing, touched, True


def merge_tags(db: Session, sources: list[str], into: str) -> tuple[Tag, int]:
    """Fold every `sources` tag into `into` (created if needed). Returns
    (target_tag, total_entries_touched)."""
    target_norm = _norm(into)
    if not target_norm:
        raise ValueError("Target tag name is empty")
    target = _get(db, target_norm)
    if target is None:
        target = Tag(name=target_norm)
        db.add(target)
        db.flush()

    touched = 0
    for raw in sources:
        source = _get(db, raw)
        if source is None or source.id == target.id:
            continue
        touched += _absorb(db, source, target)

    db.commit()
    db.refresh(target)
    return target, touched
