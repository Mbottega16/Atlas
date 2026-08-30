import logging
from pathlib import Path

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.deps import require_auth
from app.api.routes import auth, backup, capture, entries, health, tags
from app.config import settings
from app.db.base import Base
from app.db.seed import ensure_seed_db_file, load_seed_rows
from app.db.session import SessionLocal, engine
from app.models.entry import Entry
from app.static_spa import SPAStaticFiles

log = logging.getLogger("atlas.bootstrap")

app = FastAPI(title="Atlas")

# On an ephemeral serverless filesystem the SQLite file in /tmp is gone on
# every cold start — copy a committed, pre-built seed DB into place before
# create_all or any query. No-op for a normal local/persistent DB.
ensure_seed_db_file()

# MVP: create tables directly from models. Switch to Alembic migrations
# once the schema needs to evolve without dropping data.
Base.metadata.create_all(bind=engine)


def _bootstrap() -> None:
    # Never let a seeding hiccup take down module import (would 500 every route).
    try:
        with SessionLocal() as db:
            if db.query(Entry).count() == 0:
                n = load_seed_rows(db)
                if n:
                    log.warning("empty DB: loaded %d seed rows via JSON fallback", n)
    except Exception:  # noqa: BLE001
        log.exception("bootstrap seeding failed; continuing with current DB state")


_bootstrap()

# Credentialed CORS for the Vite dev server (the deployed app is same-origin
# and doesn't rely on this). allow_credentials with a wildcard origin is
# rejected by browsers, so the origins are explicit — see settings.cors_origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Auth endpoints are public (you can't be logged in to reach the login route).
app.include_router(auth.router, prefix="/api")
app.include_router(health.router, prefix="/api")

# Everything that touches the library sits behind the auth gate. When
# ADMIN_PASSWORD is unset the gate is a no-op, so local dev/tests are
# unaffected (see app/api/deps.py).
_gated = [Depends(require_auth)]
app.include_router(entries.router, prefix="/api", dependencies=_gated)
app.include_router(tags.router, prefix="/api", dependencies=_gated)
app.include_router(capture.router, prefix="/api", dependencies=_gated)
app.include_router(backup.router, prefix="/api", dependencies=_gated)

# One-service deployment: serve the built frontend at / so the whole app is
# one origin (and /api calls need no CORS). `backend/static/` is produced by
# `scripts/build_frontend.py`; a plain `frontend/dist/` is also honored for a
# local `npm run build` without the copy step. No-op when neither exists.
_here = Path(__file__).resolve().parent
for _static in (_here.parent / "static", _here.parent.parent / "frontend" / "dist"):
    if (_static / "index.html").exists():
        app.mount("/", SPAStaticFiles(directory=str(_static), html=True), name="frontend")
        break
