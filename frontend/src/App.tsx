import { useEffect, useState } from "react";

import { authStatus, logout, markVisited, randomEntry } from "./api/client";
import type { Filters } from "./components/FilterBar";
import FavoritesPanel from "./components/FavoritesPanel";
import BrowsePage from "./pages/BrowsePage";
import CapturePage from "./pages/CapturePage";
import GuidePage, { BrowseFilters } from "./pages/GuidePage";

type Tab = "find" | "browse" | "capture";

const EMPTY_FILTERS: Filters = { q: "", category: "", tag: "" };
const FILTERS_KEY = "atlas.browseFilters";

function loadFilters(): Filters {
  try {
    const raw = localStorage.getItem(FILTERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        q: String(parsed.q ?? ""),
        category: String(parsed.category ?? ""),
        tag: String(parsed.tag ?? ""),
      };
    }
  } catch {
    // ignore — per-viewer convenience only
  }
  return EMPTY_FILTERS;
}

export default function App() {
  const [tab, setTab] = useState<Tab>("find");
  const [browseFilters, setBrowseFilters] = useState<Filters>(loadFilters);

  useEffect(() => {
    try {
      localStorage.setItem(FILTERS_KEY, JSON.stringify(browseFilters));
    } catch {
      // ignore
    }
  }, [browseFilters]);

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
      markVisited(entry.id).catch(() => {});
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
  const handleSeeAll = (filters: BrowseFilters) => {
    setBrowseFilters(filters);
    setTab("browse");
  };

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
    <div>
      <h1>Atlas</h1>
      <nav>
        {navLink("find", "Find")}
        {navLink("browse", "Browse")}
        {navLink("capture", "Capture")}
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
          onVisit={handleVisit}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )}
      {tab === "browse" && (
        <BrowsePage
          filters={browseFilters}
          onFilters={setBrowseFilters}
          onVisit={handleVisit}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )}
      {tab === "capture" && <CapturePage />}

      <FavoritesPanel
        open={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        refreshKey={favoritesRefreshKey}
      />
    </div>
  );
}
