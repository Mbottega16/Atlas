"""One-off, idempotent migration: adds is_favorite/visited_at columns to
an existing entries table (Base.metadata.create_all only creates new
tables, it doesn't alter existing ones). Safe to re-run.

Run from backend/: .venv\\Scripts\\python scripts\\migrate_add_visited_favorite.py
"""
import sqlite3

from app.config import settings

# settings.database_url looks like "sqlite:///./data/atlas.db"
db_path = settings.database_url.removeprefix("sqlite:///")

conn = sqlite3.connect(db_path)
cols = [r[1] for r in conn.execute("PRAGMA table_info(entries)").fetchall()]

if "is_favorite" not in cols:
    conn.execute("ALTER TABLE entries ADD COLUMN is_favorite BOOLEAN NOT NULL DEFAULT 0")
    print("added is_favorite")
if "visited_at" not in cols:
    conn.execute("ALTER TABLE entries ADD COLUMN visited_at TIMESTAMP")
    print("added visited_at")

conn.commit()
conn.close()
print("done")
