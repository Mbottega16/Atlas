import type { Access, Cost, Entry } from "../api/client";

export const COST_LABEL: Record<Cost, string> = {
  free: "Free",
  freemium: "Free + paid plans",
  paid: "Paid",
};

export const ACCESS_LABEL: Record<Access, string> = {
  "no sign-up": "No sign-up",
  "free account": "Free account",
  "paid account": "Paid account",
  download: "Download",
};

// A profile older than this is listed as due for a re-check on Tool watch.
export const RECHECK_DAYS = 183;

export function faviconUrl(link: string): string | null {
  try {
    const { hostname } = new URL(link);
    return `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
  } catch {
    return null;
  }
}

/** A seed date (YYYY-MM-DD) as "Oct 25, 2026", read as a local calendar day. */
export function formatDay(iso: string): string {
  const day = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(day.getTime())) return iso;
  return day.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function daysSince(iso: string, now = new Date()): number {
  const day = new Date(`${iso}T00:00:00`);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((today.getTime() - day.getTime()) / 86_400_000);
}

export const hasProfile = (e: Entry) => !!e.last_verified;
