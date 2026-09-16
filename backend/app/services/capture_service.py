"""Live Claude-assisted capture (Phase 7).

Dormant until ANTHROPIC_API_KEY is set — every entry point raises until then,
same guard pattern as Chegga's coaching_service and Almanac's capture_service.
When a key is present, given a list of URLs this asks Claude to return draft,
unsaved Entry records (category / description / use case / tags). The caller
reviews them and commits via POST /api/entries/batch.

Cost note: these calls run on whoever's key is in ANTHROPIC_API_KEY — the
site operator's. That's why it stays off until explicitly switched on.
"""

import json

from app.config import settings
from app.schemas.entry import EntryCreate

MODEL = "claude-sonnet-5"

# Kept loose on purpose — the library's categories grow with each import and
# a rigid enum here would fight that. Claude is told to prefer an existing one.
_CATEGORY_HINT = (
    "e.g. productivity, dev tools, design, ai, vfx & 3d, game dev, hosting & ops, "
    "business & legal, marketing & growth, data & research, financial aid, "
    "college & students, publishing, trading & markets, reference, misc"
)

_SYSTEM = f"""You catalog useful websites and tools for a personal reference library.
For each URL you are given, produce one JSON object with keys:
link (echo the URL back),
title (the site/tool name),
category (one short lowercase label — reuse an existing one where it fits: {_CATEGORY_HINT}),
description (1-2 factual sentences you write yourself — what the tool is),
use_case (one short phrase: when you'd reach for this),
tags (2-5 lowercase theme strings).
Reply with ONLY a JSON array, no prose."""


def _require_key() -> str:
    if not settings.anthropic_api_key:
        raise RuntimeError(
            "ANTHROPIC_API_KEY is not set — live capture is disabled. "
            "Set it in the environment to enable POST /api/capture/research."
        )
    return settings.anthropic_api_key


def research_links(links: list[str], notes: str | None = None) -> list[EntryCreate]:
    key = _require_key()
    from anthropic import Anthropic, APIError  # lazy so the dep stays optional until used

    client = Anthropic(api_key=key)
    user = "URLs:\n" + "\n".join(links)
    if notes:
        user += f"\n\nExtra context from the librarian:\n{notes}"

    try:
        msg = client.messages.create(
            model=MODEL,
            max_tokens=4096,
            system=_SYSTEM,
            messages=[{"role": "user", "content": user}],
        )
    except APIError as e:
        # Surfaces as a clean 503 (see the route) instead of an unhandled
        # 500 — covers a bad/rejected key, no credit balance, rate limits,
        # or Anthropic-side outages, none of which are this app's fault.
        raise RuntimeError(f"Anthropic API error: {e}") from e
    text = "".join(b.text for b in msg.content if b.type == "text").strip()
    if text.startswith("```"):
        text = text.split("```")[1].removeprefix("json").strip()
    rows = json.loads(text)
    return [EntryCreate(**row) for row in rows]
