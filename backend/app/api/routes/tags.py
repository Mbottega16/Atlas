from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.entry import CategoryCount, TagCount
from app.services import entry_service

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
