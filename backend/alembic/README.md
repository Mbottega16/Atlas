# Migrations

The app still creates tables with `Base.metadata.create_all` on startup (fine
for the current single-table-ish schema and the ephemeral seed flow). Alembic
is here for **schema changes from now on** — anything that would otherwise
silently drift from an existing database.

Run everything from `backend/` with the venv, e.g.
`PYTHONPATH=. .venv/Scripts/python -m alembic <cmd>`.

- **Existing database** (made by `create_all`): `alembic stamp 0001` once, so
  Alembic knows it's current.
- **Change a model** → `alembic revision --autogenerate -m "what changed"`,
  eyeball the generated file (SQLite needs batch mode — `env.py` sets it),
  then `alembic upgrade head`. Rebuild the deploy seed after:
  `python scripts/build_seed_db.py`.
- The DB URL comes from `app.config.settings` (i.e. `backend/.env`), not
  `alembic.ini`.
