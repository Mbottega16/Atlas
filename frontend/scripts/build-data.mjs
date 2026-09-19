// Builds the data files the frontend reads from backend/seed/ (the library's
// source of truth) into public/:
//   atlas.json       every entry, with a stable id — the public site's whole library
//   link-flags.json  links that failed the weekly check twice in a row
// Runs before `npm run dev` and `npm run build`. Both outputs are git-ignored.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const seedDir = path.resolve(here, "../../backend/seed");
const publicDir = path.resolve(here, "../public");

const seed = JSON.parse(fs.readFileSync(path.join(seedDir, "atlas-seed.json"), "utf8"));
const entries = seed.map((e, i) => ({
  id: i + 1,
  link: e.link,
  title: e.title,
  category: e.category,
  description: e.description,
  use_case: e.use_case,
  tags: e.tags,
  added: e.added,
}));

const statusFile = path.join(seedDir, "link-status.json");
const status = fs.existsSync(statusFile) ? JSON.parse(fs.readFileSync(statusFile, "utf8")) : {};
const flags = {};
for (const [link, s] of Object.entries(status)) {
  if (s.fails >= 2) flags[link] = { status: s.status, detail: s.detail, checked: s.checked };
}

fs.writeFileSync(path.join(publicDir, "atlas.json"), JSON.stringify(entries));
fs.writeFileSync(path.join(publicDir, "link-flags.json"), JSON.stringify(flags));
console.log(`public/atlas.json: ${entries.length} entries · public/link-flags.json: ${Object.keys(flags).length} flagged`);
