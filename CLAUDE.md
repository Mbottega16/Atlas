# Atlas — rules & map (read this first)

A personal library of ~1,260 websites and tools worth reusing (link, category,
description, use case, tags, and an optional checked profile). Vite + React + TypeScript
frontend; FastAPI + SQLAlchemy + SQLite backend for local editing. `README.md` has the quickstart.

**History:** [`HISTORY.md`](HISTORY.md), newest first — read it when a task touches past
work, plus `git log`. **Business side:** the owner's my-brain vault, `projects/atlas/context.md`.
This file describes how Atlas works **now**. The repo (`Mbottega16/Atlas`; the old
`EduSystems-Code/Atlas` URL redirects) is **public**.

## What this is
- **What:** search, filter, a guided "Find" question tree, and session-assisted capture over
  one curated list of useful sites and tools — so a site found once never has to be
  re-discovered. It serves the owner's whole portfolio, not one project. Since 2026-10-25
  (the OSINT4ALL pilot) it also has checked **profiles** on some entries, **Collections**
  (stacks and comparisons) and a **Tool watch** tab.
- **For:** the owner, solo. Public only because the contents are public links and a free
  static site can't hold a password.
- **Platform:** a free Render static site, <https://atlas-library-znte.onrender.com>, built
  from one tracked JSON seed. Editing happens locally.
- **What "done" looks like:** a finished tool library that sessions actually search before
  recommending a tool, and that grows itself through reviewed harvest PRs.
- **Direction (owner, 2026-10-24):** Atlas stays a finished tool library. Lesson tools are
  built in Almanac, not here.

## Settled decisions (don't re-argue)

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
- **The Notion inbox is cut (owner, 2026-10-24).** Phone capture uses GitHub issues only.
- **A profile is a person's dated check of the tool's own pages (2026-10-25).** Every profile
  carries `last_verified` and `verification` (what was checked); the seed test enforces it.
  OSINT4ALL or any other directory is where an idea comes from, never the evidence — its
  Maltego and SecurityTrails "paid" labels were wrong against the tools' own pages.
  `cost` uses Almanac's words (`free | freemium | paid`).
- **Live-capture drafts never carry a profile**, and a batch that leaves profile fields out
  keeps the existing profile (`entry_service.upsert_entry`). Only a field sent explicitly,
  even as `null`, changes it.
- **A tool with a trust problem keeps its card and gets a `warning`** (archive.ph, 2026-10-25)
  rather than being deleted quietly; removing it is the owner's call. A stack never includes a
  tool with a warning (the collections test enforces it).
- **Comparisons are built from documentation, not hands-on tests, and say so on the page.**

## How it's built

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
  light stemmer ("remover" = "remove"), with Levenshtein typo tolerance. If no
  entry matches every word, the closest partial matches come back flagged as such.
- **Link health:** `scripts/check_links.py` reads the seed (no DB needed). With `--write-status`
  it updates `backend/seed/link-status.json`, counting consecutive failed checks
  per link. `.github/workflows/link-check.yml` runs it every Monday, commits the
  result, and keeps one open "Dead links" issue. A link that fails twice in a row
  gets a "may be dead" badge on the site. One bad night never flags a live link.
- **Profiles (2026-10-25):** optional seed fields, written only when set — `cost`,
  `price_note`, `access` (`no sign-up | free account | paid account | download`), `best_for`,
  `limits`, `warning`, `last_verified`, `verification`, `screenshot`. The list is
  `PROFILE_FIELDS` in `app/models/entry.py`; the vocabularies are in `app/taxonomy.py`.
  Cards show cost/access chips, "Best for", "Limit" and the check date; a `warning` adds a red
  "trust warning" badge. `screenshot` is a 640×400 JPEG of the official page under
  `frontend/public/shots/<host>.jpg`, captured by hand with `scripts/capture-shots.mjs`.
- **Collections (2026-10-25):** `backend/seed/atlas-collections.json` holds stacks (tools in
  order, each step says what to do with it) and comparisons (2–4 profiled entries, "open X
  when…" rules, a careful order of use). Both point at entries by link; the comparison table
  is drawn from the members' profiles, so editing a profile updates every comparison.
  `tests/test_collections.py` fails on a link that isn't in the seed. Tab: `?tab=collections&c=<id>`.
- **Tool watch (2026-10-25):** `?tab=watch` works out trust warnings, link health, entries
  added in the last four weeks and profiles older than six months, in the browser, from
  `atlas.json` and `link-check.json`. No build step of its own.
- **`build-data.mjs` writes four files** into `public/`: `atlas.json`, `link-flags.json`,
  `link-check.json` (last weekly check date + link count) and `collections.json` (a member
  whose entry is gone is dropped with a warning, so a stale stack can't break a deploy).
- **Growing the library (intake engine, 2026-10-22):** the vault's
  `workflows/library/library.js` finds candidates, filters them for free, and opens a review
  branch (see `my-brain/projects/atlas/snowball-plan.md`). It reads roundup pages, outlinks
  from entries already here, and phone captures (GitHub issues: in the GitHub phone app,
  Atlas > New issue > "Add a site"). A quality gate fixes slogan titles and holds back thin
  records; each harvest PR lists its entries and remarks; `growth-log.md` in the vault logs
  every week. Records the engine adds carry `"source": "harvest"`.

## Commands & Verification

**Changing the library** — run from `backend/` with the venv (`PYTHONPATH=. .venv/Scripts/python …`
on the PC, `.venv/bin/python` on the Mac; the Mac's venv is Python 3.12 from `uv`, since the
system Python 3.9 can't run this code):

1. `git pull`, then `scripts/load_seed.py` — rebuilds `data/atlas.db` from the
   seed so you edit the current library.
2. Make the change: the local UI, `POST /api/entries/batch` (session-assisted
   capture, `/deep_curate atlas` in the vault), or a one-off script.
3. `scripts/export_seed.py` — writes the working DB back to the seed. It
   refuses a category outside `app/taxonomy.py`.
4. Run `pytest` (`tests/test_seed.py` checks the seed), commit, push.

**Tests:** `cd backend && .venv/Scripts/python -m pytest` — auth, backup, capture, entries,
tags, profiles (incl. the `0002` migration), collections, and the seed. `cd frontend && npm
run build` type-checks the frontend.

**Profiling a tool:** read its own pricing/help pages (not a directory's summary), add the
fields through the batch endpoint or the local Edit form (Profile section), then capture a
thumbnail: `PLAYWRIGHT=/path/to/node_modules/playwright node frontend/scripts/capture-shots.mjs
<link>`. Look at the image; a bot check or cookie wall means no `screenshot` field.

**Harvest:** `propose --app atlas --apply --push` (vault `library.js`) appends records to
`atlas-seed.json` on a `harvest/<date>` branch, runs pytest, and pushes the branch. A person
merges the PR.

## Never Read / Noise Zones (Do Not Scan)

To keep search and file reads fast, **never scan or read inside**:
- `backend/.venv/` and `frontend/node_modules/` — 9,500+ vendor files.
- `frontend/dist/` and `frontend/public/atlas.json` — generated static build outputs.
- `backend/data/*.db` — local SQLite working database.
- `backend/seed/atlas-seed.json` (about 580 KB, ~1,250 entries) — do not read the whole file into context; use `node workflows/scripts/atlas-search.js "<query>"` from the vault or inspect a few lines when needed.

## Rules & Gotchas

- **Merging to `main` redeploys the public site.** Harvest PRs are merged by a person.
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
- `osint` tags open-source investigation tools (10 on 2026-10-25); the Find tab's "Research
  or check something online" branch and its two collections use it. OSINT tools land in the
  existing `security & privacy` / `reference & data` categories — no OSINT category.
- **A Find leaf with one search word fuzzy-matches widely** ("breach" is two edits from
  "each"). Test a new leaf with `searchCore.js` in Node; two words or a tag keep it tight.
- **A local `data/atlas.db` made before 2026-10-25 lacks the profile columns** and the backend
  logs an error naming them: run `alembic upgrade head`, or rebuild it with `scripts/load_seed.py`.
- `essential` marks the hand-picked first choice in an area; it ranks first.
- **Link checks count only real 4xx failures** — a 401 is a bot block, and a timeout from a
  CI runner proves nothing.
- **This repo is public:** keep private business notes in the owner's vault, not here.

## Session Handoff (Last Worked On · Current State · Next Up)

*Overwrite this at the end of every session; move the previous handoff into `HISTORY.md` first.*

- **Last Worked On (2026-10-25):** the OSINT4ALL pilot on branch `osint4all-pilot` (PR #6, open,
  not merged): checked profiles, Collections (a stack and a comparison), Tool watch, a research
  branch in Find. +4 entries (Shodan, Censys, SecurityTrails, Maltego), the Wayback Machine
  profiled, archive.ph given a trust warning. Details in `HISTORY.md`.
- **Current State (2026-10-25):** `main` is unchanged and live with 1,258 entries. The branch has
  1,262 entries (6 profiled) and 51 passing backend tests. The Mac now has a Python 3.12 venv.
- **Next Up:**
  1. Owner: merge PR #6. Monday's 08:00 harvest PR also appends to the seed, so whichever merges
     second needs a rebase that keeps both blocks of new records.
  2. Owner's call: keep archive.ph with its trust warning, or remove it.
  3. Profile the 43 `essential` entries from their own pages, then decide on a cost filter.
  4. Review the Monday harvest PR and link check (48 entries not checked yet); run
     `/deep_curate atlas inbox` for phone captures.
  5. On the PC after pulling: `alembic upgrade head` or `scripts/load_seed.py` before the backend.
