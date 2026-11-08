// The Atlas board's page script. build-atlas-board.mjs wraps it, together with
// board-core.mjs and the library as GROUPS, in one function inside board.html.
// Rules (views, the address, stored lists) live in board-core.mjs; this file only
// draws the page and wires up clicks, keys and storage.

const $ = (id) => document.getElementById(id);
const header = $("top");
const side = $("side");
const sideList = $("side-list");
const sideToggle = $("side-toggle");
const sideClose = $("side-close");
const backdrop = $("backdrop");
const board = $("board");
const grid = $("grid");
const titleEl = $("view-title");
const countEl = $("count");
const emptyEl = $("empty");
const q = $("q");
const azBtn = $("az");
const toggleAllBtn = $("toggle-all");
const popup = $("preview-popup");
const popTitle = $("pop-title");
const popDesc = $("pop-desc");
const popUse = $("pop-use");
const popTags = $("pop-tags");

const SIDE_KEY = "atlas.board.side";
const drawerQuery = window.matchMedia("(max-width: 899px)");
const numberFormat = new Intl.NumberFormat();

// ---- storage: each browser keeps its own lists; what comes back is checked before use ----
// null: nothing stored yet. undefined: storage is blocked, so keep using what's in memory.
function load(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return undefined;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private window or blocked storage: the change just won't be remembered.
  }
}
// Two tabs changing the same list at once: a Web Lock makes one wait for the other.
function locked(name, fn) {
  if (navigator.locks && navigator.locks.request) navigator.locks.request(name, async () => fn()).catch(() => fn());
  else fn();
}

// ---- the library ----
const byLink = new Map();
const allPanels = [];
for (const g of GROUPS) {
  for (const p of g.panels) {
    allPanels.push(p);
    for (const l of p.links) if (!byLink.has(l.url)) byLink.set(l.url, l);
  }
}
const TOTAL = byLink.size;

let favorites = readLinks(load(FAVORITES_KEY));
let recent = readRecent(load(RECENT_KEY));
let view = parseView(location.hash, GROUPS);
let searching = false;
let az = false;
let allClosed = false;
let rendered = []; // [{ el, num, items: [{ li, hay }] }] for the library panels on screen
let specials = { favorites: null, recent: null };
let focusBoardAfterNav = false;

// ---- icons ----
const SVG_NS = "http://www.w3.org/2000/svg";
function svg(size, paths, cls) {
  const s = document.createElementNS(SVG_NS, "svg");
  s.setAttribute("viewBox", "0 0 16 16");
  s.setAttribute("width", size);
  s.setAttribute("height", size);
  s.setAttribute("aria-hidden", "true");
  if (cls) s.setAttribute("class", cls);
  for (const [tag, attrs] of paths) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    s.append(el);
  }
  return s;
}
const stroke = { fill: "none", stroke: "currentColor", "stroke-width": "1.4", "stroke-linecap": "round", "stroke-linejoin": "round" };
const globeIcon = () =>
  svg(16, [["circle", { cx: 8, cy: 8, r: 6.3, ...stroke }], ["path", { d: "M1.7 8h12.6M8 1.7c2.1 2.1 2.1 10.5 0 12.6M8 1.7c-2.1 2.1-2.1 10.5 0 12.6", ...stroke }]], "globe");
const chevronIcon = (size = 14) => svg(size, [["path", { d: "M4 6l4 4 4-4", ...stroke, "stroke-width": "1.8" }]], "chev");
const infoIcon = () =>
  svg(14, [["circle", { cx: 8, cy: 8, r: 6.3, ...stroke }], ["path", { d: "M8 7.2v4", ...stroke, "stroke-width": "1.6" }], ["circle", { cx: 8, cy: 4.9, r: 0.9, fill: "currentColor" }]]);
const STAR = "M8 1.7l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.5l-3.8 2 .7-4.3-3.1-3 4.3-.6z";
const starIcon = () => {
  const s = svg(15, [["path", { d: STAR, stroke: "currentColor", "stroke-width": "1.3", "stroke-linejoin": "round" }]]);
  return s;
};
const sideIcons = {
  all: () => svg(15, [["rect", { x: 2, y: 2, width: 5, height: 5, rx: 1, ...stroke }], ["rect", { x: 9, y: 2, width: 5, height: 5, rx: 1, ...stroke }], ["rect", { x: 2, y: 9, width: 5, height: 5, rx: 1, ...stroke }], ["rect", { x: 9, y: 9, width: 5, height: 5, rx: 1, ...stroke }]]),
  favorites: () => svg(15, [["path", { d: STAR, ...stroke, "stroke-width": "1.3" }]]),
  recent: () => svg(15, [["circle", { cx: 8, cy: 8, r: 6.2, ...stroke }], ["path", { d: "M8 4.6V8l2.4 1.6", ...stroke }]]),
};

// ---- rows and panels ----
function row(l, area) {
  const li = document.createElement("li");
  li.className = "link-row";
  const a = document.createElement("a");
  a.href = l.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.dataset.link = l.url;
  if (l.icon) {
    const img = document.createElement("img");
    img.src = l.icon;
    img.alt = "";
    img.width = img.height = 16;
    img.loading = "lazy";
    img.addEventListener("error", () => img.replaceWith(globeIcon()), { once: true });
    a.append(img);
  } else {
    a.append(globeIcon());
  }
  const t = document.createElement("span");
  t.className = "t";
  t.textContent = l.title;
  a.append(t);
  li.append(a);

  const fav = document.createElement("button");
  fav.type = "button";
  fav.className = "row-btn fav";
  fav.dataset.link = l.url;
  fav.setAttribute("aria-label", "Favorite: " + l.title);
  fav.setAttribute("aria-pressed", favorites.includes(l.url) ? "true" : "false");
  fav.append(starIcon());
  li.append(fav);

  if (l.desc || l.useCase || l.tags.length) {
    const info = document.createElement("button");
    info.type = "button";
    info.className = "row-btn info";
    info.dataset.link = l.url;
    info.setAttribute("aria-label", "About " + l.title);
    info.append(infoIcon());
    li.append(info);
  }
  const hay = (l.title + " " + l.url + " " + l.desc + " " + l.useCase + " " + l.tags.join(" ") + " " + area).toLowerCase();
  return { li, hay };
}

function panelEl(title, links, id, opts = {}) {
  const el = document.createElement("section");
  el.className = "panel";
  const head = document.createElement("div");
  head.className = "panel-head";
  const h3 = document.createElement("h3");
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "panel-toggle";
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-controls", "list-" + id);
  const name = document.createElement("span");
  name.className = "name";
  name.textContent = title;
  const num = document.createElement("span");
  num.className = "num";
  num.textContent = String(links.length);
  toggle.append(name, num, chevronIcon());
  h3.append(toggle);
  head.append(h3);
  if (opts.clear) {
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "clear";
    clear.textContent = "Clear";
    clear.setAttribute("aria-label", "Clear recently visited");
    head.append(clear);
  }
  const ul = document.createElement("ul");
  ul.className = "links";
  ul.id = "list-" + id;
  const items = links.map((l) => row(l, title));
  for (const it of items) ul.append(it.li);
  el.append(head, ul);
  if (allClosed) setClosed(el, true);
  return { el, num, items };
}

function setClosed(el, closed) {
  el.classList.toggle("closed", closed);
  el.querySelector(".panel-toggle").setAttribute("aria-expanded", String(!closed));
}

function specialLinks(kind) {
  if (kind === "favorites") {
    return favorites
      .map((link) => byLink.get(link))
      .filter(Boolean)
      .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: "base" }));
  }
  return recent.map((x) => byLink.get(x.link)).filter(Boolean);
}

function specialPanel(kind) {
  const links = specialLinks(kind);
  if (!links.length) return null;
  const title = kind === "favorites" ? "Favorites" : "Recently visited";
  return panelEl(title, links, kind, { clear: kind === "recent" }).el;
}

// ---- drawing a view ----
function render() {
  hidePopup();
  searching = searchTerms(view.q).length > 0;
  grid.replaceChildren();
  rendered = [];
  specials = { favorites: null, recent: null };

  const single = !searching && view.kind !== "all" && view.kind !== "group";
  grid.classList.toggle("single", single);

  if (!searching && (view.kind === "all" || view.kind === "favorites" || view.kind === "recent")) {
    for (const kind of ["favorites", "recent"]) {
      if (view.kind !== "all" && view.kind !== kind) continue;
      const el = specialPanel(kind);
      if (el) grid.append(el);
      specials[kind] = el;
    }
  }

  const panels = (searching ? allPanels : panelsFor(view, GROUPS)).slice();
  if (az) panels.sort((a, b) => a.title.localeCompare(b.title));
  for (const p of panels) {
    const built = panelEl(p.title, p.links, slug(p.category));
    grid.append(built.el);
    rendered.push(built);
  }
  drawHeading();
  applySearch();
  updateSide();
}

function applySearch() {
  const terms = searchTerms(view.q);
  grid.classList.toggle("searching", searching);
  let shown = 0;
  for (const p of rendered) {
    let n = 0;
    for (const it of p.items) {
      const ok = !searching || matches(it.hay, terms);
      it.li.hidden = !ok;
      if (ok) n++;
    }
    p.el.hidden = searching && n === 0;
    p.num.textContent = String(n);
    shown += n;
  }
  countEl.textContent = searching ? numberFormat.format(shown) + " of " + numberFormat.format(TOTAL) + " links" : "";
  showEmpty(shown);
}

function showEmpty(shown) {
  let text = "";
  if (searching && shown === 0) text = "No links match “" + view.q + "”.";
  else if (!searching && view.kind === "favorites" && !specials.favorites) {
    text = "No favorites yet. Tap the star next to any link to keep it here.";
  } else if (!searching && view.kind === "recent" && !specials.recent) {
    text = "Nothing here yet. Links you open from Atlas show up here, newest first.";
  } else if (!searching && (view.kind === "group" || view.kind === "category") && rendered.length === 0) {
    text = "Nothing here yet.";
  }
  emptyEl.textContent = text;
  emptyEl.hidden = !text;
}

function drawHeading() {
  titleEl.replaceChildren();
  if (searching) {
    titleEl.textContent = "Search results";
    document.title = "Search · Atlas";
    return;
  }
  const h = viewHeading(view, GROUPS);
  if (h.group) {
    const a = document.createElement("a");
    a.href = h.group.hash;
    a.textContent = h.group.title;
    const sep = document.createElement("span");
    sep.className = "sep";
    sep.setAttribute("aria-hidden", "true");
    sep.textContent = "›";
    titleEl.append(a, sep, document.createTextNode(h.title));
  } else {
    titleEl.textContent = h.title;
  }
  document.title = view.kind === "all" ? "Atlas" : h.title + " · Atlas";
}

// Favorites and recent visits change while the rest of the board stays put.
function refreshSpecial(kind) {
  if (searching) return;
  if (view.kind !== "all" && view.kind !== kind) return;
  const old = specials[kind];
  const active = document.activeElement;
  const hadFocus = old && old.contains(active);
  const focusLink = hadFocus ? active.dataset.link : null;
  const focusFav = hadFocus && active.classList.contains("fav");
  const el = specialPanel(kind);
  if (old && el) old.replaceWith(el);
  else if (old) old.remove();
  else if (el) {
    if (kind === "favorites") grid.prepend(el);
    else if (specials.favorites) specials.favorites.after(el);
    else grid.prepend(el);
  }
  specials[kind] = el;
  if (hadFocus) {
    const sel = focusLink ? (focusFav ? ".fav" : "a") + '[data-link="' + CSS.escape(focusLink) + '"]' : null;
    const target = (el && sel && el.querySelector(sel)) || (el && el.querySelector(".panel-toggle")) || board;
    target.focus({ preventScroll: true });
  }
  if (view.kind === kind) showEmpty(1);
}

function syncStars() {
  for (const btn of grid.querySelectorAll(".fav")) {
    btn.setAttribute("aria-pressed", favorites.includes(btn.dataset.link) ? "true" : "false");
  }
}

// ---- favorites and recent visits ----
function toggleFavorite(link) {
  const on = !favorites.includes(link);
  favorites = setLink(favorites, link, on);
  syncStars();
  locked(FAVORITES_KEY, () => {
    const raw = load(FAVORITES_KEY);
    const next = setLink(raw === undefined ? favorites : readLinks(raw), link, on);
    save(FAVORITES_KEY, JSON.stringify(next));
    favorites = next;
    syncStars();
    refreshSpecial("favorites");
  });
}

function recordVisit(link) {
  const at = new Date().toISOString();
  recent = addRecent(recent, link, at);
  locked(RECENT_KEY, () => {
    const raw = load(RECENT_KEY);
    const next = addRecent(raw === undefined ? recent : readRecent(raw), link, at);
    save(RECENT_KEY, JSON.stringify(next));
    recent = next;
    const visitedRaw = load(VISITED_KEY);
    const visited = visitedRaw === undefined ? [] : readLinks(visitedRaw);
    if (visitedRaw !== undefined && !visited.includes(link)) save(VISITED_KEY, JSON.stringify([...visited, link]));
    refreshSpecial("recent");
  });
}

function clearRecent() {
  recent = [];
  locked(RECENT_KEY, () => {
    save(RECENT_KEY, "[]");
    recent = [];
    refreshSpecial("recent");
  });
}

window.addEventListener("storage", (e) => {
  if (e.key === FAVORITES_KEY || e.key === null) {
    favorites = readLinks(load(FAVORITES_KEY));
    syncStars();
    refreshSpecial("favorites");
  }
  if (e.key === RECENT_KEY || e.key === null) {
    recent = readRecent(load(RECENT_KEY));
    refreshSpecial("recent");
  }
});

// ---- the "about" card next to each link ----
let popFor = null;
let pinned = false;
let popTimer = 0;
let lastHidden = 0;

function showPopup(btn, pin) {
  clearTimeout(popTimer);
  const l = byLink.get(btn.dataset.link);
  if (!l) return;
  if (popFor && popFor !== btn) popFor.removeAttribute("aria-describedby");
  popTitle.textContent = l.title;
  popDesc.textContent = l.desc;
  popDesc.hidden = !l.desc;
  popUse.textContent = l.useCase;
  popUse.hidden = !l.useCase;
  popTags.replaceChildren();
  for (const tag of l.tags) {
    const span = document.createElement("span");
    span.className = "p-tag";
    span.textContent = tag;
    popTags.append(span);
  }
  popTags.hidden = !l.tags.length;
  popup.hidden = false;
  const r = btn.getBoundingClientRect();
  const w = popup.offsetWidth;
  const h = popup.offsetHeight;
  let top = r.bottom + 6;
  if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
  popup.style.top = top + "px";
  popup.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w + 8)) + "px";
  btn.setAttribute("aria-describedby", "preview-popup");
  popFor = btn;
  pinned = Boolean(pin);
}

function hidePopup() {
  clearTimeout(popTimer);
  if (popup.hidden) return;
  if (popFor) popFor.removeAttribute("aria-describedby");
  popFor = null;
  pinned = false;
  popup.hidden = true;
  lastHidden = Date.now();
}

// The first card waits a moment; moving to the next one is instant.
grid.addEventListener("pointerover", (e) => {
  if (e.pointerType !== "mouse") return;
  const btn = e.target.closest(".info");
  if (!btn || btn === popFor) return;
  clearTimeout(popTimer);
  const wait = Date.now() - lastHidden < 600 || !popup.hidden ? 0 : 450;
  popTimer = setTimeout(() => showPopup(btn, false), wait);
});
grid.addEventListener("pointerout", (e) => {
  if (e.pointerType !== "mouse") return;
  const btn = e.target.closest(".info");
  if (!btn || btn.contains(e.relatedTarget)) return;
  clearTimeout(popTimer);
  if (!pinned) hidePopup();
});
const keyboardFocus = (el) => {
  try {
    return el.matches(":focus-visible");
  } catch {
    return false;
  }
};
grid.addEventListener("focusin", (e) => {
  const btn = e.target.closest(".info");
  if (btn && keyboardFocus(btn)) showPopup(btn, false);
});
grid.addEventListener("focusout", (e) => {
  if (e.target.closest(".info") && !pinned) hidePopup();
});
document.addEventListener("pointerdown", (e) => {
  if (!popup.hidden && !e.target.closest(".info")) hidePopup();
});
window.addEventListener("scroll", () => {
  if (!popup.hidden) hidePopup();
}, { passive: true });

// ---- clicks on the board ----
grid.addEventListener("click", (e) => {
  const fav = e.target.closest(".fav");
  if (fav) {
    toggleFavorite(fav.dataset.link);
    return;
  }
  const info = e.target.closest(".info");
  if (info) {
    if (popFor === info && pinned) hidePopup();
    else showPopup(info, true);
    return;
  }
  const clear = e.target.closest(".clear");
  if (clear) {
    clearRecent();
    return;
  }
  const toggle = e.target.closest(".panel-toggle");
  if (toggle) {
    if (!searching) {
      const el = toggle.closest(".panel");
      setClosed(el, !el.classList.contains("closed"));
    }
    return;
  }
  const a = e.target.closest("a[data-link]");
  if (a) recordVisit(a.dataset.link);
});
grid.addEventListener("auxclick", (e) => {
  if (e.button !== 1) return;
  const a = e.target.closest("a[data-link]");
  if (a) recordVisit(a.dataset.link);
});

azBtn.addEventListener("click", () => {
  az = !az;
  azBtn.setAttribute("aria-pressed", String(az));
  render();
});
toggleAllBtn.addEventListener("click", () => {
  allClosed = !allClosed;
  for (const el of grid.querySelectorAll(".panel")) setClosed(el, allClosed);
  toggleAllBtn.textContent = allClosed ? "Expand all" : "Collapse all";
});

// ---- search: it covers the whole library and sits in the address as &q= ----
q.addEventListener("input", () => {
  view = { ...view, q: q.value.trim() };
  history.replaceState(history.state, "", location.pathname + location.search + viewHash(view));
  if (searchTerms(view.q).length > 0 !== searching) render();
  else applySearch();
});

// ---- the sidebar ----
function sideLink(key, href, text, icon) {
  const a = document.createElement("a");
  a.href = href;
  a.dataset.key = key;
  if (icon) a.append(icon);
  const span = document.createElement("span");
  span.textContent = text;
  a.append(span);
  return a;
}

function buildSide() {
  const top = [
    ["all", "#all", "All tools", sideIcons.all()],
    ["v:favorites", "#v=favorites", "Favorites", sideIcons.favorites()],
    ["v:recent", "#v=recent", "Recently visited", sideIcons.recent()],
  ];
  for (const [key, href, text, icon] of top) {
    const li = document.createElement("li");
    li.append(sideLink(key, href, text, icon));
    sideList.append(li);
  }
  const gap = document.createElement("li");
  gap.className = "gap";
  gap.setAttribute("aria-hidden", "true");
  sideList.append(gap);
  for (const g of GROUPS) {
    const gs = slug(g.title);
    const li = document.createElement("li");
    li.className = "g";
    li.dataset.group = gs;
    const a = sideLink("g:" + gs, "#g=" + gs, g.title, null);
    a.className = "g-link";
    a.append(chevronIcon(12));
    const cats = document.createElement("ul");
    cats.className = "cats";
    for (const p of g.panels) {
      const c = document.createElement("li");
      c.append(sideLink("c:" + slug(p.category), "#c=" + slug(p.category), label(p.category), null));
      cats.append(c);
    }
    li.append(a, cats);
    sideList.append(li);
  }
}

// A group opens when it (or one of its categories) is picked; tapping the open group folds it.
let foldedGroup = null;

function updateSide() {
  const key = viewKey(view);
  for (const a of side.querySelectorAll("a[data-key]")) {
    if (a.dataset.key === key) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  }
  for (const li of side.querySelectorAll(".g")) {
    const open = li.dataset.group === view.group && foldedGroup !== view.group;
    li.classList.toggle("open", open);
    li.querySelector(".g-link").setAttribute("aria-expanded", String(open));
  }
}

function inDrawer() {
  return drawerQuery.matches;
}
function sideOpen() {
  return inDrawer() ? document.body.classList.contains("drawer-open") : !document.body.classList.contains("side-closed");
}
function syncToggle() {
  sideToggle.setAttribute("aria-expanded", String(sideOpen()));
}
function openDrawer() {
  document.body.classList.add("drawer-open");
  backdrop.hidden = false;
  board.inert = true;
  header.inert = true;
  syncToggle();
  const current = side.querySelector('a[aria-current="page"]') || side.querySelector("a");
  current.focus({ preventScroll: true });
}
function closeDrawer(focusToggle) {
  if (!document.body.classList.contains("drawer-open")) return;
  document.body.classList.remove("drawer-open");
  backdrop.hidden = true;
  board.inert = false;
  header.inert = false;
  syncToggle();
  if (focusToggle) sideToggle.focus();
}

sideToggle.addEventListener("click", () => {
  if (inDrawer()) {
    if (document.body.classList.contains("drawer-open")) closeDrawer(true);
    else openDrawer();
  } else {
    const closed = document.body.classList.toggle("side-closed");
    save(SIDE_KEY, closed ? "closed" : "open");
    syncToggle();
  }
});
sideClose.addEventListener("click", () => closeDrawer(true));
backdrop.addEventListener("click", () => closeDrawer(true));
drawerQuery.addEventListener("change", () => {
  closeDrawer(false);
  syncToggle();
});

// Going somewhere new keeps the old place's scroll position for the Back button.
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  if (a.classList.contains("g-link") && a.dataset.key === viewKey(view)) {
    e.preventDefault();
    foldedGroup = foldedGroup === view.group ? null : view.group;
    updateSide();
    return;
  }
  history.replaceState({ ...(history.state || {}), y: window.scrollY }, "");
  // In the phone drawer a group stays open to show its categories; anything else closes it.
  if (inDrawer() && side.contains(a) && !a.classList.contains("g-link")) {
    focusBoardAfterNav = true;
    closeDrawer(false);
    // Tapping the view that's already open changes nothing, so no hashchange comes.
    setTimeout(focusBoardIfPending, 60);
  }
});

function focusBoardIfPending() {
  if (!focusBoardAfterNav) return;
  focusBoardAfterNav = false;
  board.focus({ preventScroll: true });
}

window.addEventListener("hashchange", () => {
  view = parseView(location.hash, GROUPS);
  foldedGroup = null;
  q.value = view.q;
  render();
  const y = history.state && typeof history.state.y === "number" ? history.state.y : 0;
  window.scrollTo(0, y);
  focusBoardIfPending();
});

$("skip").addEventListener("click", (e) => {
  e.preventDefault();
  board.focus();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!popup.hidden) return hidePopup();
    if (document.body.classList.contains("drawer-open")) return closeDrawer(true);
    if (document.activeElement === q && q.value) {
      q.value = "";
      q.dispatchEvent(new Event("input"));
    }
    return;
  }
  if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const t = e.target;
    if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || (t && t.isContentEditable)) return;
    if (document.body.classList.contains("drawer-open")) return;
    e.preventDefault();
    q.focus();
    q.select();
  }
});

// The sidebar sits just under the header, whatever height the header wraps to.
const setTopHeight = () => document.documentElement.style.setProperty("--top-h", header.offsetHeight + "px");
if (window.ResizeObserver) new ResizeObserver(setTopHeight).observe(header);
setTopHeight();

// ---- start ----
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (load(SIDE_KEY) === "closed") document.body.classList.add("side-closed");
buildSide();
syncToggle();
q.value = view.q;
render();
if (history.state && typeof history.state.y === "number") window.scrollTo(0, history.state.y);
