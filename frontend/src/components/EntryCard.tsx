import { useState } from "react";

import { Entry, markVisited, setFavorite } from "../api/client";

export default function EntryCard({
  entry,
  onVisit,
  onFavoriteToggle,
}: {
  entry: Entry;
  onVisit?: () => void;
  onFavoriteToggle?: () => void;
}) {
  const [visited, setVisited] = useState(!!entry.visited_at);
  const [favorite, setFavoriteState] = useState(entry.is_favorite);
  const [busy, setBusy] = useState(false);

  const handleOpen = () => {
    // Fire-and-forget — don't block the new tab on the API call.
    markVisited(entry.id).catch(() => {});
    setVisited(true);
    onVisit?.();
  };

  const handleFavoriteClick = async () => {
    if (busy) return;
    setBusy(true);
    const next = !favorite;
    try {
      await setFavorite(entry.id, next);
      setFavoriteState(next);
      onFavoriteToggle?.();
    } catch {
      // leave state as-is on failure
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={`entry-card${visited ? " visited" : ""}`}>
      <button
        className={`favorite-btn${favorite ? " active" : ""}`}
        onClick={handleFavoriteClick}
        title={favorite ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={favorite}
      >
        {favorite ? "★" : "☆"}
      </button>
      {visited && (
        <span className="visited-badge" title="You've opened this before">
          ✓ visited
        </span>
      )}
      <h3>
        <a href={entry.link} target="_blank" rel="noreferrer" onClick={handleOpen}>
          {entry.title || entry.link}
        </a>
      </h3>
      <div className="meta">
        {entry.category}
        {entry.use_case ? ` · ${entry.use_case}` : ""}
      </div>
      {entry.description && <p>{entry.description}</p>}
      <div className="tag-row">
        {entry.tags.map((t) => (
          <span key={t} className="tag-pill">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
