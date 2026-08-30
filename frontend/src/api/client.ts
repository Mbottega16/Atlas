export interface Entry {
  id: number;
  link: string;
  title: string | null;
  category: string;
  description: string | null;
  use_case: string | null;
  tags: string[];
  source: string;
  is_favorite: boolean;
  visited_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface EntryListResponse {
  total: number;
  items: Entry[];
}

export interface TagCount {
  name: string;
  count: number;
}

const BASE = import.meta.env.VITE_API_BASE_URL || "";

// credentials: "include" so the auth-gate session cookie rides along in dev
// (cross-origin to :8000) and in the same-origin deploy alike.
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
  return resp.status === 204 ? (undefined as T) : resp.json();
}

const apiPost = <T>(path: string, body?: unknown) => apiSend<T>("POST", path, body);

export interface AuthStatus {
  required: boolean;
  authenticated: boolean;
}

export function authStatus(): Promise<AuthStatus> {
  return apiGet("/api/auth/status");
}

export function login(password: string): Promise<AuthStatus> {
  return apiPost("/api/auth/login", { password });
}

export function logout(): Promise<AuthStatus> {
  return apiPost("/api/auth/logout");
}

export function searchEntries(params: {
  q?: string;
  category?: string;
  tag?: string;
  use_case?: string;
  favorite?: boolean;
  limit?: number;
  offset?: number;
}): Promise<EntryListResponse> {
  const qs = new URLSearchParams(
    Object.entries(params)
      .filter(([, v]) => v !== undefined && v !== "" && v !== false)
      .map(([k, v]) => [k, String(v)])
  );
  return apiGet(`/api/entries?${qs.toString()}`);
}

export function fetchTags(): Promise<TagCount[]> {
  return apiGet("/api/tags");
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

export function fetchCategories(): Promise<TagCount[]> {
  return apiGet("/api/categories");
}

export function randomEntry(params: { category?: string; tag?: string } = {}): Promise<Entry> {
  const qs = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== "") as [string, string][]
  );
  const suffix = qs.toString() ? `?${qs.toString()}` : "";
  return apiGet(`/api/entries/random${suffix}`);
}

export function markVisited(id: number): Promise<Entry> {
  return apiPost(`/api/entries/${id}/visit`);
}

export function setFavorite(id: number, favorite: boolean): Promise<Entry> {
  return apiPost(`/api/entries/${id}/favorite?favorite=${favorite}`);
}

// --- writing entries -------------------------------------------------------

export interface EntryInput {
  link: string;
  title?: string | null;
  category: string;
  description?: string | null;
  use_case?: string | null;
  tags: string[];
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
