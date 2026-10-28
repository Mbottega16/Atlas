import { useEffect, useRef, useState } from "react";

import { READ_ONLY, authStatus, logout, markVisited, randomEntry } from "./api/client";
import FavoritesPanel from "./components/FavoritesPanel";
import { EMPTY_FILTERS, Filters } from "./components/FilterBar";
import BrowsePage from "./pages/BrowsePage";
import CapturePage from "./pages/CapturePage";
import CollectionsPage from "./pages/CollectionsPage";
import GuidePage from "./pages/GuidePage";
import WatchPage from "./pages/WatchPage";

type Tab = "find" | "browse" | "collections" | "watch" | "capture";

// The public site is read-only, so it has no Capture tab.
const TABS: Tab[] = READ_ONLY
  ? ["find", "browse", "collections", "watch"]
  : ["find", "browse", "collections", "watch", "capture"];
const FILTER_KEYS = ["group", "category", "tag", "q"] as const;

interface View {
  tab: Tab;
  filters: Filters;
  /** The open stack or comparison on the Collections tab (?c=), or "". */
  collection: string;
}

function readUrl(): View {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab") as Tab | null;
  const filters = { ...EMPTY_FILTERS };
  for (const key of FILTER_KEYS) filters[key] = params.get(key) ?? "";
  return { tab: tab && TABS.includes(tab) ? tab : "find", filters, collection: params.get("c") ?? "" };
}

function toSearch({ tab, filters, collection }: View): string {
  const params = new URLSearchParams();
  if (tab !== "find") params.set("tab", tab);
  if (tab === "browse") {
    for (const key of FILTER_KEYS) if (filters[key]) params.set(key, filters[key]);
  }
  if (tab === "collections" && collection) params.set("c", collection);
  const search = params.toString();
  return search ? `?${search}` : "";
}

export default function App() {
  // The URL is the view: every filter is bookmarkable and Back undoes it.
  const [view, setView] = useState<View>(readUrl);
  const { tab, filters } = view;
  const lastView = useRef<View>(view);

  useEffect(() => {
    const search = toSearch(view);
    const previous = lastView.current;
    lastView.current = view;
    if (search === window.location.search) return;

    // Refining a search replaces its entry instead of stacking one per keystroke.
    const refiningSearch =
      previous.tab === view.tab &&
      previous.filters.q !== "" &&
      view.filters.q !== "" &&
      FILTER_KEYS.every((key) => key === "q" || previous.filters[key] === view.filters[key]);

    const url = `${window.location.pathname}${search}`;
    if (refiningSearch) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  }, [view]);

  useEffect(() => {
    const onPopState = () => setView(readUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // A tab picked from the nav opens on its start page, so Collections shows the list.
  const setTab = (next: Tab) => setView((v) => ({ ...v, tab: next, collection: "" }));
  const setFilters = (next: Filters) => setView((v) => ({ ...v, filters: next }));
  const openCollection = (id: string) => setView((v) => ({ ...v, tab: "collections", collection: id }));

  const [authRequired, setAuthRequired] = useState(false);
  useEffect(() => {
    authStatus()
      .then((s) => setAuthRequired(s.required))
      .catch(() => {});
  }, []);

  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [favoritesRefreshKey, setFavoritesRefreshKey] = useState(0);
  const [hasAutoOpenedFavorites, setHasAutoOpenedFavorites] = useState(false);
  const [rolling, setRolling] = useState(false);

  const handleSurpriseMe = async () => {
    setRolling(true);
    try {
      const entry = await randomEntry();
      window.open(entry.link, "_blank", "noopener,noreferrer");
      markVisited(entry.link);
      handleVisit();
    } catch {
      // Silent — a failed roll just means "try again", not worth a modal.
    } finally {
      setRolling(false);
    }
  };

  const handleVisit = () => {
    // First time this session someone opens a link, surface the
    // favorites panel so it's easy to star things as you go.
    if (!hasAutoOpenedFavorites) {
      setFavoritesOpen(true);
      setHasAutoOpenedFavorites(true);
    }
  };

  const handleFavoriteToggle = () => {
    setFavoritesRefreshKey((k) => k + 1);
  };

  // The guide hands Browse a preset filter and switches tabs to it.
  const handleSeeAll = (next: Filters) => setView({ tab: "browse", filters: next, collection: "" });

  const navLink = (t: Tab, label: string) => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setTab(t);
      }}
      style={{ opacity: tab === t ? 1 : 0.5 }}
    >
      {label}
    </a>
  );

  return (
    <div className="app-shell atlas-shell">
      <header className="app-header">
        <a className="brand-lockup" href="#" onClick={(e) => { e.preventDefault(); setTab("find"); }} aria-label="Atlas home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span className="brand-name">atlas<span className="brand-period">.</span><small>THE PERSONAL WEB INDEX</small></span>
        </a>
        <div className="header-note"><span className="status-dot" /> Curated places worth coming back to</div>
      </header>
      <section className="welcome-hero atlas-hero">
        <div className="hero-copy">
          <p className="eyebrow">A LITTLE LESS SEARCHING</p>
          <h1>The internet is vast.<br /><em>Your next good find isn't.</em></h1>
          <p className="tagline">A hand-curated map of useful sites, creative tools, and ideas — gathered in one place, ready when you need them.</p>
        </div>
        <div className="hero-art" aria-hidden="true"><span className="atlas-sun">✳</span><span className="atlas-ring ring-a"/><span className="atlas-ring ring-b"/><span className="atlas-spark spark-a">✦</span><span className="atlas-spark spark-b">✦</span></div>
      </section>
      <nav className="app-nav">
        {navLink("find", "Find")}
        {navLink("browse", "Browse")}
        {navLink("collections", "Collections")}
        {navLink("watch", "Tool watch")}
        {!READ_ONLY && navLink("capture", "Capture")}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (!rolling) handleSurpriseMe();
          }}
          style={{ marginLeft: "auto", opacity: rolling ? 0.5 : 1 }}
          title="Open a random entry from the whole library"
        >
          🎲 Surprise me
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setFavoritesOpen((v) => !v);
          }}
          style={{ opacity: favoritesOpen ? 1 : 0.5 }}
        >
          ★ Favorites
        </a>
        {authRequired && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              logout().finally(() => window.location.reload());
            }}
            style={{ opacity: 0.5 }}
          >
            Log out
          </a>
        )}
      </nav>

      {tab === "find" && (
        <GuidePage
          onSeeAll={handleSeeAll}
          onOpenCollection={openCollection}
          onVisit={handleVisit}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )}
      {tab === "collections" && (
        <CollectionsPage
          openId={view.collection}
          onOpen={openCollection}
          onSeeAll={handleSeeAll}
          onVisit={handleVisit}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )}
      {tab === "watch" && (
        <WatchPage onSeeAll={handleSeeAll} onVisit={handleVisit} onFavoriteToggle={handleFavoriteToggle} />
      )}
      {tab === "browse" && (
        <BrowsePage
          filters={filters}
          onFilters={setFilters}
          onVisit={handleVisit}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )}
      {tab === "capture" && !READ_ONLY && <CapturePage />}

      <FavoritesPanel
        open={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        refreshKey={favoritesRefreshKey}
      />
    </div>
  );
}
