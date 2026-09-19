// Display grouping only — `category` on an Entry stays the source of truth.
export interface CategoryGroup {
  name: string;
  categories: string[];
}

const GROUP_DEFINITIONS: CategoryGroup[] = [
  { name: "Build & Code", categories: ["developer tools", "game dev", "hosting & ops", "file & web utilities"] },
  { name: "Make (Art & Sound)", categories: ["design & media", "audio & video", "vfx & 3d"] },
  { name: "AI", categories: ["ai tools", "ai engineering"] },
  { name: "Learn & Reference", categories: ["education", "reference & data", "college & career"] },
  { name: "Write & Read", categories: ["writing & publishing", "reading & news"] },
  { name: "Business & Money", categories: ["business & marketing", "money & markets"] },
  {
    name: "Life & Play",
    categories: ["productivity", "security & privacy", "everyday life", "entertainment & social"],
  },
];

// The 2026-09-19 consolidation (34 categories -> 20), mirrored from
// backend/app/taxonomy.py so old bookmarks like ?category=cooking still land.
export const CATEGORY_MOVES: Record<string, string> = {
  "web utilities": "file & web utilities",
  "file tools": "file & web utilities",
  "data & research": "reference & data",
  "reference & calculators": "reference & data",
  "books & reading": "reading & news",
  "news & reading": "reading & news",
  writing: "writing & publishing",
  publishing: "writing & publishing",
  "college & students": "college & career",
  "financial aid": "college & career",
  career: "college & career",
  "business & legal": "business & marketing",
  "marketing & growth": "business & marketing",
  finance: "money & markets",
  "trading & markets": "money & markets",
  communication: "productivity",
  entertainment: "entertainment & social",
  "social media": "entertainment & social",
  "health & fitness": "everyday life",
  cooking: "everyday life",
  "diy & repair": "everyday life",
  shopping: "everyday life",
  "maps & travel": "everyday life",
};

export const OTHER_GROUP = "Everything else";

// Unclaimed categories go to "Everything else" so a new one can never vanish from Browse.
export function resolveGroups(known: string[]): CategoryGroup[] {
  const knownSet = new Set(known);
  const claimed = new Set<string>();
  const groups = GROUP_DEFINITIONS.map((group) => {
    const categories = group.categories.filter((c) => knownSet.has(c));
    categories.forEach((c) => claimed.add(c));
    return { name: group.name, categories };
  }).filter((group) => group.categories.length > 0);

  const leftover = known.filter((c) => !claimed.has(c));
  if (leftover.length > 0) groups.push({ name: OTHER_GROUP, categories: leftover });
  return groups;
}
