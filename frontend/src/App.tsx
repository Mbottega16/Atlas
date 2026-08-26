import { useState } from "react";

import FavoritesPanel from "./components/FavoritesPanel";
import BrowsePage from "./pages/BrowsePage";
import CapturePage from "./pages/CapturePage";

type Tab = "browse" | "capture";

export default function App() {
  const [tab, setTab] = useState<Tab>("browse");
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [favoritesRefreshKey, setFavoritesRefreshKey] = useState(0);
  const [hasAutoOpenedFavorites, setHasAutoOpenedFavorites] = useState(false);

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
            setFavoritesOpen((v) => !v);
          }}
          style={{ marginLeft: "auto", opacity: favoritesOpen ? 1 : 0.5 }}
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
