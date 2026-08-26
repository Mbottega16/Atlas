from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.api.routes.entries import _to_out
from app.schemas.capture import BatchImportRequest, BatchImportResult
from app.services import entry_service

router = APIRouter()


@router.post("/entries/batch", response_model=BatchImportResult)
def batch_import(items: list[BatchImportRequest], db: Session = Depends(get_db)):
    """Upserts each entry on `link` — re-importing an existing link updates
    it in place instead of duplicating it. Both capture paths (the Phase 4
    session-assisted flow and, later, Phase 7's live Claude research) call
    this one endpoint."""
    created, updated = [], []
    for item in items:
        entry, was_created = entry_service.upsert_entry(db, item)
        (created if was_created else updated).append(_to_out(entry))
    return BatchImportResult(created=created, updated=updated)


# Phase 7 (live Claude-assisted capture) adds a POST /capture/research route
# here that fetches each link's real content and returns *draft, unsaved*
# entries for review — committed via the batch endpoint above, not directly.
# Not built yet: requires ANTHROPIC_API_KEY, which is intentionally blank
# until the user explicitly approves the spend (see backend/.env.example).
