import type { TagCount } from "../api/client";

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
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search title, description, link…"
        value={filters.q}
        onChange={(e) => onChange({ ...filters, q: e.target.value })}
      />
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
  );
}
