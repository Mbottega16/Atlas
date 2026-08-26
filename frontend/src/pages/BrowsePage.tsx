import { useEffect, useState } from "react";

import { Entry, TagCount, fetchCategories, fetchTags, searchEntries } from "../api/client";
import EntryCard from "../components/EntryCard";
import FilterBar, { Filters } from "../components/FilterBar";

export default function BrowsePage() {
  const [filters, setFilters] = useState<Filters>({ q: "", category: "", tag: "" });
  const [entries, setEntries] = useState<Entry[]>([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState<TagCount[]>([]);
  const [tags, setTags] = useState<TagCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          <p>{loading ? "Loading…" : `${total} result${total === 1 ? "" : "s"}`}</p>
          {entries.map((e) => (
            <EntryCard key={e.id} entry={e} />
          ))}
          {!loading && entries.length === 0 && <p>No entries yet — try Capture to add some.</p>}
        </>
      )}
    </div>
  );
}
