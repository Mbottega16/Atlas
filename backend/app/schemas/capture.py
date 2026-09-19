from pydantic import BaseModel

from app.schemas.entry import EntryCreate, EntryOut


class BatchImportRequest(EntryCreate):
    """Same shape as EntryCreate — the batch endpoint just takes a list of these."""


class BatchImportResult(BaseModel):
    created: list[EntryOut]
    updated: list[EntryOut]
    # Saved anyway, but worth a second look: a category outside
    # app/taxonomy.py, or a tag no other entry uses yet.
    new_categories: list[str] = []
    new_tags: list[str] = []
