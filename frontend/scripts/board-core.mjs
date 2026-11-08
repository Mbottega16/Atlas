// The Atlas board's rules, with no page or storage in them: which panels a view shows,
// how a view is written in the address (#g=…, #c=…, #v=favorites, &q=…), and how the
// favorites and recently visited lists stored in the browser are read and changed.
// build-atlas-board.mjs copies this file into the board page (dropping the `export`
// words), and board-core.test.mjs tests it: `npm test` in frontend/.

/** A JSON array of favorite links stored in this browser. */
export const FAVORITES_KEY = "atlas.favorites";
/** A JSON array of every link opened from Atlas in this browser. */
export const VISITED_KEY = "atlas.visited";
/** The board's own list, newest first: a JSON array of { link, at } with an ISO time. */
export const RECENT_KEY = "atlas.recent";
export const RECENT_LIMIT = 15;

/** "Build & Code" -> "build-code". */
export function slug(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const ACRONYMS = { ai: "AI", vfx: "VFX", "3d": "3D", ui: "UI", ux: "UX" };

/** "game dev" -> "Game dev", "ai tools" -> "AI tools", "vfx & 3d" -> "VFX & 3D". */
export function label(category) {
  const words = String(category).split(" ").map((w) => ACRONYMS[w] || w);
  if (words[0]) words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ");
}

/** Read the address hash into a view. A name that no longer exists falls back to everything. */
export function parseView(hash, groups) {
  const raw = String(hash || "").replace(/^#/, "");
  const params = new URLSearchParams(raw);
  const q = (params.get("q") || "").trim();
  const v = params.get("v");
  if (v === "favorites" || v === "recent") return { kind: v, q };
  const c = params.get("c");
  if (c) {
    for (const g of groups) {
      for (const p of g.panels) {
        if (slug(p.category) === c) return { kind: "category", group: slug(g.title), category: c, q };
      }
    }
  }
  const gs = params.get("g");
  if (gs && groups.some((g) => slug(g.title) === gs)) return { kind: "group", group: gs, q };
  // The board's first version linked to "#Build---Code"-style anchors.
  const legacy = groups.find((g) => g.title.replace(/[^a-zA-Z0-9]/g, "-") === raw);
  if (legacy) return { kind: "group", group: slug(legacy.title), q: "" };
  return { kind: "all", q };
}

/** The hash for a view: "" for everything, else "#g=…", "#c=…" or "#v=…", plus "&q=…" while searching. */
export function viewHash(view) {
  const params = new URLSearchParams();
  if (view.kind === "favorites" || view.kind === "recent") params.set("v", view.kind);
  else if (view.kind === "category") params.set("c", view.category);
  else if (view.kind === "group") params.set("g", view.group);
  if (view.q) params.set("q", view.q);
  const text = params.toString();
  return text ? "#" + text : "";
}

/** The sidebar item a view belongs to: "all", "v:favorites", "g:build-code", "c:game-dev". */
export function viewKey(view) {
  if (view.kind === "favorites" || view.kind === "recent") return "v:" + view.kind;
  if (view.kind === "group") return "g:" + view.group;
  if (view.kind === "category") return "c:" + view.category;
  return "all";
}

/** The panels a view shows, in board order. Favorites and recent are built by the page. */
export function panelsFor(view, groups) {
  if (view.kind === "all") return groups.flatMap((g) => g.panels);
  if (view.kind === "group") {
    const g = groups.find((x) => slug(x.title) === view.group);
    return g ? g.panels : [];
  }
  if (view.kind === "category") {
    for (const g of groups) for (const p of g.panels) if (slug(p.category) === view.category) return [p];
  }
  return [];
}

/** The heading for a view: its title, plus the group it sits in for a category. */
export function viewHeading(view, groups) {
  if (view.kind === "favorites") return { title: "Favorites", group: null };
  if (view.kind === "recent") return { title: "Recently visited", group: null };
  for (const g of groups) {
    if (view.kind === "group" && slug(g.title) === view.group) return { title: g.title, group: null };
    if (view.kind === "category") {
      const p = g.panels.find((x) => slug(x.category) === view.category);
      if (p) return { title: label(p.category), group: { title: g.title, hash: "#g=" + slug(g.title) } };
    }
  }
  return { title: "All tools", group: null };
}

/** A stored list of links (favorites, visited): each text link once, in stored order. Anything else is dropped. */
export function readLinks(raw) {
  let list;
  try {
    list = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(list)) return [];
  const seen = new Set();
  const out = [];
  for (const x of list) {
    if (typeof x === "string" && x && !seen.has(x)) {
      seen.add(x);
      out.push(x);
    }
  }
  return out;
}

/** Turn one link on or off in a list of links. A new favorite goes at the end. */
export function setLink(list, link, on) {
  const rest = list.filter((x) => x !== link);
  return on ? [...rest, link] : rest;
}

/** The stored recent visits: newest first, each link once, at most RECENT_LIMIT. Bad items are dropped. */
export function readRecent(raw) {
  let list;
  try {
    list = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(list)) return [];
  const valid = list.filter(
    (x) => x && typeof x.link === "string" && x.link && typeof x.at === "string" && !Number.isNaN(Date.parse(x.at)),
  );
  valid.sort((a, b) => Date.parse(b.at) - Date.parse(a.at));
  const seen = new Set();
  const out = [];
  for (const x of valid) {
    if (seen.has(x.link)) continue;
    seen.add(x.link);
    out.push({ link: x.link, at: x.at });
  }
  return out.slice(0, RECENT_LIMIT);
}

/** Record a visit: the link moves to the front, once, and the list keeps the newest RECENT_LIMIT. */
export function addRecent(list, link, at) {
  return [{ link, at }, ...list.filter((x) => x.link !== link)].slice(0, RECENT_LIMIT);
}

/** Search words: lower case, split on spaces. */
export function searchTerms(raw) {
  return String(raw || "")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

/** A row matches when every search word appears somewhere in its text. */
export function matches(hay, terms) {
  return terms.every((t) => hay.includes(t));
}
