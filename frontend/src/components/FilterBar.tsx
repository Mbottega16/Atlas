import type { TagCount } from "../api/client";
import { CATEGORY_GROUPS } from "../categoryGroups";

export interface Filters {
  q: string;
  category: string;
  tag: string;
}

export default function FilterBar({
  filters,
  onChange,
  categories,
  tags,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  categories: TagCount[];
  tags: TagCount[];
}) {
  const known = new Set(categories.map((c) => c.name));
  const countFor = (name: string) => categories.find((c) => c.name === name)?.count ?? 0;

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by title, description, link, or what you need it for…"
        value={filters.q}
        onChange={(e) => onChange({ ...filters, q: e.target.value })}
      />

      {/* Intent-based groups: click a group to jump straight to it instead of
          scanning a 30+ item category dropdown. Selecting a group's own pill
          again clears the category filter back to "everything in this area". */}
      <div className="category-groups" role="group" aria-label="Browse by area">
        <button
          className={filters.category === "" ? "active" : ""}
          onClick={() => onChange({ ...filters, category: "" })}
        >
          All
        </button>
        {CATEGORY_GROUPS.map((group) => {
          const groupCats = group.categories.filter((c) => known.has(c));
          if (groupCats.length === 0) return null;
          const isActiveGroup = groupCats.includes(filters.category);
          return (
            <button
              key={group.name}
              className={isActiveGroup ? "active" : ""}
              title={groupCats.join(", ")}
              onClick={() => onChange({ ...filters, category: isActiveGroup ? "" : groupCats[0] })}
            >
              {group.name}
            </button>
          );
        })}
      </div>

      <div className="filter-row">
        <select
          value={filters.category}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name} ({c.count})
            </option>
          ))}
        </select>
        <select value={filters.tag} onChange={(e) => onChange({ ...filters, tag: e.target.value })}>
          <option value="">All tags</option>
          {tags.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name} ({t.count})
            </option>
          ))}
        </select>
      </div>
      {filters.category && (
        <p className="filter-hint">
          {countFor(filters.category)} in "{filters.category}"
        </p>
      )}
    </div>
  );
}
