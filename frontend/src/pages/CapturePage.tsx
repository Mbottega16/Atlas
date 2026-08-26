import { useEffect, useState } from "react";

import { Entry, searchEntries } from "../api/client";
import EntryCard from "../components/EntryCard";

/**
 * Phase 4 (current): capture itself happens inside a Claude Code session —
 * paste raw links there, Claude researches/tags them via WebFetch/WebSearch
 * and saves them through POST /api/entries/batch. This page is just a
 * read-only view of what landed most recently, so you can confirm a batch
 * import worked.
 *
 * Phase 7 (later, needs an approved ANTHROPIC_API_KEY): this becomes a real
 * paste-box-and-review UI backed by POST /api/capture/research.
 */
export default function CapturePage() {
  const [recent, setRecent] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchEntries({})
      .then((res) => setRecent(res.items.filter((e) => e.source === "capture").slice(0, 20)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <p>
        To add links right now, paste a raw list into a Claude Code session rooted in this
        repo — it researches and tags each one, then saves it here. A direct paste-box UI
        arrives once live Claude-assisted capture (Phase 7) is approved and built.
      </p>
      <h3>Recently captured</h3>
      {loading && <p>Loading…</p>}
      {!loading && recent.length === 0 && <p>Nothing captured yet.</p>}
      {recent.map((e) => (
        <EntryCard key={e.id} entry={e} />
      ))}
    </div>
  );
}
