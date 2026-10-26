import logging
from pathlib import Path

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import inspect

from app.api.deps import require_auth
from app.api.routes import auth, backup, capture, entries, health, tags
from app.config import settings
from app.db.base import Base
from app.db.seed import load_seed_rows
from app.db.session import SessionLocal, engine
from app.models.entry import PROFILE_FIELDS, Entry
from app.static_spa import SPAStaticFiles

log = logging.getLogger("atlas.bootstrap")

app = FastAPI(title="Atlas")

# Tables are still created straight from the models here. Alembic (see
# alembic/README.md) owns every schema change from now on.
Base.metadata.create_all(bind=engine)


def _bootstrap() -> None:
    # Never let a seeding hiccup take down module import (would 500 every route).
    try:
        # create_all never adds columns to a table that already exists, so a
        # working copy made before the profile columns would fail every query.
        have = {c["name"] for c in inspect(engine).get_columns("entries")}
        missing = [f for f in PROFILE_FIELDS if f not in have]
        if missing:
            log.error(
                "data/atlas.db predates the entry profile columns (missing %s): "
                "run `alembic upgrade head`, or rebuild it with scripts/load_seed.py",
                ", ".join(missing),
            )
            return
        with SessionLocal() as db:
            if db.query(Entry).count() == 0:
                n = load_seed_rows(db)
                if n:
                    log.warning("empty DB: loaded %d rows from seed/atlas-seed.json", n)
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

# Serve a local `npm run build` of the frontend at / so the full read-write
# app runs as one origin on this machine. The public site is the static build
# instead (see render.yaml). No-op when there is no build.
_dist = Path(__file__).resolve().parent.parent.parent / "frontend" / "dist"
if (_dist / "index.html").exists():
    app.mount("/", SPAStaticFiles(directory=str(_dist), html=True), name="frontend")
