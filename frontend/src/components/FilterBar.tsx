import { KeyboardEvent, useMemo, useState } from "react";

import type { TagCount } from "../api/client";
import type { CategoryGroup } from "../categoryGroups";
import { matchTags, stepIndex } from "../lib/tagMatch";

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
  const [open, setOpen] = useState(false);
  // Index of the highlighted suggestion; -1 until an arrow key moves into the list.
  const [active, setActive] = useState(-1);
  const names = useMemo(() => new Set(options.map((o) => o.name)), [options]);
  const matches = useMemo(() => matchTags(options, draft), [options, draft]);
  const showList = open && !disabled && matches.length > 0;

  const commit = (value: string) => {
    const tag = value.trim().toLowerCase();
    if (!names.has(tag)) return;
    onPick(tag);
    setDraft("");
    setActive(-1);
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => stepIndex(i, e.key, matches.length));
    } else if (e.key === "Enter") {
      // With a suggestion highlighted, Enter takes it; otherwise it takes what was typed.
      if (showList && active >= 0 && matches[active]) {
        e.preventDefault();
        commit(matches[active].name);
      } else {
        commit(draft);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
  };

  return (
    <div className="tag-input">
      <input
        type="text"
        role="combobox"
        placeholder={scoped ? "Narrow by a tag in these results…" : "Filter by tag…"}
        aria-label="Filter by tag"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls="atlas-tag-suggestions"
        aria-activedescendant={showList && active >= 0 ? `atlas-tag-option-${active}` : undefined}
        value={draft}
        disabled={disabled}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          setOpen(false);
          setActive(-1);
        }}
        onChange={(e) => {
          setDraft(e.target.value);
          setActive(-1);
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
      />
      {showList && (
        <ul id="atlas-tag-suggestions" role="listbox" aria-label="Matching tags" className="tag-suggest">
          {matches.map((t, i) => (
            <li
              key={t.name}
              id={`atlas-tag-option-${i}`}
              role="option"
              aria-selected={i === active}
              className={`tag-pill tag-suggest-option${i === active ? " active" : ""}`}
              title={`${t.count}${scoped ? " here" : ""} entries`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => commit(t.name)}
            >
              {t.name} <span className="tag-suggest-count">{t.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
