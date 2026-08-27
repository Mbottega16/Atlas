import { useEffect, useState } from "react";

import { Entry, TagCount, fetchCategories, fetchTags, searchEntries } from "../api/client";
import { CATEGORY_GROUPS } from "../categoryGroups";
import EntryCard from "../components/EntryCard";
import FilterBar, { Filters } from "../components/FilterBar";
import { rankEntries } from "../ranking";

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

const isBlank = (f: Filters) => !f.q && !f.category && !f.tag;

export default function BrowsePage({
  filters,
  onFilters,
  onVisit,
  onFavoriteToggle,
}: {
  filters: Filters;
  onFilters: (next: Filters) => void;
  onVisit: () => void;
  onFavoriteToggle: () => void;
}) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState<number | null>(null);
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
    // Grand total for the "how big is Atlas" line on the landing state.
    searchEntries({})
      .then((res) => setGrandTotal(res.total))
      .catch(() => {});
  }, []);

  const landing = isBlank(filters);

  useEffect(() => {
    if (landing) {
      setEntries([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const handle = setTimeout(() => {
      searchEntries(filters)
        .then((res) => {
          setEntries(rankEntries(res.items));
          setTotal(res.total);
        })
        .catch(() => setError("Couldn't reach the Atlas backend — is it running?"))
        .finally(() => setLoading(false));
    }, 200); // debounce typing in the search box
    return () => clearTimeout(handle);
  }, [filters, landing]);

  const countFor = (name: string) => categories.find((c) => c.name === name)?.count ?? 0;
  const knownCats = new Set(categories.map((c) => c.name));

  return (
    <div>
      <FilterBar filters={filters} onChange={onFilters} categories={categories} tags={tags} />

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!error && landing && (
        <div className="browse-landing">
          <p className="browse-landing-lead">
            Pick an area to dig into, or use the search box above.
          </p>
          <div className="group-cards">
            {CATEGORY_GROUPS.map((group) => {
              const cats = group.categories.filter((c) => knownCats.has(c));
              if (cats.length === 0) return null;
              const groupTotal = cats.reduce((sum, c) => sum + countFor(c), 0);
              return (
                <div key={group.name} className="group-card">
                  <div className="group-card-head">
                    <h3>{group.name}</h3>
                    <span className="group-card-total">{groupTotal}</span>
                  </div>
                  <div className="group-card-cats">
                    {cats
                      .slice()
                      .sort((a, b) => countFor(b) - countFor(a))
                      .map((c) => (
                        <button
                          key={c}
                          className="group-card-cat"
                          onClick={() => onFilters({ q: "", category: c, tag: "" })}
                        >
                          {c} <span>{countFor(c)}</span>
                        </button>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
          {grandTotal !== null && (
            <p className="browse-grandtotal">{grandTotal} entries in Atlas</p>
          )}
        </div>
      )}

      {!error && !landing && (
        <>
          <div className="results-row">
            <p>{loading ? "Loading…" : `${total} result${total === 1 ? "" : "s"}`}</p>
            <div className="results-row-right">
              <button
                className="clear-filters"
                onClick={() => onFilters({ q: "", category: "", tag: "" })}
              >
                Clear
              </button>
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
          </div>
          <div className={`entries-grid view-${view}`}>
            {entries.map((e) => (
              <EntryCard
                key={e.id}
                entry={e}
                view={view}
                onVisit={onVisit}
                onFavoriteToggle={onFavoriteToggle}
              />
            ))}
          </div>
          {!loading && entries.length === 0 && (
            <p>No matches — try a broader search or Clear.</p>
          )}
        </>
      )}
    </div>
  );
}
