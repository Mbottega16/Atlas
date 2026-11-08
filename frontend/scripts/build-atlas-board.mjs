// Builds the Atlas board, the site's front page, from backend/seed/atlas-seed.json.
// `npm run build` runs it after vite build. It writes into dist/:
//   index.html    the board: every entry in category panels, a sidebar of groups and
//                 their categories, favorites and recently visited
//   board.html    the same page, so older /board.html links keep working
//   library.html  the React app vite just built (Find, Browse, Collections, Tool watch,
//                 and Capture when run locally), moved out of index.html
// The page is board.css + board-core.mjs + board-page.js, put inline, under a
// Content-Security-Policy that allows exactly those inline blocks and images from
// this site only. Favicons come from frontend/public/icons/; a host with none gets
// a drawn globe.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const DIST = path.join(ROOT, "dist");
const SEED_FILE = path.resolve(ROOT, "../backend/seed/atlas-seed.json");
const ICONS_DIR = path.join(ROOT, "public/icons");

// The sidebar's groups, in order. A category missing here still shows, under "Everything else".
const GROUP_DEFS = [
  { name: "Security & OSINT", categories: ["security & privacy"] },
  { name: "Build & Code", categories: ["developer tools", "game dev", "hosting & ops", "file & web utilities"] },
  { name: "AI & Machine Learning", categories: ["ai tools", "ai engineering"] },
  { name: "Learn & Reference", categories: ["education", "reference & data", "college & career"] },
  { name: "Make (Art & Sound)", categories: ["design & media", "audio & video", "vfx & 3d"] },
  { name: "Write & Read", categories: ["writing & publishing", "reading & news"] },
  { name: "Business & Money", categories: ["business & marketing", "money & markets"] },
  { name: "Life & Play", categories: ["productivity", "everyday life", "entertainment & social"] },
];
const OTHER = "Everything else";

const seed = JSON.parse(fs.readFileSync(SEED_FILE, "utf8"));

const icons = new Set(fs.existsSync(ICONS_DIR) ? fs.readdirSync(ICONS_DIR) : []);
function iconFor(url) {
  let host;
  try {
    host = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return null;
  }
  for (const ext of [".webp", ".png", ".ico", ".svg", ".jpg"]) {
    if (icons.has(host + ext)) return `icons/${host}${ext}`;
    if (icons.has("www." + host + ext)) return `icons/www.${host}${ext}`;
  }
  return null;
}

// Entries by category, A-Z by title. Only web links become rows.
const byCategory = new Map();
for (const e of seed) {
  if (!/^https?:\/\//i.test(e.link || "")) continue;
  const cat = e.category || "other";
  if (!byCategory.has(cat)) byCategory.set(cat, []);
  byCategory.get(cat).push(e);
}
for (const list of byCategory.values()) list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));

const claimed = new Set(GROUP_DEFS.flatMap((g) => g.categories));
const leftovers = [...byCategory.keys()].filter((c) => !claimed.has(c)).sort();
const defs = leftovers.length ? [...GROUP_DEFS, { name: OTHER, categories: leftovers }] : GROUP_DEFS;

let noIcon = 0;
const groups = defs
  .map((g) => ({
    title: g.name,
    panels: g.categories
      .filter((c) => byCategory.has(c))
      .map((c) => ({
        title: c.toUpperCase(),
        category: c,
        links: byCategory.get(c).map((e) => {
          const icon = iconFor(e.link);
          if (!icon) noIcon++;
          return {
            title: e.title || e.link,
            url: e.link,
            icon,
            desc: e.description || "",
            useCase: e.use_case || "",
            tags: Array.isArray(e.tags) ? e.tags : [],
          };
        }),
      })),
  }))
  .filter((g) => g.panels.length);

const panelCount = groups.reduce((n, g) => n + g.panels.length, 0);
const total = groups.reduce((n, g) => n + g.panels.reduce((m, p) => m + p.links.length, 0), 0);
const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

// JSON inside a <script> must not be able to close it ("</script>") or break a JS string.
const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);
const safeJson = (value) =>
  JSON.stringify(value).replace(/</g, "\\u003c").split(LS).join("\\u2028").split(PS).join("\\u2029");

const css = fs.readFileSync(path.join(HERE, "board.css"), "utf8");
const core = fs.readFileSync(path.join(HERE, "board-core.mjs"), "utf8").replace(/^export\s+/gm, "");
const page = fs.readFileSync(path.join(HERE, "board-page.js"), "utf8");
if (/^\s*import\s/m.test(core)) throw new Error("board-core.mjs can't import anything: it is pasted into the page");

const script = `
(function () {
"use strict";
// Atlas refuses to run inside another site's frame.
if (window.top !== window.self) {
  document.body.textContent = "Atlas can't be shown inside another site. Open it in its own tab.";
  return;
}
${core}
// Old links to the Library view ("?tab=browse&category=cooking") open it in library.html.
const libraryUrl = libraryRedirect(location.search);
if (libraryUrl) {
  location.replace(libraryUrl + location.hash);
  return;
}
const GROUPS = ${safeJson(groups)};
${page}
})();
`;

const sha = (text) => `'sha256-${crypto.createHash("sha256").update(text, "utf8").digest("base64")}'`;
const csp = [
  "default-src 'none'",
  "img-src 'self'",
  `style-src ${sha(css)}`,
  `script-src ${sha(script)}`,
  "base-uri 'none'",
  "form-action 'none'",
].join("; ");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="referrer" content="no-referrer">
<meta name="description" content="Atlas: a personal library of ${fmt(total)} useful websites and tools.">
<title>Atlas</title>
<link rel="icon" href="logo.png" type="image/png">
<style>${css}</style>
</head>
<body>
<a class="skip" id="skip" href="#board">Skip to the links</a>
<header class="top" id="top">
  <button id="side-toggle" class="icon-btn" type="button" aria-controls="side" aria-expanded="true" aria-label="Categories" title="Show or hide the categories">
    <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true"><path d="M2.5 4h11M2.5 8h11M2.5 12h11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
  </button>
  <a class="brand" href="./">
    <svg class="mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="13.5" cy="13.5" r="8.5" fill="none" stroke="currentColor" stroke-width="2.6"/>
      <path d="M20 20l7 7" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
      <circle cx="13.5" cy="13.5" r="2.6" fill="currentColor"/>
    </svg>
    <h1>Atlas</h1>
  </a>
  <div class="controls">
    <label class="search">
      <span class="sr-only">Search the library</span>
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.6-3.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      <input id="q" type="search" placeholder="Search ${fmt(total)} links" autocomplete="off" spellcheck="false" enterkeyhint="search">
      <kbd aria-hidden="true">/</kbd>
    </label>
    <button id="az" class="btn" type="button" aria-pressed="false" title="Show the panels in A&ndash;Z order">A&ndash;Z</button>
    <button id="toggle-all" class="btn" type="button">Collapse all</button>
    <a class="btn lib-btn" href="library.html?tab=find">Library view</a>
  </div>
</header>
<div class="layout">
  <nav id="side" class="side" aria-label="Categories">
    <div class="side-head">
      <strong>Categories</strong>
      <button id="side-close" class="icon-btn" type="button" aria-label="Close categories">
        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
    </div>
    <ul id="side-list"></ul>
    <a class="lib" href="library.html?tab=find">Library view: Find, Browse, Collections, Tool watch</a>
  </nav>
  <div id="backdrop" class="backdrop" hidden></div>
  <main id="board" class="board" tabindex="-1">
    <div class="view-head">
      <h2 id="view-title" class="view-title">All tools</h2>
      <p id="count" class="count" aria-live="polite"></p>
    </div>
    <div id="grid" class="grid"></div>
    <p id="empty" class="empty" hidden></p>
    <noscript><p class="empty">The board needs JavaScript to show its links.</p></noscript>
  </main>
</div>
<div id="preview-popup" class="preview-popup" role="tooltip" hidden>
  <div class="p-title" id="pop-title"></div>
  <div class="p-desc" id="pop-desc"></div>
  <div class="p-use" id="pop-use"></div>
  <div class="p-tags" id="pop-tags"></div>
</div>
<script>${script}</script>
</body>
</html>
`;

const indexFile = path.join(DIST, "index.html");
const libraryFile = path.join(DIST, "library.html");
if (!fs.existsSync(indexFile)) {
  console.error("dist/index.html is missing: run `npm run build` (vite build, then this script).");
  process.exit(1);
}
const built = fs.readFileSync(indexFile, "utf8");
if (built.includes('id="root"')) fs.writeFileSync(libraryFile, built);
else if (!fs.existsSync(libraryFile)) {
  console.error("dist/index.html isn't the React app and dist/library.html is missing: run `npm run build`.");
  process.exit(1);
}
fs.writeFileSync(indexFile, html);
fs.writeFileSync(path.join(DIST, "board.html"), html);
fs.writeFileSync(path.join(ROOT, "public/board.html"), html);
console.log(
  `Board: ${fmt(total)} links in ${panelCount} panels and ${groups.length} groups (${noIcon} without a saved icon) ` +
    `-> dist/index.html and dist/board.html; the React app -> dist/library.html (${(html.length / 1024).toFixed(0)} KB)`,
);
