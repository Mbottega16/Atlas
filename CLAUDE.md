# Atlas — house rules

A personal website/tool-library database: search/filter + quick-capture for
reusable links, backed by FastAPI + SQLAlchemy + SQLite, with a Vite + React
+ TypeScript frontend. Solo-use tool, not a public product — see `README.md`
for the quickstart.

## Current state (2026-08-26)
- Backend: data model + full CRUD + search/filter + batch-upsert endpoint
  built and tested (`backend/tests/test_entries.py`, 8 passing).
- Frontend: Browse/search page (real, wired to the backend) and a Capture
  page (currently read-only — see below) built and type-checked.
- Not yet built: auth gate, deployment, live Claude-assisted capture.

## Decisions already made
- **Tags are a real many-to-many table** (`tags` + `entry_tags`), not a
  JSON/comma column — tag filtering is a first-class feature here, and a
  real join table is indexable and makes tag rename/merge a one-row update.
- **`link` is UNIQUE** — the batch endpoint (`POST /api/entries/batch`)
  upserts on it, so re-importing an existing link updates instead of
  duplicating.
- **Quick-capture is two-phase, not one big build:**
  - *Now:* research happens inside a Claude Code session (paste raw links,
    Claude uses `WebFetch`/`WebSearch` to research/tag them, then calls
    `POST /api/entries/batch` directly). No API key, no per-call spend.
    `CapturePage.tsx` is a read-only "recently captured" view in this phase.
  - *Later (needs explicit sign-off + a real `ANTHROPIC_API_KEY`):* a
    `POST /api/capture/research` endpoint does live research via the
    Anthropic API and returns **draft, unsaved** entries; a second explicit
    action commits them via the existing batch endpoint. Mirrors Chegga's
    `coaching_service.py` pattern (`if not settings.anthropic_api_key:
    raise RuntimeError(...)`) — the key stays blank in `.env` until you say
    otherwise.
- **One combined deployment target planned, not split**: FastAPI will serve
  the built `frontend/dist/` via `StaticFiles` alongside `/api/*` on a
  single Render Web Service — simpler than a two-origin split, and unlike
  Chegga/LittleSprout-Rewards, Atlas has no existing static site to
  piggyback on.
- **Auth gate planned before deploy**: a single `ADMIN_PASSWORD` +
  `itsdangerous`-signed session cookie gating the whole app, mirroring
  LittleSprout-Rewards — once this is at a public URL, every route (not
  just an admin view) is otherwise both readable and writable by anyone
  with the link.

## What happens next
1. Do a first real batch-capture pass on existing saved links (session-assisted, per the pattern above).
2. Build the auth gate.
3. Deploy to Render — **needs explicit user sign-off first**, even on the free tier (going public, not just spend, is the gate).
4. Once deployed and a real `ANTHROPIC_API_KEY` is approved: build live Claude-assisted capture.

## Why this file exists
So a session opened in this repo has the real plan and constraints without
re-deriving them — mirrors the shape of Chegga's/PixelRoom's own
`CLAUDE.md`. The vault-side `projects/atlas/context.md` in `my-brain` is a
shorter cross-project summary; this file is authoritative for anything
about Atlas's own code.
