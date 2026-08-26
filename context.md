# Atlas — current state

*Snapshot, not a live link. Refresh manually as the project moves
forward — it will go stale otherwise. Last refreshed 2026-08-26 from
the real repo (`Atlas/CLAUDE.md`, git log, pytest output) — not assumed.*

## What it is
Atlas is a personal website/tool-library database: search/filter +
quick-capture for links worth reusing across projects (link, category,
description, use case, tags). It replaced the earlier "W.Y.S.K."
working name, and is a reference tool for the whole vault — not tied
to PixelRoom, Chegga, or Little Sprout Stories specifically.

It's a real hosted app (in progress), not a markdown file: FastAPI +
SQLAlchemy + SQLite backend, Vite + React + TypeScript frontend — the
same stack pattern used for Chegga and LittleSprout-Rewards. Repo:
`EduSystems-Code/Atlas` (private), cloned locally at
`Desktop\Atlas` (bare Desktop, same convention as Chegga/PixelRoom/
LittleSprout-Rewards — not under `AI Projects\`).

## Who it's for
The user, solo — a personal lookup tool so a useful site found once
doesn't get re-discovered from scratch later.

## Where it stands
Scaffolded and code-complete for the MVP (2026-08-26):
- **Backend**: entries + tags data model (real many-to-many tags
  table), full CRUD, search/filter (`q`/`category`/`tag`/`use_case`),
  and a batch-upsert endpoint (`POST /api/entries/batch`, upserts on
  `link`). 8 passing pytest tests against in-memory SQLite; smoke-tested
  live against the real dev server too.
- **Frontend**: a real Browse/search page wired to the API (search box,
  category/tag filters), and a Capture page that's currently read-only
  (shows recently captured entries).
- **Not yet built**: auth gate, deployment, live Claude-assisted
  research. See "What happens next."
- **First batch import done (2026-08-26)**: 373 deduped entries pulled
  from technastic.com's and thegeekpage.com's "useful websites" roundups
  (thegeekpage blocked direct fetching — pulled via its geekermag.com
  mirror instead). Two sources didn't pan out: shouldseethis.com and
  powerfulwebsites.io only exposed their own redirect/internal links,
  not the real destination URLs, so nothing was imported from them
  rather than store broken links; SetupSpawn's YouTube channel page
  wouldn't render its video list through fetch tools at all. All three
  are worth a second pass by hand (visiting a few SetupSpawn videos
  directly, or asking the user for specific ones) rather than more
  automated scraping.
- **Second batch import done (2026-08-26)**: 183 hand-curated entries
  added (373 → 556), sourced from direct knowledge rather than
  scraping a roundup site — real, well-known tools/sites picked for
  relevance to the four active projects and to general productivity.
  Two new categories added: `game dev` (30 entries — itch.io, Kenney,
  Aseprite, Godot, Tiled, etc., for PixelRoom) and `publishing` (13
  entries — KDP, IngramSpark, StoryJumper, Reedsy, etc., for Little
  Sprout Stories), plus a `education` top-up relevant to Chegga
  (Khan Academy, Quizlet, Course Hero, IXL, etc.) and broad additions
  to `productivity`, `ai tools`, `developer tools`, `design & media`.
  This was a curated expansion, not a literal doubling to 746 — quality
  over hitting an exact count.

## Decisions already made
- Lives in this vault under `projects/atlas/` for the business-side
  summary; the real code lives in its own repo (`Atlas/`), per the
  vault's own files-vs-code split — this file is a snapshot, not the
  source of truth for implementation details (`Atlas/CLAUDE.md` is).
- Storage is a real SQLite database, not markdown/JSON files — tags
  get their own many-to-many table since filtering by tag is a
  first-class feature, not an afterthought.
- **Quick-capture is two-phase:** right now, research happens inside a
  Claude Code session (paste raw links, Claude researches/tags via
  WebFetch/WebSearch, saves via the batch endpoint) — no API key, no
  spend. A live version (real Anthropic API calls, draft-then-commit
  review step) is planned but gated on explicit approval + a real
  `ANTHROPIC_API_KEY`, same pattern as Chegga's coaching feature.
- Deployment target is Render (free tier), one combined Web Service
  serving both the API and the built frontend — but **shipping there
  needs explicit user sign-off first**, same as any other public-facing
  step, regardless of the $0 cost.
- Notion, if used, stays a mobile quick-capture pocket only — not a
  system of record. `.mcp.json` was copied into the Atlas repo so
  Notion task-tracking works from an Atlas session, same as the other
  three active projects.

## Open questions
- Whether Notion sync actually gets used day to day, or stays theoretical (unresolved from the original planning note).
- Exact auth-gate approach is decided in principle (LittleSprout-Rewards' shared-password pattern) but not yet built.

## What happens next
1. A second capture pass targeting the sources the first one couldn't reach: specific SetupSpawn videos (by URL, not the channel page), and shouldseethis.com/powerfulwebsites.io by hand if still wanted.
2. Build the auth gate.
3. Deploy to Render — **ask before this step**, even though it's free.
4. Once deployed and a key is approved: build live Claude-assisted capture.

## Why this file exists
So a session opened in *this* vault can answer "where does Atlas
actually stand?" without re-reading its own `CLAUDE.md` from scratch.
For real work on the app itself, `Atlas/CLAUDE.md` stays authoritative
— this is a summary, not a replacement.
