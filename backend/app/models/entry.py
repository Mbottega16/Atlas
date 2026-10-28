from datetime import date, datetime, timezone

from sqlalchemy import Boolean, Column, Date, DateTime, ForeignKey, String, Table, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


entry_tags = Table(
    "entry_tags",
    Base.metadata,
    Column("entry_id", ForeignKey("entries.id"), primary_key=True),
    Column("tag_id", ForeignKey("tags.id"), primary_key=True),
)

# An entry's profile (2026-10-25): what a person checked on the tool's own
# pages, and when. Every field is optional and most entries have none. The
# seed carries a field only when it is set.
PROFILE_FIELDS = (
    "cost",
    "price_note",
    "access",
    "best_for",
    "limits",
    "warning",
    "last_verified",
    "verification",
    "screenshot",
)


class Entry(Base):
    __tablename__ = "entries"

    id: Mapped[int] = mapped_column(primary_key=True)
    link: Mapped[str] = mapped_column(String, unique=True, nullable=False, index=True)
    title: Mapped[str | None] = mapped_column(String, nullable=True)
    category: Mapped[str] = mapped_column(String, nullable=False, index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    use_case: Mapped[str | None] = mapped_column(Text, nullable=True)
    # 'manual' (typed in directly) or 'capture' (via the quick-capture flow)
    source: Mapped[str] = mapped_column(String, default="manual")
    is_favorite: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    visited_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow
    )

    # The profile — see PROFILE_FIELDS. `cost` and `access` use the words in
    # app/taxonomy.py; `screenshot` is a path under frontend/public/.
    cost: Mapped[str | None] = mapped_column(String, nullable=True)
    price_note: Mapped[str | None] = mapped_column(Text, nullable=True)
    access: Mapped[str | None] = mapped_column(String, nullable=True)
    best_for: Mapped[str | None] = mapped_column(Text, nullable=True)
    limits: Mapped[str | None] = mapped_column(Text, nullable=True)
    warning: Mapped[str | None] = mapped_column(Text, nullable=True)
    last_verified: Mapped[date | None] = mapped_column(Date, nullable=True)
    verification: Mapped[str | None] = mapped_column(Text, nullable=True)
    screenshot: Mapped[str | None] = mapped_column(String, nullable=True)

    tags: Mapped[list["Tag"]] = relationship(secondary=entry_tags, back_populates="entries")
