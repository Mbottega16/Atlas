# Atlas — history

Every session's log, **newest first**. Read on demand, not at startup. The current
snapshot is the Session Handoff at the bottom of `CLAUDE.md`.

**Adding an entry:** at the end of a session, move the old handoff here as a new entry
at the top, then overwrite the handoff. One entry per session, 5–10 lines:

```
## YYYY-MM-DD — <what, in a few words>
*<machine: Mac | PC> · <agent: Claude | Antigravity> · commits `abc1234`*
- **Changed:** what is different now, for the user and in the code.
- **Why:** the ask or the problem, and any decision made (with its reason).
- **Verified:** what was run and what it said; what was NOT checked.
- **Left open:** anything unfinished or waiting on the owner.
```

This repo is public, so private planning notes stay in the owner's vault, not here.

---

## 2026-10-25 — OSINT4ALL pilot: profiles, Collections, Tool watch (PR #6, not merged)

*Mac · Claude · commits `95877c1` `0a7f944` `87de649` + docs, branch `osint4all-pilot`*
- **Changed:** entries can carry a checked profile (cost, access, best for, limit, trust warning, date and what was checked, an official-page thumbnail); Alembic `0002`. New Collections tab (one stack, one comparison, from `backend/seed/atlas-collections.json`), Tool watch tab, a "Research or check something online" branch in Find, and the last link-check date in Browse. Library: +4 (Shodan, Censys, SecurityTrails, Maltego), the Wayback Machine profiled, archive.ph given a trust warning, `osint` tag on 10 entries.
- **Why:** the owner approved the OSINT4ALL adaptation (trust layer, comparisons, stacks, task paths, a tool watch) on 2026-10-25 and asked for it now. Landing as approved: existing categories plus an `osint` tag, no new category.
- **Verified:** pytest 51 pass (38 before); each key new test failed with its fix removed; seed load → export byte-identical before and after the change; static build; screenshots of every new view at 1280 and 390 px wide, no console errors or sideways scroll; a profile edit in local mode reached the seed through `export_seed.py`. Every profile fact was re-checked on the tool's own pages: osint4all.com had Maltego and SecurityTrails as paid-only, and both have free plans. NOT checked: the PC, Safari, a real phone.
- **Left open:** merging PR #6 (before Monday's harvest PR if possible); keep or remove archive.ph; profile the 43 essentials before any cost filter.

## 2026-10-24 — the handoff that session left

*From `CLAUDE.md`'s Session Handoff, word for word:*

- **Last Worked On (2026-10-24):** harvest PRs #2 (+43 tools, titles checked, plus the phone
  capture form) and #5 (+1, HN Search) and the discovery-shell polish (#3) are merged and live.
  Docs restructured (no code change).
- **Current State (2026-10-24):** live with 1,258 entries; 38 passing backend pytest tests.
- **Next Up:**
  1. Review and merge open `harvest/*` pull requests.
  2. Run `/deep_curate atlas inbox` (or `/deep_curate atlas [urls]`) for links that arrive as `inbox` issues.
  3. Review any twice-failed links surfaced by the weekly Monday GitHub Action (`backend/seed/link-status.json`).
  4. Check the first weekly harvest run on the Mac (launchd job `com.mybrain.library-weekly`, Mondays 08:00, installed 2026-10-24).

## 2026-10-24 — docs restructured to the uniform standard

*Mac · Claude · docs only, no code touched*
- **Changed:** `CLAUDE.md` now opens with the big picture and follows the standard seven sections; the old sections were regrouped under them. Corrected: the Notion inbox was cut on 2026-10-24 (the intake engine no longer reads it), the repo is public, and the library holds 1,258 entries. This file is new.
- **Why:** one structure across every repo — a short always-read file, and a log read only when needed.
- **Verified:** every line of the old `CLAUDE.md` checked against the new files. No code changed, so pytest was not re-run.
- **Left open:** none.

## 2026-10-24 — the state recorded in the old handoff

*From the old `CLAUDE.md`, word for word:*

- **Last Worked On:**
  - Added a polished responsive Atlas library shell with clear identity, search-oriented introduction, improved nav hierarchy, and calmer card/filter surfaces (2026-10-22; frontend-only).
  - Added Levenshtein typo tolerance to `frontend/src/lib/searchCore.js` (`9344dd3`).
  - Rebuilt Atlas as a fast, free, public static site on Render (`https://atlas-library-znte.onrender.com`, `VITE_STATIC=1`) backed by one tracked seed (`backend/seed/atlas-seed.json`), client-side stemmer search (`frontend/src/lib/searchCore.js`), 20 merged categories (`backend/app/taxonomy.py`), and automated Monday link-health checks (`.github/workflows/link-check.yml`).
  - Repointed 44 off-host redirects (`5e2ee1a`, 2026-09-28).
- **Current State (2026-10-24):**
  - Live with 1,257 curated sites/tools after harvest PR #2 (+43), 38 passing backend pytest tests.
  - Phone capture works: in the GitHub phone app, open Atlas > New issue > "Add a site", paste a link. The weekly run queues it and closes the issue with the result.
- **What Needs To Be Worked On Next:**
  0. Review and merge open `harvest/*` pull requests.
  1. Run `/deep_curate atlas inbox` (or `/deep_curate atlas [urls]`) whenever new tools/sites land in the Notion inbox or as `inbox` issues.
  2. Review any twice-failed links surfaced by the weekly Monday GitHub Action (`backend/seed/link-status.json`).

## Before 2026-10-24

See `git log` and the merged pull requests. Earlier session notes are kept privately in the owner's vault.
