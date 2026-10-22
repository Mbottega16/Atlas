# Atlas — house rules

A personal library of ~1,200 websites and tools worth reusing (link, category,
description, use case, tags). Vite + React + TypeScript frontend; FastAPI +
SQLAlchemy + SQLite backend for local editing. `README.md` has the quickstart.

History lives in `git log` and in the vault (`my-brain/projects/atlas/context.md`).
This file describes how Atlas works **now**.

## How it fits together

- **The library is one file: `backend/seed/atlas-seed.json`.** Git tracks it,
  the public site is built from it, and a fresh local database is loaded from
  it. One readable record per entry, in id order, so a batch shows up as a
  normal diff.
- **The public site is static and read-only.** `render.yaml` defines one
  Render static site, `atlas-library`, built with `VITE_STATIC=1`. The build
  runs `frontend/scripts/build-data.mjs`, which turns the seed into
  `public/atlas.json`. The browser loads it once, then searches and filters
  locally. No server means no cold start, no password, and nothing to lose.
  Pushing to `main` redeploys it (the "AtlasBlue" blueprint auto-syncs).
- **Editing happens locally.** Run the backend and frontend on this machine
  and the same UI shows a Capture tab plus Edit / Delete on every card. The
  local SQLite file (`backend/data/atlas.db`, git-ignored) is only a working
  copy.
- **Favorites and "visited" live in each browser's `localStorage`**, keyed by
  link. They are not part of the library.
- **Search is `frontend/src/lib/searchCore.js`** — plain JS so the vault's
  `workflows/scripts/atlas-search.js` reuses it in Node. Every word must match
  some field (title > tags/category > use case > host > description), after a
  light stemmer ("remover" = "remove"). If no entry matches every word, the
  closest partial matches come back flagged as such.

## Changing the library

Run from `backend/` with the venv (`PYTHONPATH=. .venv/Scripts/python …`):

1. `git pull`, then `scripts/load_seed.py` — rebuilds `data/atlas.db` from the
   seed so you edit the current library.
2. Make the change: the local UI, `POST /api/entries/batch` (session-assisted
   capture, `/deep_curate atlas` in the vault), or a one-off script.
3. `scripts/export_seed.py` — writes the working DB back to the seed. It
   refuses a category outside `app/taxonomy.py`.
4. Run `pytest` (`tests/test_seed.py` checks the seed), commit, push.

## Growing the library (intake engine, 2026-10-22)

The vault's `workflows/library/library.js` finds candidates, filters them for free, and opens
a review branch. See `my-brain/projects/atlas/snowball-plan.md`.

- It reads roundup pages and outlinks from entries already here, and the Notion inbox.
- `propose --app atlas --apply --push` appends records to `atlas-seed.json` on a
  `harvest/<date>` branch, runs pytest, and pushes the branch. A person merges the PR.
- Merging to `main` redeploys the public site.
- Records the engine adds carry `"source": "harvest"`.

## Taxonomy

- **20 fixed categories in `backend/app/taxonomy.py`.** The batch endpoint
  still saves an unknown category or a brand-new tag, but reports it in
  `new_categories` / `new_tags` so it is a decision, not drift. A new category
  also goes in `frontend/src/categoryGroups.ts`; one left out still shows up
  under "Everything else".
- The 2026-09-19 merge (34 → 20) kept each old category name as a tag on the
  entries it held, and `CATEGORY_MOVES` maps old names, so old links like
  `?category=cooking` still land on the same entries.
- Tags never repeat the entry's own category (the seed test enforces it).
- Project tags: `edusystem`, `little-sprout`, `chegga`, `trading-bot`,
  `almanac`. The Find tab's "Something for a specific project" branch uses them.
- `essential` marks the hand-picked first choice in an area; it ranks first.

## Link health

`scripts/check_links.py` reads the seed (no DB needed). With `--write-status`
it updates `backend/seed/link-status.json`, counting consecutive failed checks
per link. `.github/workflows/link-check.yml` runs it every Monday, commits the
result, and keeps one open "Dead links" issue. A link that fails twice in a row
gets a "may be dead" badge on the site. One bad night never flags a live link.

## Decisions already made

- **Tags are a real many-to-many table** (`tags` + `entry_tags`) in the local
  DB; rename/merge are one-row updates (`app/services/tag_service.py`).
- **`link` is UNIQUE and canonical** (`app/services/links.py`): the batch
  endpoint upserts on it, so re-importing updates instead of duplicating.
- **Capture is session-assisted and free.** A Claude Code session researches
  links with WebFetch/WebSearch and saves them through the batch endpoint.
  Live Claude-assisted capture (`POST /api/capture/research`) is built but
  dormant **by decision (2026-09-16)** — the user will not spend on it. Don't
  re-propose it.
- **No paid hosting.** Render's static sites are free; a persistent disk is
  not, and was declined (2026-09-19). That is why the site is static.
- **Public by decision (2026-09-19).** The library is a list of public
  websites. The password gate (`ADMIN_PASSWORD`, `app/services/auth.py`)
  still exists for the local backend and is off when the variable is unset.
- **Alembic owns schema changes** to the local DB (`backend/alembic/`).
  `create_all` still runs on startup for a fresh file.

## Tests

`cd backend && .venv/Scripts/python -m pytest` — auth, backup, capture, entries,
tags, and the seed. `cd frontend && npm run build` type-checks the frontend.

## Never Read / Noise Zones (Do Not Scan)

To keep search and file reads fast, **never scan or read inside**:
- `backend/.venv/` and `frontend/node_modules/` — 9,500+ vendor files.
- `frontend/dist/` and `frontend/public/atlas.json` — generated static build outputs.
- `backend/data/*.db` — local SQLite working database.
- `backend/seed/atlas-seed.json` (about 560 KB, 1,214 entries) — do not read the whole file into context; use `node workflows/scripts/atlas-search.js "<query>"` from the vault or inspect a few lines when needed.

## Session Handoff (Last Worked On · Current State · Next Up)

- **Last Worked On:**
  - Added Levenshtein typo tolerance to `frontend/src/lib/searchCore.js` (`9344dd3`).
  - Rebuilt Atlas as a fast, free, public static site on Render (`https://atlas-library-znte.onrender.com`, `VITE_STATIC=1`) backed by one tracked seed (`backend/seed/atlas-seed.json`), client-side stemmer search (`frontend/src/lib/searchCore.js`), 20 merged categories (`backend/app/taxonomy.py`), and automated Monday link-health checks (`.github/workflows/link-check.yml`).
  - Repointed 44 off-host redirects (`5e2ee1a`, 2026-09-28).
- **Current State (2026-10-22):**
  - Live with 1,214 curated sites/tools, 38 passing backend pytest tests. 970 links tracked, none failing twice.
  - Intake engine added in the vault. First harvest: PR #2 (+43 tools) waits for review.
- **What Needs To Be Worked On Next:**
  0. Review and merge open `harvest/*` pull requests.
  1. Run `/deep_curate atlas inbox` (or `/deep_curate atlas [urls]`) whenever new tools/sites land in the Notion inbox.
  2. Review any twice-failed links surfaced by the weekly Monday GitHub Action (`backend/seed/link-status.json`).

