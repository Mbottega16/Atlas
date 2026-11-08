from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.api.routes.entries import _to_out
from app.config import settings
from app.models.tag import Tag
from app.taxonomy import CATEGORIES
from app.schemas.capture import BatchImportRequest, BatchImportResult
from app.schemas.entry import EntryFields
from app.services import capture_service, entry_service

router = APIRouter()


@router.post("/entries/batch", response_model=BatchImportResult)
def batch_import(items: list[BatchImportRequest], db: Session = Depends(get_db)):
    """Upserts each entry on `link` — re-importing an existing link updates
    it in place instead of duplicating it. Every capture path (the session-
    assisted flow, the paste form, and live research below) commits here."""
    known_tags = {name for (name,) in db.query(Tag.name).all()}
    created, updated = [], []
    for item in items:
        entry, was_created = entry_service.upsert_entry(db, item)
        (created if was_created else updated).append(_to_out(entry))
    return BatchImportResult(
        created=created,
        updated=updated,
        new_categories=sorted({i.category for i in items} - set(CATEGORIES)),
        new_tags=sorted({t.strip().lower() for i in items for t in i.tags} - known_tags - {""}),
    )


class ResearchRequest(BaseModel):
    links: list[str]
    notes: str | None = None


class ResearchResponse(BaseModel):
    # Draft, UNSAVED entries — review, then POST the keepers to /api/entries/batch.
    # No profile fields, so saving a draft never clears an existing profile.
    drafts: list[EntryFields]


@router.get("/capture/enabled")
def capture_enabled():
    """Frontend uses this to decide whether to show the live-research UI."""
    return {"enabled": bool(settings.anthropic_api_key)}


@router.post("/capture/research", response_model=ResearchResponse)
def research(body: ResearchRequest):
    """Live Claude-assisted capture. 503 until ANTHROPIC_API_KEY is set — see
    app/services/capture_service.py. Returns drafts only; nothing is written."""
    if not body.links:
        raise HTTPException(status_code=422, detail="Provide at least one link")
    try:
        drafts = capture_service.research_links(body.links, body.notes)
    except RuntimeError as e:
        raise HTTPException(status_code=503, detail=str(e))
    return ResearchResponse(drafts=drafts)
