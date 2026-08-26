from datetime import datetime

from pydantic import BaseModel, ConfigDict


class EntryBase(BaseModel):
    link: str
    title: str | None = None
    category: str
    description: str | None = None
    use_case: str | None = None
    tags: list[str] = []


class EntryCreate(EntryBase):
    pass


class EntryUpdate(BaseModel):
    link: str | None = None
    title: str | None = None
    category: str | None = None
    description: str | None = None
    use_case: str | None = None
    tags: list[str] | None = None


class EntryOut(EntryBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    source: str
    is_favorite: bool
    visited_at: datetime | None
    created_at: datetime
    updated_at: datetime


class EntryListOut(BaseModel):
    total: int
    items: list[EntryOut]


class TagCount(BaseModel):
    name: str
    count: int


class CategoryCount(BaseModel):
    name: str
    count: int
