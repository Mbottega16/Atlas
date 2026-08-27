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
1. More capture passes as the user supplies sources — this is meant to become a bank that pulls from anywhere, not just the first few sources tried. Categorization is currently a rough keyword heuristic (~20% lands in "misc") — left as-is deliberately until there's more volume to justify a real cleanup pass.
2. Build the auth gate.
3. Deploy to Render — **needs explicit user sign-off first**, even on the free tier (going public, not just spend, is the gate).
4. Once deployed and a real `ANTHROPIC_API_KEY` is approved: build live Claude-assisted capture.

## Why this file exists
So a session opened in this repo has the real plan and constraints without
re-deriving them — mirrors the shape of Chegga's/PixelRoom's own
`CLAUDE.md`. The vault-side `projects/atlas/context.md` in `my-brain` is a
shorter cross-project summary; this file is authoritative for anything
about Atlas's own code.
