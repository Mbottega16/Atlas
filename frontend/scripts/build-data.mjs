// Builds the data files the frontend reads from backend/seed/ (the library's
// source of truth) into public/:
//   atlas.json        every entry, with a stable id — the public site's whole library
//   link-flags.json   links that failed the weekly check twice in a row
//   link-check.json   when the weekly link check last ran, and how many links it covered
//   collections.json  stacks and comparisons, from atlas-collections.json
// Runs before `npm run dev` and `npm run build`. All four outputs are git-ignored.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const seedDir = path.resolve(here, "../../backend/seed");
const publicDir = path.resolve(here, "../public");
const readJson = (file, fallback) =>
  fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : fallback;

// An entry's optional profile (backend/app/models/entry.py PROFILE_FIELDS),
// copied only when set so atlas.json stays small.
const PROFILE = ["cost", "price_note", "access", "best_for", "limits", "warning", "last_verified", "verification", "screenshot"];

const seed = readJson(path.join(seedDir, "atlas-seed.json"), []);
const entries = seed.map((e, i) => {
  const entry = {
    id: i + 1,
    link: e.link,
    title: e.title,
    category: e.category,
    description: e.description,
    use_case: e.use_case,
    tags: e.tags,
    added: e.added,
  };
  for (const f of PROFILE) if (e[f] != null) entry[f] = e[f];
  return entry;
});

const status = readJson(path.join(seedDir, "link-status.json"), {});
const flags = {};
let lastCheck = "";
for (const [link, s] of Object.entries(status)) {
  if (s.fails >= 2) flags[link] = { status: s.status, detail: s.detail, checked: s.checked };
  if (s.checked > lastCheck) lastCheck = s.checked;
}
const linkCheck = { checked: lastCheck || null, links: Object.keys(status).length };

// A member whose entry is gone is dropped (the backend's test_collections.py is
// the check that fails on it), so a stale stack can't break the public build.
const known = new Set(seed.map((e) => e.link));
const collections = readJson(path.join(seedDir, "atlas-collections.json"), { stacks: [], comparisons: [] });
const dropped = [];
const keep = (id, link) => known.has(link) || (dropped.push(`${id}: ${link}`), false);
collections.stacks = collections.stacks.map((s) => ({ ...s, steps: s.steps.filter((st) => keep(s.id, st.link)) }));
collections.comparisons = collections.comparisons.map((c) => ({
  ...c,
  members: c.members.filter((m) => keep(c.id, m.link)),
  pick: c.pick.filter((p) => known.has(p.link)),
}));
if (dropped.length) console.warn(`collections: dropped links not in the seed — ${dropped.join(", ")}`);

fs.writeFileSync(path.join(publicDir, "atlas.json"), JSON.stringify(entries));
fs.writeFileSync(path.join(publicDir, "link-flags.json"), JSON.stringify(flags));
fs.writeFileSync(path.join(publicDir, "link-check.json"), JSON.stringify(linkCheck));
fs.writeFileSync(path.join(publicDir, "collections.json"), JSON.stringify(collections));
console.log(
  `public/atlas.json: ${entries.length} entries (${entries.filter((e) => e.last_verified).length} profiled)` +
    ` · link-flags.json: ${Object.keys(flags).length} flagged · link check ${linkCheck.checked}` +
    ` · collections.json: ${collections.stacks.length} stacks, ${collections.comparisons.length} comparisons`
);
