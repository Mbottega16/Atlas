// Groups the (growing) flat category list into a handful of intent-based
// buckets so browsing scales past ~30 categories without turning into an
// unscannable dropdown. Purely a display grouping — `category` on Entry
// stays the source of truth; add new categories to a group here as they
// show up, default is fine if one gets missed (falls into "Explore").
export interface CategoryGroup {
  name: string;
  categories: string[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    name: "Build & Code",
    categories: ["developer tools", "game dev", "software", "web utilities"],
  },
  {
    name: "Make (Art & Sound)",
    categories: ["design & media", "audio & video"],
  },
  {
    name: "AI Tools",
    categories: ["ai tools"],
  },
  {
    name: "Learn & Reference",
    categories: ["education", "reference & calculators", "search & reference", "books & reading", "career"],
  },
  {
    name: "Write & Publish",
    categories: ["writing", "publishing"],
  },
  {
    name: "Run Life & Work",
    categories: [
      "productivity",
      "file tools",
      "communication",
      "finance",
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
    categories: ["entertainment", "news & reading", "social media", "archives"],
  },
];

export function groupForCategory(category: string): string {
  const found = CATEGORY_GROUPS.find((g) => g.categories.includes(category));
  return found ? found.name : "Explore & Unwind";
}
