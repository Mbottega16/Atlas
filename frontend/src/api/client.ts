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

async function apiGet<T>(path: string): Promise<T> {
  const resp = await fetch(`${BASE}${path}`);
  if (!resp.ok) throw new Error(`Request to ${path} failed: ${resp.status}`);
  return resp.json();
}

async function apiPost<T>(path: string): Promise<T> {
  const resp = await fetch(`${BASE}${path}`, { method: "POST" });
  if (!resp.ok) throw new Error(`Request to ${path} failed: ${resp.status}`);
  return resp.json();
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
