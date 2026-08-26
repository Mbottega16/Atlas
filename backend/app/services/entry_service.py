from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.models.entry import Entry
from app.models.tag import Tag


def _get_or_create_tags(db: Session, names: list[str]) -> list[Tag]:
    tags = []
    for raw in names:
        name = raw.strip().lower()
        if not name:
            continue
        tag = db.execute(select(Tag).where(Tag.name == name)).scalar_one_or_none()
        if tag is None:
            tag = Tag(name=name)
            db.add(tag)
            db.flush()
        tags.append(tag)
    return tags


def list_entries(
    db: Session,
    q: str | None = None,
    category: str | None = None,
    tag: str | None = None,
    use_case: str | None = None,
    limit: int = 50,
    offset: int = 0,
) -> tuple[int, list[Entry]]:
    stmt = select(Entry)
    if q:
        like = f"%{q}%"
        stmt = stmt.where(
            (Entry.title.ilike(like))
            | (Entry.description.ilike(like))
            | (Entry.link.ilike(like))
        )
    if category:
        stmt = stmt.where(Entry.category == category)
    if use_case:
        stmt = stmt.where(Entry.use_case.ilike(f"%{use_case}%"))
    if tag:
        stmt = stmt.join(Entry.tags).where(Tag.name == tag.strip().lower())

    total = db.execute(select(func.count()).select_from(stmt.subquery())).scalar_one()
    stmt = stmt.order_by(Entry.created_at.desc()).limit(limit).offset(offset)
    items = list(db.execute(stmt).scalars().unique())
    return total, items


def get_entry(db: Session, entry_id: int) -> Entry | None:
    return db.get(Entry, entry_id)


def get_entry_by_link(db: Session, link: str) -> Entry | None:
    return db.execute(select(Entry).where(Entry.link == link)).scalar_one_or_none()


def create_entry(db: Session, data, source: str = "manual") -> Entry:
    entry = Entry(
        link=data.link,
        title=data.title,
        category=data.category,
        description=data.description,
        use_case=data.use_case,
        source=source,
    )
    entry.tags = _get_or_create_tags(db, data.tags)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


def update_entry(db: Session, entry: Entry, data) -> Entry:
    updates = data.model_dump(exclude_unset=True, exclude={"tags"})
    for field, value in updates.items():
        setattr(entry, field, value)
    if data.tags is not None:
        entry.tags = _get_or_create_tags(db, data.tags)
    db.commit()
    db.refresh(entry)
    return entry


def delete_entry(db: Session, entry: Entry) -> None:
    db.delete(entry)
    db.commit()


def upsert_entry(db: Session, data, source: str = "capture") -> tuple[Entry, bool]:
    """Create, or update-in-place if `link` already exists. Returns (entry, created).
    Defaults to source='capture' — this is what the batch/import endpoint calls."""
    existing = get_entry_by_link(db, data.link)
    if existing is None:
        return create_entry(db, data, source=source), True
    existing.title = data.title
    existing.category = data.category
    existing.description = data.description
    existing.use_case = data.use_case
    existing.tags = _get_or_create_tags(db, data.tags)
    db.commit()
    db.refresh(existing)
    return existing, False


def list_tags_with_counts(db: Session) -> list[tuple[str, int]]:
    from app.models.entry import entry_tags

    stmt = (
        select(Tag.name, func.count(entry_tags.c.entry_id))
        .join(entry_tags, entry_tags.c.tag_id == Tag.id)
        .group_by(Tag.name)
        .order_by(Tag.name)
    )
    return list(db.execute(stmt).all())


def list_categories_with_counts(db: Session) -> list[tuple[str, int]]:
    stmt = select(Entry.category, func.count(Entry.id)).group_by(Entry.category).order_by(Entry.category)
    return list(db.execute(stmt).all())
