import { useState } from "react";

import { markVisited, randomEntry } from "./api/client";
import FavoritesPanel from "./components/FavoritesPanel";
import BrowsePage from "./pages/BrowsePage";
import CapturePage from "./pages/CapturePage";

type Tab = "browse" | "capture";

export default function App() {
  const [tab, setTab] = useState<Tab>("browse");
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

  return (
    <div>
      <h1>Atlas</h1>
      <nav>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setTab("browse");
          }}
          style={{ opacity: tab === "browse" ? 1 : 0.5 }}
        >
          Browse
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setTab("capture");
          }}
          style={{ opacity: tab === "capture" ? 1 : 0.5 }}
        >
          Capture
        </a>
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
      </nav>
      {tab === "browse" ? (
        <BrowsePage onVisit={handleVisit} onFavoriteToggle={handleFavoriteToggle} />
      ) : (
        <CapturePage />
      )}
      <FavoritesPanel
        open={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        refreshKey={favoritesRefreshKey}
      />
    </div>
  );
}
