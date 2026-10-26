export interface Exportable {
  id: number;
  link: string;
  title: string | null;
  category: string;
  description: string | null;
  use_case: string | null;
  tags: string[];
}

export function escapeHtml(text: string | null | undefined): string;
export function toBookmarkHtml(entries: Exportable[], now?: Date): string;
export function toJson(entries: Exportable[]): string;
export function downloadText(filename: string, mime: string, text: string): void;
