from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import capture, entries, health, tags
from app.db.base import Base
from app.db.session import engine

app = FastAPI(title="Atlas")

# MVP: create tables directly from models. Switch to Alembic migrations
# once the schema needs to evolve without dropping data.
Base.metadata.create_all(bind=engine)

# Frontend is hosted separately on Vercel, so the API needs to accept
# cross-origin requests from it. Wide open for now (personal single-user
# tool, no auth gate yet) — tighten to the exact Vercel domain once it's
# known, or add real auth before this is anything but personal.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(entries.router, prefix="/api")
app.include_router(tags.router, prefix="/api")
app.include_router(capture.router, prefix="/api")

# Phase 6 (deployment): mount the built frontend/dist/ here via StaticFiles
# so one Render Web Service serves both /api/* and the app itself.
