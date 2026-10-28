import { useEffect, useMemo, useState } from "react";

import { Entry, TagCount, fetchCategories, fetchLinkCheck, fetchTags, searchEntries } from "../api/client";
import { resolveGroups } from "../categoryGroups";
import EntryCard from "../components/EntryCard";
import FilterBar, { EMPTY_FILTERS, Filters } from "../components/FilterBar";
import { formatDay } from "../lib/display";

type ViewMode = "grid" | "list" | "large";
const VIEW_STORAGE_KEY = "atlas.viewMode";
const PAGE_SIZE = 60;

function loadViewMode(): ViewMode {
  try {
    const stored = localStorage.getItem(VIEW_STORAGE_KEY);
    if (stored === "grid" || stored === "list" || stored === "large") return stored;
  } catch {
    // ignore — falls through to default
  }
  return "grid";
}

const isBlank = (f: Filters) => !f.q && !f.group && !f.category && !f.tag;

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
  const [relaxed, setRelaxed] = useState(false);
  const [grandTotal, setGrandTotal] = useState<number | null>(null);
  const [linksChecked, setLinksChecked] = useState<string | null>(null);
  const [categories, setCategories] = useState<TagCount[]>([]);
  const [tags, setTags] = useState<TagCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>(loadViewMode);
  // Set when the user explicitly asks to see the whole library from the
  // landing state (no filter). Cleared as soon as a real filter is chosen.
  const [showAll, setShowAll] = useState(false);
  // Bumped after an inline edit/delete so the current page refetches.
  const [reloadKey, setReloadKey] = useState(0);

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
    searchEntries({ limit: 1 })
      .then((res) => setGrandTotal(res.total))
      .catch(() => {});
    fetchLinkCheck().then((check) => setLinksChecked(check.checked));
  }, []);

  const blank = isBlank(filters);
  const landing = blank && !showAll;
  const listing = !blank || showAll;

  useEffect(() => {
    if (!blank) setShowAll(false);
  }, [blank]);

  const groups = useMemo(() => resolveGroups(categories.map((c) => c.name)), [categories]);
  const groupCategories = groups.find((g) => g.name === filters.group)?.categories;
  // A deep link to ?group=… arrives before the category list does; querying now
  // would flash the whole library before the real filter lands.
  const groupPending = !!filters.group && categories.length === 0;
  const groupKey = groupCategories?.join("|") ?? "";

  const query = useMemo(
    () => ({
      q: filters.q,
      category: filters.category,
      tag: filters.tag,
      categories: groupKey ? groupKey.split("|") : undefined,
    }),
    [filters.q, filters.category, filters.tag, groupKey]
  );

  // First page whenever the query changes.
  useEffect(() => {
    if (!listing) {
      setEntries([]);
      setLoading(false);
      return;
    }
    if (groupPending) {
      setLoading(true);
      return;
    }
    setLoading(true);
    setError(null);
    let stale = false;
    const handle = setTimeout(() => {
      searchEntries({ ...query, limit: PAGE_SIZE, offset: 0 })
        .then((res) => {
          if (stale) return;
          setEntries(res.items);
          setTotal(res.total);
          setRelaxed(!!res.relaxed);
        })
        .catch(() => {
          if (!stale) setError("Couldn't load the library — try reloading the page.");
        })
        .finally(() => {
          if (!stale) setLoading(false);
        });
    }, 120); // debounce typing in the search box
    return () => {
      stale = true;
      clearTimeout(handle);
    };
  }, [query, listing, groupPending, reloadKey]);

  // Order comes from the server, so an appended page never reshuffles the rows
  // already on screen.
  const loadMore = () => {
    setLoadingMore(true);
    searchEntries({ ...query, limit: PAGE_SIZE, offset: entries.length })
      .then((res) => {
        setEntries((prev) => [...prev, ...res.items]);
        setTotal(res.total);
      })
      .catch(() => setError("Couldn't load more — try reloading the page."))
      .finally(() => setLoadingMore(false));
  };

  const scopedTags = useMemo<TagCount[]>(() => {
    if (blank || entries.length === 0) return [];
    const counts = new Map<string, number>();
    for (const entry of entries) {
      for (const tag of entry.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, [entries, blank]);

  const tagsScoped = scopedTags.length > 0;
  const showTag = (tag: string) => onFilters({ ...EMPTY_FILTERS, tag });
  const showCategory = (category: string) => onFilters({ ...EMPTY_FILTERS, category });

  const countFor = (name: string) => categories.find((c) => c.name === name)?.count ?? 0;
  const hasMore = entries.length < total;

  return (
    <div>
      <FilterBar
        filters={filters}
        onChange={onFilters}
        groups={groups}
        categories={categories}
        tagOptions={tagsScoped ? scopedTags : tags}
        tagsScoped={tagsScoped}
      />

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!error && landing && (
        <div className="browse-landing">
          <p className="browse-landing-lead">
            Pick an area to dig into, or use the search box above.
          </p>
          <div className="group-cards">
            {groups.map((group) => {
              const groupTotal = group.categories.reduce((sum, c) => sum + countFor(c), 0);
              return (
                <div key={group.name} className="group-card">
                  <div className="group-card-head">
                    <h3>
                      <button
                        type="button"
                        className="group-card-title"
                        title={`Show all ${groupTotal} in ${group.name}`}
                        onClick={() => onFilters({ ...EMPTY_FILTERS, group: group.name })}
                      >
                        {group.name}
                      </button>
                    </h3>
                    <span className="group-card-total">{groupTotal}</span>
                  </div>
                  <div className="group-card-cats">
                    {group.categories
                      .slice()
                      .sort((a, b) => countFor(b) - countFor(a))
                      .map((c) => (
                        <button
                          key={c}
                          className="group-card-cat"
                          onClick={() => showCategory(c)}
                        >
                          {c} <span>{countFor(c)}</span>
                        </button>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
          <button className="browse-showall-btn" onClick={() => setShowAll(true)}>
            Show the full list{grandTotal !== null ? ` (${grandTotal})` : ""} →
          </button>
        </div>
      )}

      {!error && listing && (
        <>
          <div className="results-row">
            <p>
              {loading
                ? "Loading…"
                : relaxed
                  ? `Nothing matched every word — ${total} close matches`
                  : `${entries.length} of ${total} shown`}
              {!loading && linksChecked && (
                <span className="results-checked" title="Every link is checked each Monday; see Tool watch">
                  {" "}
                  · links checked {formatDay(linksChecked)}
                </span>
              )}
            </p>
            <div className="results-row-right">
              <button
                className="clear-filters"
                onClick={() => {
                  setShowAll(false);
                  onFilters(EMPTY_FILTERS);
                }}
              >
                {blank ? "Back to areas" : "Clear"}
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
                onChanged={() => setReloadKey((k) => k + 1)}
                onTagClick={showTag}
                onCategoryClick={showCategory}
              />
            ))}
          </div>
          {!loading && entries.length === 0 && (
            <p>No matches — try a broader search or Clear.</p>
          )}
          {hasMore && (
            <button className="load-more" onClick={loadMore} disabled={loadingMore}>
              {loadingMore ? "Loading…" : `Load ${Math.min(PAGE_SIZE, total - entries.length)} more`}
            </button>
          )}
        </>
      )}
    </div>
  );
}
