"""entry profile

Adds the optional profile columns (app.models.entry.PROFILE_FIELDS): cost,
price_note, access, best_for, limits, warning, last_verified, verification,
screenshot. All nullable, so existing rows are untouched.

Revision ID: 0002
Revises: 0001
Create Date: 2026-10-25
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0002'
down_revision: Union[str, None] = '0001'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

_COLUMNS = [
    ('cost', sa.String()),
    ('price_note', sa.Text()),
    ('access', sa.String()),
    ('best_for', sa.Text()),
    ('limits', sa.Text()),
    ('warning', sa.Text()),
    ('last_verified', sa.Date()),
    ('verification', sa.Text()),
    ('screenshot', sa.String()),
]


def upgrade() -> None:
    with op.batch_alter_table('entries', schema=None) as batch_op:
        for name, type_ in _COLUMNS:
            batch_op.add_column(sa.Column(name, type_, nullable=True))


def downgrade() -> None:
    with op.batch_alter_table('entries', schema=None) as batch_op:
        for name, _ in reversed(_COLUMNS):
            batch_op.drop_column(name)
