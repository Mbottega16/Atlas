"""initial schema

The baseline: entries + tags + the entry_tags join, exactly as the models
stood when Alembic was introduced (2026-08-30). Existing databases were
created by `Base.metadata.create_all` and should be marked current with
`alembic stamp 0001` rather than run through this. New schema changes go
through `alembic revision --autogenerate` from here on.

Revision ID: 0001
Revises:
Create Date: 2026-08-30
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0001'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('entries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('link', sa.String(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('category', sa.String(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('use_case', sa.Text(), nullable=True),
    sa.Column('source', sa.String(), nullable=False),
    sa.Column('is_favorite', sa.Boolean(), nullable=False),
    sa.Column('visited_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=False),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('entries', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_entries_category'), ['category'], unique=False)
        batch_op.create_index(batch_op.f('ix_entries_link'), ['link'], unique=True)

    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('tags', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_tags_name'), ['name'], unique=True)

    op.create_table('entry_tags',
    sa.Column('entry_id', sa.Integer(), nullable=False),
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['entry_id'], ['entries.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('entry_id', 'tag_id')
    )


def downgrade() -> None:
    op.drop_table('entry_tags')
    with op.batch_alter_table('tags', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_tags_name'))

    op.drop_table('tags')
    with op.batch_alter_table('entries', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_entries_link'))
        batch_op.drop_index(batch_op.f('ix_entries_category'))

    op.drop_table('entries')
