import { useMemo, useState } from "react";

import type { TagCount } from "../api/client";
import type { CategoryGroup } from "../categoryGroups";

export interface Filters {
  q: string;
  group: string;
  category: string;
  tag: string;
}

export const EMPTY_FILTERS: Filters = { q: "", group: "", category: "", tag: "" };

const ESSENTIAL_TAG = "essential";

export default function FilterBar({
  filters,
  onChange,
  groups,
  categories,
  tagOptions,
  tagsScoped,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  groups: CategoryGroup[];
  categories: TagCount[];
  tagOptions: TagCount[];
  tagsScoped: boolean;
}) {
  const countFor = (name: string) => categories.find((c) => c.name === name)?.count ?? 0;
  const activeGroup = groups.find((g) => g.name === filters.group);
  const categoryChoices = activeGroup
    ? categories.filter((c) => activeGroup.categories.includes(c.name))
    : categories;

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search titles, descriptions, tags, or what you need it for…"
        aria-label="Search the library"
        value={filters.q}
        onChange={(e) => onChange({ ...filters, q: e.target.value })}
      />

      <div className="category-groups" role="group" aria-label="Browse by area">
        <button
          className={!filters.group && !filters.category ? "active" : ""}
          aria-pressed={!filters.group && !filters.category}
          onClick={() => onChange({ ...filters, group: "", category: "" })}
        >
          All
        </button>
        {groups.map((group) => {
          const active = filters.group === group.name || group.categories.includes(filters.category);
          return (
            <button
              key={group.name}
              className={active ? "active" : ""}
              aria-pressed={active}
              title={group.categories.join(", ")}
              onClick={() => onChange({ ...filters, group: active ? "" : group.name, category: "" })}
            >
              {group.name}
            </button>
          );
        })}
      </div>

      <div className="filter-row">
        <select
          aria-label="Category"
          value={filters.category}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
        >
          <option value="">{activeGroup ? `All of ${activeGroup.name}` : "All categories"}</option>
          {categoryChoices.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name} ({c.count})
            </option>
          ))}
        </select>

        {filters.tag && filters.tag !== ESSENTIAL_TAG ? (
          <span className="active-tag">
            tag: {filters.tag}
            <button
              type="button"
              aria-label={`Remove the ${filters.tag} tag filter`}
              onClick={() => onChange({ ...filters, tag: "" })}
            >
              ✕
            </button>
          </span>
        ) : (
          <TagInput
            options={tagOptions}
            scoped={tagsScoped}
            disabled={filters.tag === ESSENTIAL_TAG}
            onPick={(tag) => onChange({ ...filters, tag })}
          />
        )}

        <label className="essential-toggle" title="Only the hand-picked first-choice entries">
          <input
            type="checkbox"
            checked={filters.tag === ESSENTIAL_TAG}
            onChange={(e) => onChange({ ...filters, tag: e.target.checked ? ESSENTIAL_TAG : "" })}
          />
          ★ Essentials only
        </label>
      </div>

      {filters.category ? (
        <p className="filter-hint">
          {countFor(filters.category)} in "{filters.category}"
        </p>
      ) : activeGroup ? (
        <p className="filter-hint">
          {activeGroup.categories.reduce((sum, c) => sum + countFor(c), 0)} across{" "}
          {activeGroup.categories.join(", ")}
        </p>
      ) : null}
    </div>
  );
}

function TagInput({
  options,
  scoped,
  disabled,
  onPick,
}: {
  options: TagCount[];
  scoped: boolean;
  disabled: boolean;
  onPick: (tag: string) => void;
}) {
  const [draft, setDraft] = useState("");
  const names = useMemo(() => new Set(options.map((o) => o.name)), [options]);

  const commit = (value: string) => {
    const tag = value.trim().toLowerCase();
    if (!names.has(tag)) return;
    onPick(tag);
    setDraft("");
  };

  return (
    <>
      <input
        type="text"
        list="atlas-tag-options"
        placeholder={scoped ? "Narrow by a tag in these results…" : "Filter by tag…"}
        aria-label="Filter by tag"
        value={draft}
        disabled={disabled}
        onChange={(e) => {
          setDraft(e.target.value);
          // A pick from the suggestion list commits at once; typed letters wait for Enter,
          // so "ai" doesn't fire before you can finish typing "ai engineering".
          const inputType = (e.nativeEvent as InputEvent).inputType;
          if (!inputType || inputType === "insertReplacementText") commit(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit(draft);
        }}
      />
      <datalist id="atlas-tag-options">
        {options.map((t) => (
          <option key={t.name} value={t.name} label={`${t.name} (${t.count}${scoped ? " here" : ""})`} />
        ))}
      </datalist>
    </>
  );
}
