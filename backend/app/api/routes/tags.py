from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.entry import CategoryCount, TagCount
from app.services import entry_service, tag_service

router = APIRouter()


@router.get("/tags", response_model=list[TagCount])
def list_tags(db: Session = Depends(get_db)):
    return [TagCount(name=name, count=count) for name, count in entry_service.list_tags_with_counts(db)]


@router.get("/categories", response_model=list[CategoryCount])
def list_categories(db: Session = Depends(get_db)):
    return [
        CategoryCount(name=name, count=count)
        for name, count in entry_service.list_categories_with_counts(db)
    ]


class RenameTag(BaseModel):
    new_name: str


class MergeTags(BaseModel):
    sources: list[str]
    into: str


class TagOpResult(BaseModel):
    tag: str
    entries_touched: int
    merged: bool


@router.put("/tags/{name}", response_model=TagOpResult)
def rename_tag(name: str, body: RenameTag, db: Session = Depends(get_db)):
    """Rename a tag. If `new_name` already exists, the two are merged."""
    try:
        tag, touched, was_merge = tag_service.rename_tag(db, name, body.new_name)
    except LookupError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    return TagOpResult(tag=tag.name, entries_touched=touched, merged=was_merge)


@router.post("/tags/merge", response_model=TagOpResult)
def merge_tags(body: MergeTags, db: Session = Depends(get_db)):
    """Fold every tag in `sources` into `into` (created if it doesn't exist)."""
    try:
        tag, touched = tag_service.merge_tags(db, body.sources, body.into)
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    return TagOpResult(tag=tag.name, entries_touched=touched, merged=True)
