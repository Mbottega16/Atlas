// The front page: the whole library as one dashboard of link panels, in the
// style of the OSINT4ALL start.me board. Panels come from dashboardPanels.ts,
// so every entry in the seed shows up here, including ones added later.
import { useEffect, useMemo, useRef, useState } from "react";

import { Entry, allEntries, markVisited, searchEntries } from "../api/client";
import { Panel, PanelFilter, buildPanels } from "../dashboardPanels";
import { faviconUrl } from "../lib/display";
import "../dashboard.css";

const ROW_LIMIT = 40; // rows a long panel shows before "Show all"
const MIN_COL = 280;
const GAP = 12;
const SIDE_PADDING = 64;
const COLLAPSED_KEY = "atlas.dashboard.collapsed";

function columnCount(width: number): number {
  return Math.max(1, Math.min(8, Math.floor((width - SIDE_PADDING + GAP) / (MIN_COL + GAP))));
}

function loadCollapsed(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(COLLAPSED_KEY) ?? "[]"));
  } catch {
    return new Set();
  }
}

function saveCollapsed(ids: Set<string>) {
  try {
    localStorage.setItem(COLLAPSED_KEY, JSON.stringify([...ids]));
  } catch {
    // Private window or blocked storage: collapsing just won't be remembered.
  }
}

const hostOf = (link: string) => {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return link;
  }
};

interface Props {
  onOpenLibrary: () => void;
  onBrowse: (filter: PanelFilter) => void;
}

export default function DashboardPage({ onOpenLibrary, onBrowse }: Props) {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<Set<string> | null>(null);
  const [relaxed, setRelaxed] = useState(false);
  const [collapsed, setCollapsed] = useState<Set<string>>(loadCollapsed);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [menu, setMenu] = useState<string | null>(null);
  const [copied, setCopied] = useState("");
  const [columns, setColumns] = useState(() => columnCount(window.innerWidth));
  const searchRef = useRef<HTMLInputElement>(null);

  // The dashboard is full-bleed and dark; the rest of the app is not.
  useEffect(() => {
    document.documentElement.classList.add("dash-mode");
    return () => document.documentElement.classList.remove("dash-mode");
  }, []);

  useEffect(() => {
    allEntries()
      .then(setEntries)
      .catch((e: Error) => setError(e.message || "Couldn't load the library"));
  }, []);

  useEffect(() => {
    const onResize = () => setColumns(columnCount(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // "/" jumps to the search box; Escape clears it or closes a menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = document.activeElement instanceof HTMLInputElement;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === "Escape") {
        if (menu) setMenu(null);
        else if (typing) setQuery("");
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest?.(".dash-menu, .dash-pop")) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [menu]);

  // Same search as Browse (searchCore: every word, stemming, typo tolerance).
  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setMatches(null);
      setRelaxed(false);
      return;
    }
    const timer = setTimeout(() => {
      searchEntries({ q, limit: 100000 })
        .then((r) => {
          setMatches(new Set(r.items.map((e) => e.link)));
          setRelaxed(!!r.relaxed);
        })
        .catch(() => {});
    }, 120);
    return () => clearTimeout(timer);
  }, [query]);

  const panels = useMemo(() => (entries ? buildPanels(entries) : []), [entries]);
  const searching = matches !== null;
  const visible = useMemo(
    () =>
      panels
        .map((p) => (matches ? { ...p, entries: p.entries.filter((e) => matches.has(e.link)) } : p))
        .filter((p) => p.entries.length > 0),
    [panels, matches]
  );

  const isCollapsed = (id: string) => !searching && collapsed.has(id);
  const shownRows = (p: Panel) =>
    searching || expanded.has(p.id) ? p.entries.length : Math.min(p.entries.length, ROW_LIMIT);

  // Masonry: each panel, in board order, goes to the shortest column so far.
  const layout = useMemo(() => {
    const cols: Panel[][] = Array.from({ length: Math.min(columns, Math.max(1, visible.length)) }, () => []);
    const heights = cols.map(() => 0);
    for (const p of visible) {
      const rows = isCollapsed(p.id) ? 0 : shownRows(p) + (shownRows(p) < p.entries.length ? 1.5 : 0);
      const i = heights.indexOf(Math.min(...heights));
      cols[i].push(p);
      heights[i] += 48 + rows * 22 + 14 + GAP;
    }
    return cols;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, columns, collapsed, expanded, searching]);

  const toggleCollapsed = (id: string) => {
    const next = new Set(collapsed);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCollapsed(next);
    saveCollapsed(next);
  };

  const setAllCollapsed = (collapse: boolean) => {
    const next = collapse ? new Set(panels.map((p) => p.id)) : new Set<string>();
    setCollapsed(next);
    saveCollapsed(next);
  };

  const copyLinks = async (p: Panel) => {
    const text = p.entries.map((e) => `${e.title || hostOf(e.link)}\t${e.link}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(p.id);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      window.prompt("Copy these links:", p.entries.map((e) => e.link).join(" "));
    }
  };

  const total = entries?.length ?? 0;
  const shownSites = searching ? matches!.size : total;
  const anyOpen = panels.some((p) => !collapsed.has(p.id));

  return (
    <div className="dash">
      <header className="dash-bar">
        <div className="dash-left">
          <span className="dash-mark">
            <i aria-hidden="true" />
            atlas
          </span>
          <span className="dash-badge">
            {shownSites.toLocaleString()} sites · {visible.length} panels
          </span>
        </div>
        <div className="dash-tools">
          <label className="dash-search">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all sites  ( / )"
              aria-label="Search all sites"
            />
            {searching && <span className="dash-count">{matches!.size}</span>}
          </label>
          <button className="dash-btn" type="button" onClick={() => setAllCollapsed(anyOpen)} disabled={searching}>
            {anyOpen ? "Collapse all" : "Expand all"}
          </button>
          <button className="dash-btn" type="button" onClick={onOpenLibrary} title="Find, Collections, Tool watch and editing">
            Library view
          </button>
        </div>
      </header>

      {error && <p className="dash-empty">{error}</p>}
      {!error && entries === null && <p className="dash-empty">Loading the library…</p>}
      {searching && visible.length === 0 && <p className="dash-empty">No site matches “{query.trim()}”.</p>}
      {searching && relaxed && visible.length > 0 && (
        <p className="dash-note">No site matches every word; these are the closest matches.</p>
      )}

      <main className="dash-board" style={{ gridTemplateColumns: `repeat(${layout.length}, minmax(0, 1fr))` }}>
        {layout.map((col, i) => (
          <div className="dash-col" key={i}>
            {col.map((p) => {
              const closed = isCollapsed(p.id);
              const rows = p.entries.slice(0, shownRows(p));
              const hidden = p.entries.length - rows.length;
              return (
                <article className={`dash-widget${closed ? " collapsed" : ""}`} key={p.id}>
                  <header className="dash-wh">
                    <h2 title={p.title} onDoubleClick={() => toggleCollapsed(p.id)}>
                      {p.title}
                    </h2>
                    <span className="dash-n">{p.entries.length}</span>
                    <button
                      className="dash-menu"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={menu === p.id}
                      aria-label={`${p.title} menu`}
                      onClick={() => setMenu(menu === p.id ? null : p.id)}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                    {menu === p.id && (
                      <div className="dash-pop" role="menu">
                        {!searching && (
                          <button type="button" role="menuitem" onClick={() => { toggleCollapsed(p.id); setMenu(null); }}>
                            {closed ? "Expand panel" : "Collapse panel"}
                          </button>
                        )}
                        <button type="button" role="menuitem" onClick={() => copyLinks(p)}>
                          {copied === p.id ? "Copied ✓" : "Copy this panel's links"}
                        </button>
                        <button type="button" role="menuitem" onClick={() => onBrowse(p.filter)}>
                          Open in Library view
                        </button>
                      </div>
                    )}
                  </header>
                  {!closed && (
                    <ul className="dash-list">
                      {rows.map((e) => {
                        const icon = faviconUrl(e.link);
                        const tip = [e.title, e.use_case, e.link, e.flag ? "Link check: may be dead" : ""]
                          .filter(Boolean)
                          .join("\n");
                        return (
                          <li key={e.link}>
                            <a
                              href={e.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={tip}
                              className={e.flag ? "dead" : undefined}
                              onClick={() => markVisited(e.link)}
                            >
                              <span className="dash-ic">
                                {icon && (
                                  <img
                                    src={icon}
                                    alt=""
                                    loading="lazy"
                                    width={16}
                                    height={16}
                                    onError={(ev) => ((ev.target as HTMLImageElement).style.display = "none")}
                                  />
                                )}
                              </span>
                              <span className="dash-t">{e.title || hostOf(e.link)}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {!closed && hidden > 0 && (
                    <button className="dash-more" type="button" onClick={() => setExpanded(new Set(expanded).add(p.id))}>
                      Show all {p.entries.length}
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        ))}
      </main>
    </div>
  );
}
