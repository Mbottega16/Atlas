import { useEffect, useState } from "react";

import { Entry, TagCount, fetchCategories, fetchTags, searchEntries } from "../api/client";
import EntryCard from "../components/EntryCard";
import FilterBar, { Filters } from "../components/FilterBar";

type ViewMode = "grid" | "list" | "large";
const VIEW_STORAGE_KEY = "atlas.viewMode";

function loadViewMode(): ViewMode {
  try {
    const stored = localStorage.getItem(VIEW_STORAGE_KEY);
    if (stored === "grid" || stored === "list" || stored === "large") return stored;
  } catch {
    // ignore — falls through to default
  }
  return "grid";
}

export default function BrowsePage({
  onVisit,
  onFavoriteToggle,
}: {
  onVisit: () => void;
  onFavoriteToggle: () => void;
}) {
  const [filters, setFilters] = useState<Filters>({ q: "", category: "", tag: "" });
  const [entries, setEntries] = useState<Entry[]>([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState<TagCount[]>([]);
  const [tags, setTags] = useState<TagCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>(loadViewMode);

  const changeView = (next: ViewMode) => {
    setView(next);
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, next);
    } catch {
      // ignore — per-viewer convenience only
    }
  };

  useEffect(() => {
    fetchCategories().then(setCategories).catch(() => {});
    fetchTags().then(setTags).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const handle = setTimeout(() => {
      searchEntries(filters)
        .then((res) => {
          setEntries(res.items);
          setTotal(res.total);
        })
        .catch(() => setError("Couldn't reach the Atlas backend — is it running?"))
        .finally(() => setLoading(false));
    }, 200); // debounce typing in the search box
    return () => clearTimeout(handle);
  }, [filters]);

  return (
    <div>
      <FilterBar filters={filters} onChange={setFilters} categories={categories} tags={tags} />
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!error && (
        <>
          <div className="results-row">
            <p>{loading ? "Loading…" : `${total} result${total === 1 ? "" : "s"}`}</p>
            <div className="view-toggle" role="group" aria-label="View">
              <button
                className={view === "list" ? "active" : ""}
                onClick={() => changeView("list")}
                title="List view"
                aria-pressed={view === "list"}
              >
                ☰
              </button>
              <button
                className={view === "grid" ? "active" : ""}
                onClick={() => changeView("grid")}
                title="Grid view"
                aria-pressed={view === "grid"}
              >
                ▦
              </button>
              <button
                className={view === "large" ? "active" : ""}
                onClick={() => changeView("large")}
                title="Large panels"
                aria-pressed={view === "large"}
              >
                ▢
              </button>
            </div>
          </div>
          <div className={`entries-grid view-${view}`}>
            {entries.map((e) => (
              <EntryCard key={e.id} entry={e} view={view} onVisit={onVisit} onFavoriteToggle={onFavoriteToggle} />
            ))}
          </div>
          {!loading && entries.length === 0 && <p>No entries yet — try Capture to add some.</p>}
        </>
      )}
    </div>
  );
}
