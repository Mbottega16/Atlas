from pydantic import BaseModel

from app.schemas.entry import EntryCreate, EntryOut


class BatchImportRequest(EntryCreate):
    """Same shape as EntryCreate — the batch endpoint just takes a list of these."""


class BatchImportResult(BaseModel):
    created: list[EntryOut]
    updated: list[EntryOut]
