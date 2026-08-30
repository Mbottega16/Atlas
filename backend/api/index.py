"""Vercel Python entrypoint — exposes the FastAPI ASGI app.

Vercel's Python runtime serves the module-level `app` directly; there is no
uvicorn process there. Local dev still uses `uvicorn app.main:app`.
Unused unless Atlas is deployed to Vercel (the Almanac pattern); the Render
path (render.yaml) ignores this file.
"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent.parent))

from app.main import app  # noqa: E402,F401
