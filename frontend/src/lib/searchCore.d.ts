export interface Searchable {
  id: number;
  link: string;
  title: string | null;
  category: string;
  description: string | null;
  use_case: string | null;
  tags: string[];
  added?: string;
  best_for?: string | null;
}

export interface Indexed<T extends Searchable> {
  entry: T;
  fields: Record<string, Set<string>>;
  titleLower: string;
}

export const ESSENTIAL_TAG: string;
export function stem(word: string): string;
export function queryTerms(q: string): string[];
export function indexEntry<T extends Searchable>(entry: T): Indexed<T>;
export function rank<T extends Searchable>(indexed: Indexed<T>[], q: string): { items: T[]; relaxed: boolean };
