import { useEffect, useState } from "react";

import { Entry, searchEntries } from "../api/client";

export default function FavoritesPanel({
  open,
  onClose,
  refreshKey,
}: {
  open: boolean;
  onClose: () => void;
  refreshKey: number;
}) {
  const [favorites, setFavorites] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    searchEntries({ favorite: true })
      .then((res) => setFavorites(res.items))
      .finally(() => setLoading(false));
  }, [open, refreshKey]);

  return (
    <div className={`favorites-panel${open ? " open" : ""}`}>
      <div className="favorites-panel-header">
        <h2>★ Favorites</h2>
        <button onClick={onClose} aria-label="Close favorites panel">
          ✕
        </button>
      </div>
      {loading && <p>Loading…</p>}
      {!loading && favorites.length === 0 && (
        <p>No favorites yet — click the star on any entry to save it here.</p>
      )}
      {favorites.map((e) => (
        <a
          key={e.id}
          href={e.link}
          target="_blank"
          rel="noreferrer"
          className="favorites-panel-item"
        >
          <strong>{e.title || e.link}</strong>
          <span>{e.category}</span>
        </a>
      ))}
    </div>
  );
}
