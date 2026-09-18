// Display grouping only — `category` on an Entry stays the source of truth.
export interface CategoryGroup {
  name: string;
  categories: string[];
}

const GROUP_DEFINITIONS: CategoryGroup[] = [
  {
    name: "Build & Code",
    categories: ["developer tools", "game dev", "hosting & ops", "web utilities"],
  },
  {
    name: "Make (Art & Sound)",
    categories: ["design & media", "audio & video", "vfx & 3d"],
  },
  {
    name: "AI",
    categories: ["ai tools", "ai engineering"],
  },
  {
    name: "Learn & Reference",
    categories: ["education", "reference & calculators", "data & research", "books & reading", "career"],
  },
  {
    name: "School & Students",
    categories: ["college & students", "financial aid"],
  },
  {
    name: "Write & Publish",
    categories: ["writing", "publishing"],
  },
  {
    name: "Business & Money",
    categories: ["business & legal", "marketing & growth", "trading & markets", "finance"],
  },
  {
    name: "Run Life & Work",
    categories: [
      "productivity",
      "file tools",
      "communication",
      "health & fitness",
      "security & privacy",
      "shopping",
      "maps & travel",
      "diy & repair",
      "cooking",
    ],
  },
  {
    name: "Explore & Unwind",
    categories: ["entertainment", "news & reading", "social media"],
  },
];

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
