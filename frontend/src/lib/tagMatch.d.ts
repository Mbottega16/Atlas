export interface TagOption {
  name: string;
  count: number;
}

export function matchTags<T extends TagOption>(options: T[], draft: string, limit?: number): T[];
export function stepIndex(current: number, key: string, length: number): number;
