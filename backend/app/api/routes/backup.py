"""Whole-library export / restore. The point is a portable file you can keep
off-box before the app goes near a free-tier host whose disk you don't
control. Export is the full record (favorites + visit timestamps included);
import upserts on `link` and, unlike the capture batch endpoint, also
restores that favorite/visit state."""

from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.models.entry import Entry
from app.schemas.entry import EntryCreate
from app.services import entry_service

router = APIRouter()


class ExportEntry(EntryCreate):
    source: str = "manual"
    is_favorite: bool = False
    visited_at: datetime | None = None
    created_at: datetime | None = None


class ExportFile(BaseModel):
    version: int = 1
    exported_at: datetime
    count: int
    entries: list[ExportEntry]


class ImportResult(BaseModel):
    created: int
    updated: int


@router.get("/export", response_model=ExportFile)
def export_library(db: Session = Depends(get_db)):
    rows = db.execute(select(Entry).order_by(Entry.id)).scalars().unique().all()
    entries = [
        ExportEntry(
            link=e.link,
            title=e.title,
            category=e.category,
            description=e.description,
            use_case=e.use_case,
            tags=[t.name for t in e.tags],
            source=e.source,
            is_favorite=e.is_favorite,
            visited_at=e.visited_at,
            created_at=e.created_at,
        )
        for e in rows
    ]
    return ExportFile(
        exported_at=datetime.now(timezone.utc), count=len(entries), entries=entries
    )


@router.post("/import", response_model=ImportResult)
def import_library(payload: ExportFile, db: Session = Depends(get_db)):
    created = updated = 0
    for item in payload.entries:
        entry, was_created = entry_service.upsert_entry(db, item, source=item.source)
        entry.is_favorite = item.is_favorite
        entry.visited_at = item.visited_at
        created, updated = (created + 1, updated) if was_created else (created, updated + 1)
    db.commit()
    return ImportResult(created=created, updated=updated)
