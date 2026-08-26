export interface Entry {
  id: number;
  link: string;
  title: string | null;
  category: string;
  description: string | null;
  use_case: string | null;
  tags: string[];
  source: string;
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

export function searchEntries(params: {
  q?: string;
  category?: string;
  tag?: string;
  use_case?: string;
}): Promise<EntryListResponse> {
  const qs = new URLSearchParams(
    Object.entries(params).filter(([, v]) => !!v) as [string, string][]
  );
  return apiGet(`/api/entries?${qs.toString()}`);
}

export function fetchTags(): Promise<TagCount[]> {
  return apiGet("/api/tags");
}

export function fetchCategories(): Promise<TagCount[]> {
  return apiGet("/api/categories");
}
