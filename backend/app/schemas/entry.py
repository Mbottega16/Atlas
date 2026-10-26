from datetime import date, datetime

from pydantic import BaseModel, ConfigDict


class EntryFields(BaseModel):
    """What every entry has. A live-capture draft is only this: a profile is a
    person's dated check of the tool's own pages, never an AI draft."""

    link: str
    title: str | None = None
    category: str
    description: str | None = None
    use_case: str | None = None
    tags: list[str] = []


class EntryBase(EntryFields):
    # The optional profile (app.models.entry.PROFILE_FIELDS).
    cost: str | None = None
    price_note: str | None = None
    access: str | None = None
    best_for: str | None = None
    limits: str | None = None
    warning: str | None = None
    last_verified: date | None = None
    verification: str | None = None
    screenshot: str | None = None


class EntryCreate(EntryBase):
    pass


class EntryUpdate(BaseModel):
    link: str | None = None
    title: str | None = None
    category: str | None = None
    description: str | None = None
    use_case: str | None = None
    tags: list[str] | None = None
    cost: str | None = None
    price_note: str | None = None
    access: str | None = None
    best_for: str | None = None
    limits: str | None = None
    warning: str | None = None
    last_verified: date | None = None
    verification: str | None = None
    screenshot: str | None = None


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
