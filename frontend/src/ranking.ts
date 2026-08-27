import type { Entry } from "./api/client";

// Tag that marks an entry as a first-pick in its area. Applied by hand during
// the curated batch imports (see Atlas/CLAUDE.md). Used to float the "if you
// only open one" links to the top of any narrowed view.
export const ESSENTIAL_TAG = "essential";

function rank(e: Entry): number {
  if (e.is_favorite) return 0;
  if (e.tags.includes(ESSENTIAL_TAG)) return 1;
  return 2;
}

/**
 * Stable sort: favorites first, then `essential`-tagged, then everything else
 * in the order the API returned it (newest-first). Does not mutate the input.
 */
export function rankEntries(entries: Entry[]): Entry[] {
  return entries
    .map((e, i) => [e, i] as const)
    .sort(([a, ai], [b, bi]) => rank(a) - rank(b) || ai - bi)
    .map(([e]) => e);
}

export function isEssential(e: Entry): boolean {
  return e.tags.includes(ESSENTIAL_TAG);
}
