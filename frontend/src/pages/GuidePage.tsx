import { useEffect, useMemo, useRef, useState } from "react";

import { Entry, searchEntries } from "../api/client";
import EntryCard from "../components/EntryCard";
import { EMPTY_FILTERS, Filters } from "../components/FilterBar";
import { GUIDE_ROOT, GuideFilter, GuideNode } from "../guidedPaths";

const PREVIEW_COUNT = 8;

function filterToBrowse(f: GuideFilter): Filters {
  return { ...EMPTY_FILTERS, q: f.q ?? "", category: f.category ?? "", tag: f.tag ?? "" };
}

function isEmpty(f: GuideFilter): boolean {
  return !f.category && !f.tag && !f.q;
}

export default function GuidePage({
  onSeeAll,
  onOpenCollection,
  onVisit,
  onFavoriteToggle,
}: {
  /** Hand a filter to the Browse tab and switch to it. */
  onSeeAll: (filters: Filters) => void;
  /** Open a stack or comparison on the Collections tab. */
  onOpenCollection: (id: string) => void;
  onVisit: () => void;
  onFavoriteToggle: () => void;
}) {
  // Stack of visited question nodes; last is the one on screen.
  const [stack, setStack] = useState<GuideNode[]>([GUIDE_ROOT]);
  const [crumbs, setCrumbs] = useState<string[]>([]);
  const [leaf, setLeaf] = useState<GuideFilter | null>(null);
  const [freeText, setFreeText] = useState("");

  const [results, setResults] = useState<Entry[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const node = stack[stack.length - 1];
  const optionsRef = useRef<HTMLDivElement>(null);

  // Autofocus the first option each time a new question renders, so the
  // whole tree is answerable from the keyboard.
  useEffect(() => {
    if (!leaf) {
      optionsRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    }
  }, [node, leaf]);

  const onOptionsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const btns = Array.from(
      optionsRef.current?.querySelectorAll<HTMLButtonElement>("button.guide-option") ?? []
    );
    const i = btns.indexOf(document.activeElement as HTMLButtonElement);
    const next = e.key === "ArrowDown" ? i + 1 : i - 1;
    if (btns[next]) {
      e.preventDefault();
      btns[next].focus();
    }
  };

  const reset = () => {
    setStack([GUIDE_ROOT]);
    setCrumbs([]);
    setLeaf(null);
    setError(null);
  };

  const back = () => {
    if (leaf) {
      setLeaf(null);
      setCrumbs((c) => c.slice(0, -1));
      return;
    }
    if (stack.length > 1) {
      setStack((s) => s.slice(0, -1));
      setCrumbs((c) => c.slice(0, -1));
    }
  };

  const choose = (label: string, next?: GuideNode, filter?: GuideFilter) => {
    if (filter && isEmpty(filter)) {
      onSeeAll(EMPTY_FILTERS);
      return;
    }
    setCrumbs((c) => [...c, label]);
    if (next) setStack((s) => [...s, next]);
    else if (filter) setLeaf(filter);
  };

  useEffect(() => {
    if (!leaf) return;
    setLoading(true);
    setError(null);
    searchEntries({ category: leaf.category, tag: leaf.tag, q: leaf.q, limit: PREVIEW_COUNT })
      .then((res) => {
        setResults(res.items);
        setTotal(res.total);
      })
      .catch(() => setError("Couldn't load the library — try reloading the page."))
      .finally(() => setLoading(false));
  }, [leaf]);

  const preview = useMemo(() => results.slice(0, PREVIEW_COUNT), [results]);

  const submitFreeText = (e: React.FormEvent) => {
    e.preventDefault();
    const q = freeText.trim();
    if (q) onSeeAll({ ...EMPTY_FILTERS, q });
  };

  return (
    <div className="guide">
      <form className="guide-freetext" onSubmit={submitFreeText}>
        <input
          type="text"
          placeholder="Describe what you need in your own words…"
          value={freeText}
          onChange={(e) => setFreeText(e.target.value)}
          aria-label="Describe what you need"
        />
        <button type="submit">Search</button>
      </form>

      <div className="guide-or">or answer a couple of questions</div>

      {crumbs.length > 0 && (
        <div className="guide-crumbs">
          {crumbs.map((c, i) => (
            <span key={i} className="guide-crumb">
              {c}
            </span>
          ))}
        </div>
      )}

      {!leaf && (
        <div className="guide-question">
          <h2>{node.question}</h2>
          <div className="guide-options" ref={optionsRef} onKeyDown={onOptionsKeyDown}>
            {node.options.map((opt) => (
              <button
                key={opt.label}
                className="guide-option"
                onClick={() =>
                  opt.open ? onOpenCollection(opt.open) : choose(opt.label, opt.next, opt.filter)
                }
              >
                <span className="guide-option-label">{opt.label}</span>
                {opt.hint && <span className="guide-option-hint">{opt.hint}</span>}
                <span className="guide-option-arrow">{opt.next ? "›" : "→"}</span>
              </button>
            ))}
          </div>
          {(stack.length > 1 || crumbs.length > 0) && (
            <button className="guide-back" onClick={back}>
              ← Back
            </button>
          )}
        </div>
      )}

      {leaf && (
        <div className="guide-results">
          <div className="guide-results-head">
            <h2>{leaf.label}</h2>
            <div className="guide-results-actions">
              <button className="guide-back" onClick={back}>
                ← Back
              </button>
              <button className="guide-back" onClick={reset}>
                ↺ Start over
              </button>
            </div>
          </div>

          {error && <p style={{ color: "crimson" }}>{error}</p>}
          {loading && <p>Finding the best matches…</p>}

          {!loading && !error && (
            <>
              {results.length === 0 ? (
                <p>
                  Nothing lands here yet.{" "}
                  <button className="guide-link" onClick={reset}>
                    Try another path
                  </button>{" "}
                  or{" "}
                  <button className="guide-link" onClick={() => onSeeAll(EMPTY_FILTERS)}>
                    browse everything
                  </button>
                  .
                </p>
              ) : (
                <>
                  <p className="guide-results-count">
                    Top {Math.min(PREVIEW_COUNT, results.length)}
                    {total > PREVIEW_COUNT ? ` of ${total}` : ""} — best matches and
                    first-picks first
                  </p>
                  <div className="entries-grid view-grid">
                    {preview.map((e) => (
                      <EntryCard
                        key={e.id}
                        entry={e}
                        view="grid"
                        onVisit={onVisit}
                        onFavoriteToggle={onFavoriteToggle}
                        onTagClick={(tag) => onSeeAll({ ...EMPTY_FILTERS, tag })}
                        onCategoryClick={(category) => onSeeAll({ ...EMPTY_FILTERS, category })}
                      />
                    ))}
                  </div>
                  <button
                    className="guide-seeall"
                    onClick={() => onSeeAll(filterToBrowse(leaf))}
                  >
                    See all {total} in Browse →
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
