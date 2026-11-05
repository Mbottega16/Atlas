// How the Dashboard (the front page) groups the whole library into panels.
// One board, no per-source split: investigation (OSINT) tools by topic, in the
// OSINT4ALL dashboard's order, then every other entry by category.
import type { Entry } from "./api/client";
import { resolveGroups } from "./categoryGroups";
import { ESSENTIAL_TAG } from "./lib/searchCore";

export interface PanelFilter {
  tag?: string;
  category?: string;
}

export interface Panel {
  id: string;
  title: string;
  entries: Entry[];
  /** The Browse filter that shows the same entries in the Library view. */
  filter: PanelFilter;
}

export const OSINT_TAG = "osint";

// Topic tag -> panel title. An entry tagged `osint` sits in the panel of each
// topic tag it has; one with no topic tag sits in "OSINT toolkit".
export const OSINT_TOPICS: [string, string][] = [
  ["throwaway contact", "Throwaway Contact"],
  ["fake identity", "ID Generator"],
  ["unified search", "Unified Search"],
  ["people search", "People"],
  ["username search", "Username"],
  ["email lookup", "Email"],
  ["phone lookup", "Phone"],
  ["social media", "Social Media"],
  ["facebook", "Facebook"],
  ["x-twitter", "X (Twitter)"],
  ["instagram", "Instagram"],
  ["linkedin", "LinkedIn"],
  ["reddit", "Reddit"],
  ["telegram", "Telegram"],
  ["discord", "Discord"],
  ["forums", "Forums & Communities"],
  ["snapchat", "Snapchat"],
  ["tiktok", "TikTok"],
  ["pinterest", "Pinterest"],
  ["periscope", "Periscope"],
  ["xing", "Xing"],
  ["search engine", "Search Engines"],
  ["google cse", "Google CSE"],
  ["maps", "Maps"],
  ["geolocation", "Geo"],
];

const essentialFirst = (a: Entry, b: Entry) =>
  Number(b.tags.includes(ESSENTIAL_TAG)) - Number(a.tags.includes(ESSENTIAL_TAG));

/** Every panel, in board order, with its entries (essentials first, then seed order). Empty panels are dropped. */
export function buildPanels(entries: Entry[]): Panel[] {
  const panels = new Map<string, Panel>();
  const add = (id: string, title: string, filter: PanelFilter) =>
    panels.set(id, { id, title, entries: [], filter });

  add("osint", "OSINT Toolkit", { tag: OSINT_TAG });
  for (const [tag, title] of OSINT_TOPICS) add(`topic:${tag}`, title, { tag });
  const categories = [...new Set(entries.map((e) => e.category))];
  for (const group of resolveGroups(categories)) {
    for (const category of group.categories) add(`category:${category}`, category, { category });
  }

  const topics = new Set(OSINT_TOPICS.map(([tag]) => tag));
  // Seed order in both modes: atlas.json ids follow the seed, and the local API
  // (which lists newest first) numbers entries in the order the seed loaded them.
  for (const e of [...entries].sort((x, y) => x.id - y.id)) {
    if (e.tags.includes(OSINT_TAG)) {
      const own = e.tags.filter((t) => topics.has(t));
      if (own.length === 0) panels.get("osint")!.entries.push(e);
      for (const t of own) panels.get(`topic:${t}`)!.entries.push(e);
    } else {
      panels.get(`category:${e.category}`)?.entries.push(e);
    }
  }
  // Array.prototype.sort is stable, so seed order holds within each half.
  return [...panels.values()]
    .filter((p) => p.entries.length > 0)
    .map((p) => ({ ...p, entries: [...p.entries].sort(essentialFirst) }));
}
