// Tests for the board's rules. Run: `npm test` in frontend/ (node --test).
import assert from "node:assert/strict";
import { test } from "node:test";

import {
  RECENT_LIMIT,
  addRecent,
  label,
  matches,
  panelsFor,
  parseView,
  readLinks,
  readRecent,
  searchTerms,
  setLink,
  slug,
  viewHash,
  viewHeading,
  viewKey,
} from "./board-core.mjs";

const panel = (category) => ({ title: category.toUpperCase(), category, links: [] });
const GROUPS = [
  { title: "Security & OSINT", panels: [panel("security & privacy")] },
  { title: "Build & Code", panels: [panel("developer tools"), panel("game dev"), panel("file & web utilities")] },
  { title: "Make (Art & Sound)", panels: [panel("audio & video")] },
];

test("slug and label", () => {
  assert.equal(slug("Build & Code"), "build-code");
  assert.equal(slug("Make (Art & Sound)"), "make-art-sound");
  assert.equal(slug("file & web utilities"), "file-web-utilities");
  assert.equal(label("game dev"), "Game dev");
  assert.equal(label("ai tools"), "AI tools");
  assert.equal(label("vfx & 3d"), "VFX & 3D");
  assert.equal(label("security & privacy"), "Security & privacy");
});

test("parseView reads every kind of view", () => {
  assert.deepEqual(parseView("", GROUPS), { kind: "all", q: "" });
  assert.deepEqual(parseView("#all", GROUPS), { kind: "all", q: "" });
  assert.deepEqual(parseView("#g=build-code", GROUPS), { kind: "group", group: "build-code", q: "" });
  assert.deepEqual(parseView("#c=game-dev", GROUPS), { kind: "category", group: "build-code", category: "game-dev", q: "" });
  assert.deepEqual(parseView("#v=favorites", GROUPS), { kind: "favorites", q: "" });
  assert.deepEqual(parseView("#v=recent&q=map", GROUPS), { kind: "recent", q: "map" });
  assert.deepEqual(parseView("#q=sound+editor", GROUPS), { kind: "all", q: "sound editor" });
});

test("parseView falls back to everything for names that don't exist", () => {
  assert.deepEqual(parseView("#c=cooking", GROUPS), { kind: "all", q: "" });
  assert.deepEqual(parseView("#g=nope", GROUPS), { kind: "all", q: "" });
  assert.deepEqual(parseView("#v=settings", GROUPS), { kind: "all", q: "" });
});

test("parseView keeps the first board's #Build---Code anchors working", () => {
  assert.deepEqual(parseView("#Build---Code", GROUPS), { kind: "group", group: "build-code", q: "" });
  assert.deepEqual(parseView("#Make--Art---Sound-", GROUPS), { kind: "group", group: "make-art-sound", q: "" });
});

test("viewHash writes what parseView reads", () => {
  const views = [
    { kind: "all", q: "" },
    { kind: "all", q: "pdf to word" },
    { kind: "group", group: "build-code", q: "" },
    { kind: "category", group: "build-code", category: "file-web-utilities", q: "merge pdf" },
    { kind: "favorites", q: "" },
    { kind: "recent", q: "" },
  ];
  for (const v of views) assert.deepEqual(parseView(viewHash(v), GROUPS), v);
  assert.equal(viewHash({ kind: "all", q: "" }), "");
});

test("viewKey names the sidebar item", () => {
  assert.equal(viewKey({ kind: "all", q: "" }), "all");
  assert.equal(viewKey({ kind: "favorites", q: "" }), "v:favorites");
  assert.equal(viewKey({ kind: "group", group: "build-code", q: "" }), "g:build-code");
  assert.equal(viewKey({ kind: "category", group: "build-code", category: "game-dev", q: "" }), "c:game-dev");
});

test("panelsFor shows a group's panels, one category, or everything", () => {
  assert.equal(panelsFor({ kind: "all" }, GROUPS).length, 5);
  assert.deepEqual(
    panelsFor({ kind: "group", group: "build-code" }, GROUPS).map((p) => p.category),
    ["developer tools", "game dev", "file & web utilities"],
  );
  assert.deepEqual(panelsFor({ kind: "category", category: "game-dev" }, GROUPS).map((p) => p.category), ["game dev"]);
  assert.deepEqual(panelsFor({ kind: "group", group: "nope" }, GROUPS), []);
  assert.deepEqual(panelsFor({ kind: "favorites" }, GROUPS), []);
});

test("viewHeading names the view and a category's group", () => {
  assert.deepEqual(viewHeading({ kind: "all" }, GROUPS), { title: "All tools", group: null });
  assert.deepEqual(viewHeading({ kind: "group", group: "build-code" }, GROUPS), { title: "Build & Code", group: null });
  assert.deepEqual(viewHeading({ kind: "category", category: "game-dev" }, GROUPS), {
    title: "Game dev",
    group: { title: "Build & Code", hash: "#g=build-code" },
  });
  assert.equal(viewHeading({ kind: "recent" }, GROUPS).title, "Recently visited");
});

test("readLinks keeps each text link once and drops anything else", () => {
  assert.deepEqual(readLinks(null), []);
  assert.deepEqual(readLinks("not json"), []);
  assert.deepEqual(readLinks('{"a":1}'), []);
  assert.deepEqual(readLinks('["https://a.com", 3, null, "", "https://b.com", "https://a.com", {"x":1}]'), [
    "https://a.com",
    "https://b.com",
  ]);
});

test("setLink turns a favorite on or off", () => {
  assert.deepEqual(setLink(["a", "b"], "c", true), ["a", "b", "c"]);
  assert.deepEqual(setLink(["a", "b"], "a", true), ["b", "a"]);
  assert.deepEqual(setLink(["a", "b"], "a", false), ["b"]);
  assert.deepEqual(setLink([], "a", false), []);
});

test("readRecent drops bad items, keeps each link once, newest first", () => {
  const raw = JSON.stringify([
    { link: "https://old.com", at: "2026-11-01T10:00:00.000Z" },
    { link: "https://new.com", at: "2026-11-08T10:00:00.000Z" },
    { link: "https://old.com", at: "2026-10-01T10:00:00.000Z" },
    { link: "https://bad-date.com", at: "yesterday" },
    { link: 42, at: "2026-11-08T10:00:00.000Z" },
    "https://plain-string.com",
    null,
  ]);
  assert.deepEqual(readRecent(raw), [
    { link: "https://new.com", at: "2026-11-08T10:00:00.000Z" },
    { link: "https://old.com", at: "2026-11-01T10:00:00.000Z" },
  ]);
  assert.deepEqual(readRecent("{}"), []);
  assert.deepEqual(readRecent("[oops"), []);
});

test("addRecent moves a link to the front once and keeps the newest", () => {
  const list = [
    { link: "a", at: "2026-11-08T09:00:00.000Z" },
    { link: "b", at: "2026-11-08T08:00:00.000Z" },
  ];
  assert.deepEqual(addRecent(list, "b", "2026-11-08T10:00:00.000Z").map((x) => x.link), ["b", "a"]);
  let long = [];
  for (let i = 0; i < RECENT_LIMIT + 5; i++) long = addRecent(long, "link" + i, new Date(Date.UTC(2026, 10, 8, 0, i)).toISOString());
  assert.equal(long.length, RECENT_LIMIT);
  assert.equal(long[0].link, "link" + (RECENT_LIMIT + 4));
});

test("search needs every word", () => {
  const terms = searchTerms("  PDF   Merge ");
  assert.deepEqual(terms, ["pdf", "merge"]);
  assert.equal(matches("merge and split pdf files", terms), true);
  assert.equal(matches("split pdf files", terms), false);
  assert.equal(matches("anything", searchTerms("")), true);
});
