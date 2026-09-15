# Atlas — house rules

A personal website/tool-library database: search/filter + quick-capture for
reusable links, backed by FastAPI + SQLAlchemy + SQLite, with a Vite + React
+ TypeScript frontend. Solo-use tool, not a public product — see `README.md`
for the quickstart.

## Current state (2026-08-26)
- Backend: data model + full CRUD + search/filter + batch-upsert endpoint,
  plus visit-tracking (`POST /entries/{id}/visit`) and favoriting
  (`POST /entries/{id}/favorite`, `?favorite=` filter on search) — built
  and tested (`backend/tests/test_entries.py`, 11 passing).
- Frontend: Browse/search page in a responsive grid (real, wired to the
  backend), a "visited" badge that lights up when you actually open a
  link (not on hover/search), a favorite star per entry, and a slide-in
  Favorites panel that auto-opens the first time you open a link each
  session (also toggleable via the nav). Capture page still read-only —
  see below. All type-checked and build clean.
- First real batch import done: 373 entries from technastic.com +
  thegeekpage.com (see `projects/atlas/context.md` in the vault for
  what did/didn't work as sources).
- Browse page now has real "juice" and a view-mode toggle (2026-08-26):
  entry cards show a site favicon (via Google's public favicon service,
  derived from the link's hostname — no backend change needed) and a
  small wiggle/lift animation on hover; a list / grid / large-panel
  toggle (like a file explorer's view modes) is in `BrowsePage.tsx`,
  persisted per-browser in `localStorage`. `EntryCard.tsx` takes an
  optional `view` prop consumed by `index.css`'s `.view-list`/
  `.view-grid`/`.view-large` rules.
- Second batch import done (2026-08-26): 183 hand-curated entries added
  (373 → 556), covering game dev (new `game dev` category, for
  PixelRoom), children's-book publishing (new `publishing` category,
  for Little Sprout Stories), education/tutoring tools (for Chegga),
  and general productivity/dev/AI tooling. See `projects/atlas/context.md`
  in the vault for the full breakdown.
- Third batch import done (2026-08-27): 65 hand-curated college-student
  resources added (556 → 631) — financial aid (FAFSA, federal grants,
  scholarship search, national fellowships), club/volunteering finders,
  internships/early career, undergrad research, OER textbooks,
  research/writing tools, student mental-health resources, and student
  software/discounts. Two new categories: `financial aid`, `college &
  students`. Curated from knowledge + a few freshness spot-checks
  (dropped Going Merry / Scholly as defunct-or-shaky); no bulk scrape.
- Fourth batch import done (2026-08-27): 117 hand-curated dev / VFX / 3D
  / design resources added (631 -> 748) — VFX & 3D (Poly Haven, ambientCG,
  Blender, DaVinci Resolve/Fusion, Houdini, Mixamo, photogrammetry,
  shaders), game-dev assets & references, coding docs/cheat sheets
  (MDN, DevDocs, roadmap.sh), online playgrounds & tools (regex101,
  Compiler Explorer, CyberChef, Excalidraw), practice/learning sites,
  design systems & inspiration (shadcn/ui, Coolors, Lucide, Mobbin),
  and web utilities (Squoosh, Mockaroo, ngrok, webhook.site). One new
  category: `vfx & 3d`. Freshness spot-checks on the volatile ones
  (Fab/Quixel Megascans now mostly paid, noted as such).
- Fifth batch + dedupe done (2026-08-27): 94 entries added covering the
  gaps around *shipping and running* the products — hosting/deploy
  (Vercel, Netlify, Render, Fly, Cloudflare, Supabase), ops/monitoring
  (Sentry, UptimeRobot, Clarity, PostHog, Plausible), web security
  (SSL Labs, securityheaders, OWASP ZAP/cheat sheets, Snyk, Gitleaks),
  accessibility (WAVE, axe, WCAG quickref, NVDA), solo-founder legal/tax
  (USPTO trademark search, IRS self-employed, SBA guide, policy
  generators, Common Paper contracts), marketing/growth (Search Console,
  keyword tools, Product Hunt, Indie Hackers, Tally, Buttondown, Canny,
  presskit(), Steamworks docs), and data/research (data.gov, Kaggle,
  HF Datasets, FRED, Our World in Data). New categories: `hosting & ops`,
  `business & legal`, `marketing & growth`, `data & research`.
  Also ran a dedupe pass: 50 http/https/www/trailing-slash duplicate
  rows from the earlier bulk imports were merged (tags unioned onto the
  survivor; all had no favorite/visit state). Net total 748 -> 792.
- Guided discovery layer added (2026-08-27): with ~800 entries a flat list
  was unusable, so there's now a **Find** tab (the default landing) —
  `src/pages/GuidePage.tsx` drives a 2-step question tree from
  `src/guidedPaths.ts` (pure config; every leaf is a preset
  `{category?, tag?, q?}` handed to the existing search — no backend
  change) plus a free-text "describe what you need" box that jumps to
  Browse with a `q`. **Browse** no longer dumps everything: with no
  filter active it shows the 7 `categoryGroups` as cards with per-category
  counts; results only render once a search term / category / tag is set.
  Every narrowed view (Find previews and Browse) is re-ordered by
  `src/ranking.ts`: favorites first, then entries tagged `essential`
  (hand-applied in the batch imports), then the rest. `App.tsx` now owns
  the Browse filter state so Find can hand off into it. Type-checks and
  builds clean.
- Project-targeted batch (2026-08-27): 135 entries added (792 -> 927) aimed
  at the user's six projects, each tagged with a project slug —
  `pixelroom` (Godot docs/asset library/shaders, pixel-art editors, Tiled/
  LDtk, retro audio tools, Steam marketing), `little-sprout` (phonics/SEL
  research, decodable readers, PWA packaging, literacy fonts, kids
  publishing), `chegga` (Chess.com/Lichess APIs, Stockfish + wasm builds,
  chess.js/chessground, the shared FastAPI+SQLAlchemy+Vite+React stack
  docs, SQLite tooling, IndexedDB/WASM), `trading-bot` (Alpaca, backtesting.py
  /vectorbt/backtrader, market-data APIs, SEC EDGAR, Telegram bot),
  `almanac` (CAST UDL guidelines, OER Commons, PhET, primary-source
  libraries, lesson-planning and formative-assessment tools). New category
  `trading & markets`. The Find wizard gained a "Something for a specific
  project" branch (routes to the project tag). Project-tag counts:
  pixelroom 30, little-sprout 25, chegga 37, trading-bot 22, almanac 34.
- Auth gate built (2026-08-29): single `ADMIN_PASSWORD` + `itsdangerous`-signed
  session cookie (`app/services/auth.py`, `app/api/routes/auth.py`,
  `require_auth` in `app/api/deps.py`). Gate is a **no-op when `ADMIN_PASSWORD`
  is unset**, so local dev + tests are unchanged; when set, every `/api`
  data route (entries, tags, capture, backup) returns 401 without a valid
  session. Endpoints: `GET /api/auth/status`, `POST /api/auth/login`,
  `POST /api/auth/logout`. Failed logins are throttled in-process
  (`app/services/ratelimit.py` — 5 per 15 min per IP, then 429). Frontend
  wraps `<App>` in `LoginGate` (password screen + "Log out" nav link);
  `api/client.ts` sends `credentials:"include"`. CORS is now credentialed +
  explicit-origin (`settings.cors_origins`, default the Vite dev port).
- Deploy prep done, NOT pushed (2026-08-30). **Target chosen: Vercel**, the
  Almanac pattern (only Vercel is connected on this machine; Render stays as
  a fallback via `render.yaml`). What's in place:
  - `app/main.py` serves the built frontend at `/` via `SPAStaticFiles`
    (`app/static_spa.py` — index.html fallback for extensionless routes,
    404 for missing files).
  - Vercel entrypoint `backend/api/index.py` + `backend/vercel.json` +
    `backend/.vercelignore`; `scripts/build_frontend.py` → `backend/static/`
    (git-ignored, still uploaded — `.vercelignore` doesn't exclude it).
  - Ephemeral-DB seeding (`app/db/seed.py`): on a cold `/tmp` SQLite the app
    copies committed `seed/atlas-seed.db` (927 rows, ~424 KB) into place,
    JSON fallback `seed/atlas-seed.json`. Rebuild both with
    `scripts/build_seed_db.py`. **Favorites/visits do not survive a cold
    start** on this setup — same tradeoff as Almanac; the fix is a real DB.
  - `entry_service.create_entry/upsert_entry` gained `commit=False` for the
    single-transaction seed load.
  - Deploy command (mirrors Almanac), run from `backend/` once the env vars
    are set: `npx vercel --prod -e DATABASE_URL="sqlite:////tmp/atlas.db"
    -e ADMIN_PASSWORD=… -e ADMIN_SESSION_SECRET=… -e COOKIE_SECURE=true`,
    project `atlas-api`, CheggaWeb team.
  - **Blocked on:** an `ADMIN_PASSWORD` value from the user (Atlas is
    read-write to anyone with the link, so unlike Almanac it must ship with
    the gate ON), and the first-time interactive `vercel` project link.
  - Stale `frontend/.vercel/` (project literally named "frontend") is a
    botched earlier attempt — ignore it; deploy is from `backend/`.
- Capture page rebuilt (2026-08-30): `CapturePage.tsx` is no longer read-only
  — an "Add one" form, a "Paste a list" bulk-URL box (→ `POST /api/entries/batch`),
  a JSON backup download link, and a Claude-assisted panel that only renders
  when `GET /api/capture/enabled` is true. Entry cards in Browse now have
  inline Edit / Delete (`EntryCard` gained an `onChanged` prop).
- Live Claude-assisted capture SCAFFOLDED, dormant (2026-08-30):
  `app/services/capture_service.py` + `POST /api/capture/research` +
  `GET /api/capture/enabled`, mirroring Almanac. Raises 503 until
  `ANTHROPIC_API_KEY` is set; returns draft unsaved entries, committed via
  the batch endpoint. `anthropic` added to requirements (imported lazily).
- Backup added (2026-08-30): `GET /api/export` (full record incl.
  favorite/visit state) and `POST /api/import` (upsert on link, restores that
  state) — `app/api/routes/backup.py`.
- Alembic wired up (2026-08-30): `alembic.ini` + `alembic/` with a `0001`
  baseline matching the current models (`alembic check` clean). `create_all`
  still runs on startup; Alembic owns schema changes from here — see
  `alembic/README.md`. `build_seed_db.py` stamps head.
- Tag rename / merge (2026-08-30): `app/services/tag_service.py` +
  `PUT /api/tags/{name}` (rename, or merge when the target name exists) +
  `POST /api/tags/merge`. "Manage tags" panel on the Capture page.
- Data-quality pass applied (2026-08-30, `scripts/cleanup_2026_08_30.py`):
  cleared 338 "When you need: …" boilerplate `use_case` values, stripped 74
  `misc` tags (51 backfilled with their category), folded 3 junk categories
  (`archives`, `search & reference`, `software`) — 36→34 categories. The
  earlier "~20% in `misc` category" worry was already false (0 such rows);
  `scripts/inspect_quality.py` is the diagnostic. Still open: ~30 non-AI
  entries carry a stray `ai` tag from the first bulk import — needs a judged
  pass, not a heuristic.
- Capture batches (2026-08-30), 927 → 974:
  - SetupSpawn follow-up (#4): shouldseethis.com still redirect-only,
    powerfulwebsites.io still 403 — both confirmed dead ends. SetupSpawn's
    public list (`mcstumble.com/powerful`, 15 items; the rest is paywalled)
    yielded **8 net-new** (temp-mail, McBroken, WornOnTV, Hotpot.ai, Make Me
    a Cocktail, Tunefind, Play Retro Games, PlanYourRoom); 7 were dupes or
    dead/expired-cert.
  - AI-engineering batch (#5): **39 entries**, new category `ai engineering`
    — LLM app-builder infra the consumer-facing `ai tools` category was
    missing (LangChain/LlamaIndex/DSPy/Pydantic AI, LiteLLM/OpenRouter,
    Chroma/Qdrant/pgvector, Langfuse/Braintrust/promptfoo/Ragas, Ollama/
    vLLM/llama.cpp, Firecrawl/Unstructured, MCP/E2B/Composio, Guardrails).
    All reachability-checked.
- Tests: 30 passing (`test_auth.py`, `test_backup.py`, `test_capture.py`,
  `test_tags.py` new). Frontend type-checks + builds clean.
- Not yet built: the deploy itself (blocked on an `ADMIN_PASSWORD` value +
  the first-time `vercel` project link).
- **Discovered 2026-09-15, not done by a Claude session:** Render's GitHub
  App is already installed on this repo and has been auto-deploying `main`
  to a `render.yaml`-defined service (`atlas`, free plan) since at least
  2026-08-26, most recently 2026-09-07 at `7f82661` — **live now** at
  https://atlas-umyj.onrender.com. `GET /api/auth/status` there currently
  returns `{"required":false,...}`: **`ADMIN_PASSWORD` was never set in the
  Render dashboard, so the live app is wide open** (read-write, no gate) —
  `ADMIN_SESSION_SECRET` is fine (`generateValue: true` in `render.yaml`
  means Render made one at service creation). This was outstanding when
  this file was last written 2026-08-30/09-03 and nothing here recorded it
  turning on. Until `ADMIN_PASSWORD` is set by hand in that dashboard, this
  is a public unauthenticated read-write database.
- **Decided 2026-09-15:** given Render was already live and working, the
  user chose to keep it as the real deploy instead of also standing up
  Vercel (whose CLI turned out logged out on the machine anyway, with no
  token available — that's what surfaced the Render discovery above). The
  Vercel staging below (`backend/api/index.py`, `backend/vercel.json`,
  `scripts/build_frontend.py`) stays in the repo unused, not deleted, in
  case Render ever needs replacing. **Only remaining step: set
  `ADMIN_PASSWORD` in the Render dashboard by hand** — everything else
  (tests, frontend build, seed DB) was re-verified clean the same day.

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
1. More capture passes as the user supplies sources — this is meant to become a bank that pulls from anywhere, not just the first few sources tried. Categorization is currently a rough keyword heuristic (~20% lands in "misc") — left as-is deliberately until there's more volume to justify a real cleanup pass.
2. ~~Build the auth gate.~~ Done 2026-08-29.
3. Deploy to Render — **needs explicit user sign-off first**, even on the free tier (going public, not just spend, is the gate). Before deploying: set `ADMIN_PASSWORD` + `ADMIN_SESSION_SECRET` in the Render dashboard, confirm the free plan's build image has Node for the frontend build step, and verify SPA deep-links (StaticFiles `html=True` 404s unknown paths — add a catch-all `index.html` fallback if the frontend ever uses real routes).
4. Once deployed and a real `ANTHROPIC_API_KEY` is approved: build live Claude-assisted capture.

## Why this file exists
So a session opened in this repo has the real plan and constraints without
re-deriving them — mirrors the shape of Chegga's/PixelRoom's own
`CLAUDE.md`. The vault-side `projects/atlas/context.md` in `my-brain` is a
shorter cross-project summary; this file is authoritative for anything
about Atlas's own code.
