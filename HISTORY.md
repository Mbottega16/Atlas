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
