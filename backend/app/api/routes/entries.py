from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.models.entry import Entry
from app.schemas.entry import EntryCreate, EntryListOut, EntryOut, EntryUpdate
from app.services import entry_service

router = APIRouter()


def _to_out(entry: Entry) -> EntryOut:
    return EntryOut(
        id=entry.id,
        link=entry.link,
        title=entry.title,
        category=entry.category,
        description=entry.description,
        use_case=entry.use_case,
        tags=[t.name for t in entry.tags],
        source=entry.source,
        created_at=entry.created_at,
        updated_at=entry.updated_at,
    )


@router.get("/entries", response_model=EntryListOut)
def search_entries(
    q: str | None = None,
    category: str | None = None,
    tag: str | None = None,
    use_case: str | None = None,
    limit: int = 50,
    offset: int = 0,
    db: Session = Depends(get_db),
):
    total, items = entry_service.list_entries(db, q, category, tag, use_case, limit, offset)
    return EntryListOut(total=total, items=[_to_out(e) for e in items])


@router.post("/entries", response_model=EntryOut, status_code=201)
def create_entry(data: EntryCreate, db: Session = Depends(get_db)):
    if entry_service.get_entry_by_link(db, data.link) is not None:
        raise HTTPException(status_code=409, detail="An entry with this link already exists")
    entry = entry_service.create_entry(db, data)
    return _to_out(entry)


@router.get("/entries/{entry_id}", response_model=EntryOut)
def get_entry(entry_id: int, db: Session = Depends(get_db)):
    entry = entry_service.get_entry(db, entry_id)
    if entry is None:
        raise HTTPException(status_code=404, detail="Entry not found")
    return _to_out(entry)


@router.put("/entries/{entry_id}", response_model=EntryOut)
def update_entry(entry_id: int, data: EntryUpdate, db: Session = Depends(get_db)):
    entry = entry_service.get_entry(db, entry_id)
    if entry is None:
        raise HTTPException(status_code=404, detail="Entry not found")
    entry = entry_service.update_entry(db, entry, data)
    return _to_out(entry)


@router.delete("/entries/{entry_id}", status_code=204)
def delete_entry(entry_id: int, db: Session = Depends(get_db)):
    entry = entry_service.get_entry(db, entry_id)
    if entry is None:
        raise HTTPException(status_code=404, detail="Entry not found")
    entry_service.delete_entry(db, entry)
