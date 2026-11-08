import { CATEGORY_MOVES } from "../categoryGroups";
import { ESSENTIAL_TAG, Indexed, indexEntry, rank } from "../lib/searchCore";

// Words a profile may use — backend/app/taxonomy.py COSTS and ACCESS.
export type Cost = "free" | "freemium" | "paid";
export type Access = "no sign-up" | "free account" | "paid account" | "download";

// An entry's optional profile: what a person checked on the tool's own pages,
// and when. The public build only carries the fields that are set; the local
// API sends null for the rest.
export interface Profile {
  cost?: Cost | null;
  price_note?: string | null;
  access?: Access | null;
  best_for?: string | null;
  limits?: string | null;
  warning?: string | null;
  last_verified?: string | null;
  verification?: string | null;
  // A thumbnail of the official page, under public/.
  screenshot?: string | null;
}

export interface Entry extends Profile {
  id: number;
  link: string;
  title: string | null;
  category: string;
  description: string | null;
  use_case: string | null;
  tags: string[];
  added?: string;
  source?: string;
  // Set when the weekly link check has failed twice in a row.
  flag?: { status: string; detail: string; checked: string };
}

export interface EntryListResponse {
  total: number;
  items: Entry[];
  // True when nothing matched every search word, so these are the closest partial matches.
  relaxed?: boolean;
}

export interface TagCount {
  name: string;
  count: number;
}

// The public site is a static build (VITE_STATIC=1): the whole library ships as
// /atlas.json and nothing can be written. Run locally against the FastAPI
// backend, the same UI can also add, edit and delete.
export const READ_ONLY = import.meta.env.VITE_STATIC === "1";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

// credentials: "include" so the auth-gate session cookie rides along in dev.
async function apiGet<T>(path: string): Promise<T> {
  const resp = await fetch(`${BASE}${path}`, { credentials: "include" });
  if (!resp.ok) throw new Error(`Request to ${path} failed: ${resp.status}`);
  return resp.json();
}

async function apiSend<T>(method: string, path: string, body?: unknown): Promise<T> {
  const resp = await fetch(`${BASE}${path}`, {
    method,
    credentials: "include",
    headers: body !== undefined ? { "Content-Type": "application/json" } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!resp.ok) throw new Error(`Request to ${path} failed: ${resp.status}`);
  const result = resp.status === 204 ? (undefined as T) : await resp.json();
  invalidateLibrary();
  return result;
}

const apiPost = <T>(path: string, body?: unknown) => apiSend<T>("POST", path, body);

// --- the library, loaded once and searched in the browser -----------------
// ~1,000 entries is a few hundred KB: loading it all once makes every search
// instant and lets the site be plain static files.

interface ApiEntry extends Omit<Entry, "added"> {
  created_at: string;
}

let libraryPromise: Promise<Indexed<Entry>[]> | null = null;

// The small build outputs from scripts/build-data.mjs, in both modes. A missing
// file just means "nothing to show", never an error screen.
async function fetchPublic<T>(path: string, fallback: T): Promise<T> {
  try {
    const resp = await fetch(path);
    return resp.ok ? await resp.json() : fallback;
  } catch {
    return fallback;
  }
}

const fetchFlags = () => fetchPublic<Record<string, Entry["flag"]>>("/link-flags.json", {});

async function fetchEntries(): Promise<Entry[]> {
  if (READ_ONLY) {
    const resp = await fetch("/atlas.json");
    if (!resp.ok) throw new Error(`Couldn't load the library: ${resp.status}`);
    return resp.json();
  }
  const res = await apiGet<{ items: ApiEntry[] }>("/api/entries?limit=100000");
  return res.items.map(({ created_at, ...e }) => ({ ...e, added: created_at.slice(0, 10) }));
}

function library(): Promise<Indexed<Entry>[]> {
  if (!libraryPromise) {
    const loading = Promise.all([fetchEntries(), fetchFlags()]).then(([entries, flags]) =>
      entries.map((e) => indexEntry({ ...e, flag: flags[e.link] }))
    );
    loading.catch(() => {
      if (libraryPromise === loading) libraryPromise = null; // let the next call retry
    });
    libraryPromise = loading;
  }
  return libraryPromise;
}

export function invalidateLibrary() {
  libraryPromise = null;
}

export async function searchEntries(params: {
  q?: string;
  category?: string;
  categories?: string[];
  tag?: string;
  favorite?: boolean;
  limit?: number;
  offset?: number;
}): Promise<EntryListResponse> {
  const all = await library();
  // An old category from before the 2026-09-19 merge (?category=cooking) is now
  // a tag on exactly the entries it used to hold, so filter by that tag.
  const retired = !!params.category && params.category in CATEGORY_MOVES;
  const category = retired ? "" : params.category;
  const tag = (retired ? params.category : params.tag)?.trim().toLowerCase();
  const favorites = params.favorite ? favoriteLinks() : null;
  const pool = all.filter(
    ({ entry: e }) =>
      (!category || e.category === category) &&
      (!params.categories?.length || params.categories.includes(e.category)) &&
      // A tag that names a category matches that category too: tags that only
      // repeated an entry's own category were stripped as noise.
      (!tag || e.tags.includes(tag) || (tag !== ESSENTIAL_TAG && e.category === tag)) &&
      (!favorites || favorites.has(e.link))
  );
  const { items, relaxed } = rank(pool, params.q ?? "");
  const offset = params.offset ?? 0;
  const limit = params.limit ?? 50;
  return { total: items.length, items: items.slice(offset, offset + limit), relaxed };
}

function countBy(values: string[]): TagCount[] {
  const counts = new Map<string, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function fetchTags(): Promise<TagCount[]> {
  return countBy((await library()).flatMap((x) => x.entry.tags));
}

export async function fetchCategories(): Promise<TagCount[]> {
  return countBy((await library()).map((x) => x.entry.category));
}

export async function randomEntry(): Promise<Entry> {
  const all = await library();
  if (all.length === 0) throw new Error("The library is empty");
  return all[Math.floor(Math.random() * all.length)].entry;
}

/** The whole library in seed order, for views that work over all of it. */
export async function allEntries(): Promise<Entry[]> {
  return (await library()).map((x) => x.entry);
}

export async function entriesByLink(): Promise<Map<string, Entry>> {
  return new Map((await library()).map((x) => [x.entry.link, x.entry]));
}

// --- stacks, comparisons, link-check date ------------------------------------
// From backend/seed/atlas-collections.json and link-status.json, via the build.

export interface Source {
  label: string;
  link: string;
}

export interface Stack {
  id: string;
  title: string;
  summary: string;
  steps: { link: string; do: string }[];
  notes?: string[];
  source?: Source;
  last_verified: string;
}

export interface Comparison {
  id: string;
  title: string;
  question: string;
  framing: string;
  members: { link: string; role: string }[];
  pick: { when: string; link: string }[];
  steps?: string[];
  notes?: string[];
  source?: Source;
  last_verified: string;
}

export interface Collections {
  stacks: Stack[];
  comparisons: Comparison[];
}

export const fetchCollections = () =>
  fetchPublic<Collections>("/collections.json", { stacks: [], comparisons: [] });

export interface LinkCheck {
  checked: string | null;
  links: number;
}

export const fetchLinkCheck = () => fetchPublic<LinkCheck>("/link-check.json", { checked: null, links: 0 });

// --- favorites and visits: kept in this browser -----------------------------
// Per viewer, keyed by link so they survive the library being rebuilt.

const FAVORITES_KEY = "atlas.favorites";
const VISITED_KEY = "atlas.visited";

function readSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function writeSet(key: string, set: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    // storage blocked (private window) — the star just won't stick
  }
}

export const favoriteLinks = () => readSet(FAVORITES_KEY);
export const isFavorite = (link: string) => favoriteLinks().has(link);
export const isVisited = (link: string) => readSet(VISITED_KEY).has(link);

export function setFavorite(link: string, favorite: boolean) {
  const set = favoriteLinks();
  if (favorite) set.add(link);
  else set.delete(link);
  writeSet(FAVORITES_KEY, set);
}

export function markVisited(link: string) {
  const set = readSet(VISITED_KEY);
  set.add(link);
  writeSet(VISITED_KEY, set);
}

// --- auth (local backend only) ----------------------------------------------

export interface AuthStatus {
  required: boolean;
  authenticated: boolean;
}

export function authStatus(): Promise<AuthStatus> {
  if (READ_ONLY) return Promise.resolve({ required: false, authenticated: true });
  return apiGet("/api/auth/status");
}

export function login(password: string): Promise<AuthStatus> {
  return apiPost("/api/auth/login", { password });
}

export function logout(): Promise<AuthStatus> {
  return apiPost("/api/auth/logout");
}

// --- writing entries (local backend only) -----------------------------------

export interface EntryInput extends Profile {
  link: string;
  title?: string | null;
  category: string;
  description?: string | null;
  use_case?: string | null;
  tags: string[];
}

export interface TagOpResult {
  tag: string;
  entries_touched: number;
  merged: boolean;
}

export function renameTag(name: string, newName: string): Promise<TagOpResult> {
  return apiSend("PUT", `/api/tags/${encodeURIComponent(name)}`, { new_name: newName });
}

export function mergeTags(sources: string[], into: string): Promise<TagOpResult> {
  return apiPost("/api/tags/merge", { sources, into });
}

export function createEntry(data: EntryInput): Promise<Entry> {
  return apiPost("/api/entries", data);
}

export function updateEntry(id: number, data: Partial<EntryInput>): Promise<Entry> {
  return apiSend("PUT", `/api/entries/${id}`, data);
}

export function deleteEntry(id: number): Promise<void> {
  return apiSend("DELETE", `/api/entries/${id}`);
}

export interface BatchResult {
  created: Entry[];
  updated: Entry[];
  new_categories: string[];
  new_tags: string[];
}

export function batchImport(items: EntryInput[]): Promise<BatchResult> {
  return apiPost("/api/entries/batch", items);
}

// --- live Claude-assisted capture (dormant until the API key is set) ------

export function captureEnabled(): Promise<{ enabled: boolean }> {
  return apiGet("/api/capture/enabled");
}

export function researchLinks(links: string[], notes?: string): Promise<{ drafts: EntryInput[] }> {
  return apiPost("/api/capture/research", { links, notes });
}

// --- backup --------------------------------------------------------------

export function exportLibraryUrl(): string {
  return `${BASE}/api/export`;
}
