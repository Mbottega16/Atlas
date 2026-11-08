import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SEED_FILE = path.resolve(ROOT, "../backend/seed/atlas-seed.json");
const seed = JSON.parse(fs.readFileSync(SEED_FILE, "utf8"));

console.log(`Loaded ${seed.length} entries from atlas-seed.json`);

const GROUP_DEFS = [
  {
    name: "Security & OSINT",
    categories: ["security & privacy"],
  },
  {
    name: "Build & Code",
    categories: ["developer tools", "game dev", "hosting & ops", "file & web utilities"],
  },
  {
    name: "AI & Machine Learning",
    categories: ["ai tools", "ai engineering"],
  },
  {
    name: "Learn & Reference",
    categories: ["education", "reference & data", "college & career"],
  },
  {
    name: "Make (Art & Sound)",
    categories: ["design & media", "audio & video", "vfx & 3d"],
  },
  {
    name: "Write & Read",
    categories: ["writing & publishing", "reading & news"],
  },
  {
    name: "Business & Money",
    categories: ["business & marketing", "money & markets"],
  },
  {
    name: "Life & Play",
    categories: ["productivity", "everyday life", "entertainment & social"],
  },
];

const catToGroup = new Map();
for (const g of GROUP_DEFS) {
  for (const c of g.categories) catToGroup.set(c, g.name);
}

// Group entries by category
const catMap = new Map();
for (const entry of seed) {
  const cat = entry.category || "other";
  if (!catMap.has(cat)) catMap.set(cat, []);
  catMap.get(cat).push(entry);
}

// Sort entries within each category alphabetically by title
for (const [cat, list] of catMap.entries()) {
  list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
}

const iconsDir = path.resolve(ROOT, "public/icons");
const availableIcons = new Set(fs.existsSync(iconsDir) ? fs.readdirSync(iconsDir) : []);

function getIcon(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "").toLowerCase();
    const exts = [".webp", ".png", ".ico", ".svg", ".jpg"];
    for (const ext of exts) {
      if (availableIcons.has(host + ext)) return `icons/${host}${ext}`;
      if (availableIcons.has("www." + host + ext)) return `icons/www.${host}${ext}`;
    }
    // Fallback to favicon service
    return `https://www.google.com/s2/favicons?domain=${host}&sz=32`;
  } catch {
    return null;
  }
}

// Build groups data
const groupsData = [];
for (const g of GROUP_DEFS) {
  const groupObj = {
    title: g.name,
    panels: [],
  };
  for (const cat of g.categories) {
    const entries = catMap.get(cat) || [];
    groupObj.panels.push({
      title: cat.toUpperCase(),
      category: cat,
      links: entries.map((e) => ({
        title: e.title,
        url: e.link,
        icon: getIcon(e.link),
        desc: e.description || "",
        useCase: e.use_case || "",
        tags: e.tags || [],
      })),
    });
  }
  groupsData.push(groupObj);
}

// Generate the self-contained HTML page
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer">
<meta name="description" content="Atlas link board: complete 1,806-tool library sorted into 20 category panels.">
<title>Atlas — 1,806 Tools</title>
<link rel="icon" href="logo.png" type="image/png">
<style>
/* Authentic OSINT4ALL / start.me board stylesheet */
:root {
  color-scheme: light dark;
  --bg: #12151a;
  --surface: #1b1f25;
  --surface-2: #252a31;
  --line: #2d333b;
  --text: #e6e8eb;
  --muted: #98a1ac;
  --accent: #86acff;
  --visited: #b79cf0;
  --hover: #252d3a;
  --mark: #86acff;
  --icon-bg: #e9edf2;
  --icon-pad: 1px;
  --shadow: none;
  --radius: 10px;
  --font: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
@media (prefers-color-scheme: light) {
  :root {
    --bg: #f3f4f6;
    --surface: #ffffff;
    --surface-2: #eceef2;
    --line: #dde1e7;
    --text: #1a1e24;
    --muted: #5b6471;
    --accent: #2b63d9;
    --visited: #7046b8;
    --hover: #e8eef9;
    --mark: #2b63d9;
    --icon-bg: transparent;
    --icon-pad: 0;
    --shadow: 0 1px 2px rgba(20, 30, 45, 0.06);
  }
}

* { box-sizing: border-box; }
[hidden] { display: none !important; }
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 14px/1.45 var(--font);
  -webkit-font-smoothing: antialiased;
}
a { color: var(--accent); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}

/* Header */
.top {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between; gap: 12px 20px; flex-wrap: wrap;
  padding: 10px 16px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.brand { display: flex; align-items: center; gap: 10px; min-width: 0; }
.mark { color: var(--mark); flex: none; width: 28px; height: 28px; }
.brand h1 { margin: 0; font-size: 19px; line-height: 1.15; letter-spacing: 0.02em; font-weight: 700; }
.meta { margin: 1px 0 0; color: var(--muted); font-size: 12.5px; }
.controls { display: flex; align-items: center; gap: 10px; flex: 1 1 360px; justify-content: flex-end; min-width: 0; }

.search {
  position: relative; display: flex; align-items: center;
  flex: 0 1 360px; min-width: 0;
}
.search svg { position: absolute; left: 10px; color: var(--muted); pointer-events: none; }
.search input {
  width: 100%; height: 36px; padding: 0 34px 0 34px;
  border: 1px solid var(--line); border-radius: 8px;
  background: var(--surface-2); color: var(--text); font: 14px var(--font);
}
.search input::placeholder { color: var(--muted); }
.search input::-webkit-search-cancel-button { display: none; }
.search kbd {
  position: absolute; right: 8px;
  min-width: 20px; padding: 1px 6px; border: 1px solid var(--line); border-radius: 5px;
  color: var(--muted); font: 11.5px/1.4 var(--font); text-align: center; pointer-events: none;
}
.search input:focus + kbd, .search input:not(:placeholder-shown) + kbd { display: none; }
.count { color: var(--muted); font-size: 13px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.btn {
  height: 36px; padding: 0 12px; flex: none;
  border: 1px solid var(--line); border-radius: 8px;
  background: var(--surface); color: var(--text); font: 500 13px var(--font); cursor: pointer;
  transition: all 0.15s ease;
}
.btn:hover { background: var(--hover); }
.btn[aria-pressed="true"] { background: var(--accent); border-color: var(--accent); color: var(--bg); }

/* Quick Category Filter Bar */
.filter-chips {
  display: flex; gap: 8px; overflow-x: auto; padding: 8px 16px;
  background: var(--surface-2); border-bottom: 1px solid var(--line);
  scrollbar-width: none;
}
.filter-chips::-webkit-scrollbar { display: none; }
.chip {
  padding: 4px 10px; border-radius: 16px; border: 1px solid var(--line);
  background: var(--surface); color: var(--text); font-size: 12px;
  white-space: nowrap; cursor: pointer; text-decoration: none;
}
.chip:hover { background: var(--hover); }

/* Board */
.board { padding: 14px 16px 24px; max-width: 1720px; margin: 0 auto; }
.group { margin: 0 0 24px; }
.group-head {
  display: flex; align-items: baseline; gap: 10px; margin: 0 2px 10px; padding-bottom: 6px;
  border-bottom: 1px solid var(--line);
  font: 700 13.5px/1.3 var(--font); letter-spacing: 0.08em; text-transform: uppercase; color: var(--mark);
}
.group-head .gnum { color: var(--muted); font-weight: 500; font-size: 12px; letter-spacing: 0; text-transform: none; }
.group-panels {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  align-items: flex-start;
}

.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.panel h3 { margin: 0; }
.panel-head {
  display: flex; align-items: center; gap: 8px; width: 100%;
  padding: 10px 14px; border: 0; background: transparent; cursor: pointer;
  color: var(--text); font: 700 12.5px/1.3 var(--font); letter-spacing: 0.07em; text-transform: uppercase; text-align: left;
}
.panel-head:hover { background: var(--surface-2); }
.panel-head .name { flex: 1; min-width: 0; }
.panel-head .num {
  padding: 2px 8px; border-radius: 10px; background: var(--surface-2);
  color: var(--muted); font-size: 11px; letter-spacing: 0; font-variant-numeric: tabular-nums;
}
.panel-head .chev { color: var(--muted); transition: transform 0.15s ease; flex: none; }
.panel.closed .chev { transform: rotate(-90deg); }
.panel.closed .links { display: none; }
.board.searching .panel.closed .links { display: block; }
.board.searching .panel.closed .chev { transform: none; }

.links { list-style: none; margin: 0; padding: 6px 6px 8px; border-top: 1px solid var(--line); }
.link-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  border-radius: 6px;
}
.link-row:hover { background: var(--hover); }
.link-row a {
  display: flex; align-items: center; gap: 9px; flex: 1; min-width: 0;
  padding: 5px 8px; color: var(--text); text-decoration: none; font-size: 13.5px;
}
.link-row a:visited .t { color: var(--visited); }
.link-row a:hover .t { color: var(--accent); }
.link-row .t { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-weight: 500; }
.link-row img, .link-row .globe { width: 16px; height: 16px; flex: none; border-radius: 3px; }
.link-row img { background: var(--icon-bg); padding: var(--icon-pad); object-fit: contain; }
.link-row .globe { color: var(--muted); }

.info-btn {
  background: transparent; border: none; padding: 6px 8px; color: var(--muted);
  cursor: pointer; border-radius: 4px; display: flex; align-items: center;
}
.info-btn:hover { color: var(--accent); background: var(--surface-2); }

.preview-popup {
  position: fixed; z-index: 100; max-width: 360px; padding: 12px 14px;
  background: var(--surface); border: 1px solid var(--line); border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3); font-size: 12.5px; line-height: 1.4;
  pointer-events: none; display: none;
}
.preview-popup .p-title { font-weight: 700; color: var(--accent); margin-bottom: 4px; }
.preview-popup .p-desc { margin-bottom: 6px; }
.preview-popup .p-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.preview-popup .p-tag { padding: 1px 6px; border-radius: 4px; background: var(--surface-2); color: var(--muted); font-size: 11px; }

.empty { margin: 40px auto; padding: 0 12px; color: var(--muted); text-align: center; font-size: 16px; }

.foot {
  margin: 30px auto 0; padding: 14px 16px 28px;
  color: var(--muted); font-size: 12.5px; text-align: center; border-top: 1px solid var(--line);
}

@media (max-width: 640px) {
  .top { padding: 10px 12px; }
  .controls { flex-basis: 100%; flex-wrap: wrap; }
  .search { flex: 1 1 100%; }
  .count { display: none; }
  .board { padding: 12px 10px; }
  .group-panels { grid-template-columns: 1fr; gap: 12px; }
  .link-row a { padding: 7px 6px; font-size: 14.5px; }
}
</style>
</head>
<body>
<header class="top">
  <div class="brand">
    <svg class="mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="13.5" cy="13.5" r="8.5" fill="none" stroke="currentColor" stroke-width="2.6"/>
      <path d="M20 20l7 7" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
      <circle cx="13.5" cy="13.5" r="2.6" fill="currentColor"/>
    </svg>
    <div>
      <h1>Atlas</h1>
      <p class="meta">1,806 tools in 20 panels · OSINT, Dev, AI, Media & Reference</p>
    </div>
  </div>
  <div class="controls">
    <label class="search">
      <span class="sr-only">Search links</span>
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.6-3.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      <input id="q" type="search" placeholder="Search 1,806 links (/)" autocomplete="off" spellcheck="false">
      <kbd aria-hidden="true">/</kbd>
    </label>
    <span class="count" id="count">1,806 links</span>
    <button id="az" class="btn" type="button" title="Alphabetical order">A–Z</button>
    <button id="toggle-all" class="btn" type="button">Collapse all</button>
  </div>
</header>

<div class="filter-chips">
  ${GROUP_DEFS.map((g) => `<a class="chip" href="#${g.name.replace(/[^a-zA-Z0-9]/g, '-')}">${g.name}</a>`).join("")}
</div>

<main id="board" class="board"></main>
<p id="empty" class="empty" hidden>No matching links found.</p>

<div id="preview-popup" class="preview-popup">
  <div class="p-title" id="pop-title"></div>
  <div class="p-desc" id="pop-desc"></div>
  <div class="p-tags" id="pop-tags"></div>
</div>

<footer class="foot">
  <p>Atlas Library &middot; Unified 1,806-tool catalog &middot; Filter with &ldquo;/&rdquo;, click headers to toggle panels.</p>
</footer>

<script>
window.DATA = ${JSON.stringify(groupsData)};

(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const board = $("board"), q = $("q"), count = $("count"), empty = $("empty");
  const toggleAll = $("toggle-all"), azBtn = $("az");
  const popup = $("preview-popup"), popTitle = $("pop-title"), popDesc = $("pop-desc"), popTags = $("pop-tags");
  const groups = window.DATA || [];

  const SVG = "http://www.w3.org/2000/svg";
  function svg(viewBox, size, paths) {
    const s = document.createElementNS(SVG, "svg");
    s.setAttribute("viewBox", viewBox);
    s.setAttribute("width", size);
    s.setAttribute("height", size);
    s.setAttribute("aria-hidden", "true");
    for (const [tag, attrs] of paths) {
      const el = document.createElementNS(SVG, tag);
      for (const k in attrs) el.setAttribute(k, attrs[k]);
      s.append(el);
    }
    return s;
  }
  const line = { fill: "none", stroke: "currentColor", "stroke-width": "1.4" };
  const globe = () => {
    const g = svg("0 0 16 16", 16, [
      ["circle", { cx: 8, cy: 8, r: 6.3, ...line }],
      ["path", { d: "M1.7 8h12.6M8 1.7c2.1 2.1 2.1 10.5 0 12.6M8 1.7c-2.1 2.1-2.1 10.5 0 12.6", ...line }],
    ]);
    g.setAttribute("class", "globe");
    return g;
  };
  const chevron = () => {
    const c = svg("0 0 16 16", 14, [["path", { d: "M4 6l4 4 4-4", fill: "none", stroke: "currentColor", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" }]]);
    c.setAttribute("class", "chev");
    return c;
  };
  const infoIcon = () =>
    svg("0 0 16 16", 14, [
      ["circle", { cx: 8, cy: 8, r: 6.3, ...line }],
      ["path", { d: "M8 7.2v4", ...line, "stroke-linecap": "round", "stroke-width": "1.6" }],
      ["circle", { cx: 8, cy: 4.9, r: 0.9, fill: "currentColor" }],
    ]);

  let allPanels = [];
  let totalLinks = 0;

  function renderGrouped() {
    board.innerHTML = "";
    allPanels = [];
    totalLinks = 0;

    groups.forEach((g) => {
      const gSection = document.createElement("section");
      gSection.className = "group";
      gSection.id = g.title.replace(/[^a-zA-Z0-9]/g, "-");

      const gHead = document.createElement("header");
      gHead.className = "group-head";
      const gTitle = document.createElement("span");
      gTitle.textContent = g.title;
      const gNum = document.createElement("span");
      gNum.className = "gnum";
      let gLinkCount = 0;
      g.panels.forEach((p) => (gLinkCount += p.links.length));
      totalLinks += gLinkCount;
      gNum.textContent = "(" + g.panels.length + " panels · " + gLinkCount + " links)";
      gHead.append(gTitle, gNum);
      gSection.append(gHead);

      const pGrid = document.createElement("div");
      pGrid.className = "group-panels";

      g.panels.forEach((p) => {
        const pEl = buildPanel(p);
        pGrid.append(pEl);
      });

      gSection.append(pGrid);
      board.append(gSection);
    });

    count.textContent = totalLinks.toLocaleString() + " links";
  }

  function renderAlphabetical() {
    board.innerHTML = "";
    allPanels = [];

    const sortedPanels = [];
    groups.forEach((g) => {
      g.panels.forEach((p) => sortedPanels.push(p));
    });
    sortedPanels.sort((a, b) => a.title.localeCompare(b.title));

    const pGrid = document.createElement("div");
    pGrid.className = "group-panels";
    sortedPanels.forEach((p) => {
      const pEl = buildPanel(p);
      pGrid.append(pEl);
    });
    board.append(pGrid);
  }

  function buildPanel(p) {
    const el = document.createElement("section");
    el.className = "panel";

    const h3 = document.createElement("h3");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "panel-head";

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = p.title;

    const num = document.createElement("span");
    num.className = "num";
    num.textContent = p.links.length;

    btn.append(name, num, chevron());
    h3.append(btn);

    const ul = document.createElement("ul");
    ul.className = "links";

    const linkItems = p.links.map((l) => {
      const li = document.createElement("li");
      li.className = "link-row";

      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      if (l.icon) {
        const img = document.createElement("img");
        img.src = l.icon;
        img.alt = "";
        img.width = img.height = 16;
        img.loading = "lazy";
        img.addEventListener("error", () => img.replaceWith(globe()), { once: true });
        a.append(img);
      } else {
        a.append(globe());
      }

      const t = document.createElement("span");
      t.className = "t";
      t.textContent = l.title;
      a.append(t);
      li.append(a);

      if (l.desc || (l.tags && l.tags.length)) {
        const info = document.createElement("button");
        info.type = "button";
        info.className = "info-btn";
        info.setAttribute("aria-label", "Details for " + l.title);
        info.append(infoIcon());
        info.addEventListener("mouseenter", (e) => showPopup(l, e));
        info.addEventListener("mouseleave", hidePopup);
        li.append(info);
      }

      ul.append(li);

      const hay = (
        l.title + " " + l.url + " " + (l.desc || "") + " " + (l.useCase || "") + " " + (l.tags || []).join(" ") + " " + p.title
      ).toLowerCase();

      return { li, hay };
    });

    el.append(h3, ul);

    btn.addEventListener("click", () => {
      if (board.classList.contains("searching")) return;
      el.classList.toggle("closed");
    });

    const panelObj = { el, btn, num, title: p.title, items: linkItems };
    allPanels.push(panelObj);
    return el;
  }

  function showPopup(l, e) {
    popTitle.textContent = l.title;
    popDesc.textContent = l.desc || l.useCase || l.url;
    popTags.innerHTML = "";
    (l.tags || []).forEach((t) => {
      const span = document.createElement("span");
      span.className = "p-tag";
      span.textContent = t;
      popTags.append(span);
    });
    const rect = e.target.getBoundingClientRect();
    popup.style.top = Math.min(window.innerHeight - 150, rect.bottom + 6) + "px";
    popup.style.left = Math.max(12, Math.min(window.innerWidth - 380, rect.left - 180)) + "px";
    popup.style.display = "block";
  }

  function hidePopup() {
    popup.style.display = "none";
  }

  // Toggle Collapse All / Expand All
  let allCollapsed = false;
  toggleAll.addEventListener("click", () => {
    allCollapsed = !allCollapsed;
    allPanels.forEach((p) => {
      if (allCollapsed) p.el.classList.add("closed");
      else p.el.classList.remove("closed");
    });
    toggleAll.textContent = allCollapsed ? "Expand all" : "Collapse all";
  });

  // A–Z Toggle
  let isAz = false;
  azBtn.addEventListener("click", () => {
    isAz = !isAz;
    azBtn.setAttribute("aria-pressed", isAz);
    if (isAz) renderAlphabetical();
    else renderGrouped();
    if (q.value.trim()) runSearch(q.value.trim());
  });

  // Search logic
  function runSearch(raw) {
    const terms = raw.toLowerCase().split(/\\s+/).filter(Boolean);
    if (!terms.length) {
      board.classList.remove("searching");
      allPanels.forEach((p) => {
        p.el.hidden = false;
        p.items.forEach((item) => (item.li.hidden = false));
        p.num.textContent = p.items.length;
      });
      document.querySelectorAll(".group").forEach((g) => (g.hidden = false));
      empty.hidden = true;
      count.textContent = totalLinks.toLocaleString() + " links";
      return;
    }

    board.classList.add("searching");
    let matchTotal = 0;

    allPanels.forEach((p) => {
      let panelMatches = 0;
      p.items.forEach((item) => {
        const matches = terms.every((t) => item.hay.includes(t));
        item.li.hidden = !matches;
        if (matches) panelMatches++;
      });
      p.el.hidden = panelMatches === 0;
      p.num.textContent = panelMatches;
      matchTotal += panelMatches;
    });

    document.querySelectorAll(".group").forEach((g) => {
      const hasVisible = Array.from(g.querySelectorAll(".panel")).some((p) => !p.hidden);
      g.hidden = !hasVisible;
    });

    empty.hidden = matchTotal > 0;
    count.textContent = matchTotal.toLocaleString() + " of " + totalLinks.toLocaleString() + " links";
  }

  q.addEventListener("input", (e) => runSearch(e.target.value.trim()));

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== q) {
      e.preventDefault();
      q.focus();
      q.select();
    }
    if (e.key === "Escape" && document.activeElement === q) {
      q.value = "";
      runSearch("");
      q.blur();
    }
  });

  renderGrouped();
})();
</script>
</body>
</html>`;

const outPath1 = path.resolve(ROOT, "public/board.html");
const outPath2 = path.resolve(ROOT, "dist/board.html");
const outPath3 = path.resolve(ROOT, "dist/index.html");

fs.writeFileSync(outPath1, html, "utf8");
fs.writeFileSync(outPath2, html, "utf8");
fs.writeFileSync(outPath3, html, "utf8");

console.log(`Generated:
- ${outPath1} (${(html.length / 1024).toFixed(1)} KB)
- ${outPath2}
- ${outPath3}`);
