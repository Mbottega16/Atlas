import { useState } from "react";

import { Entry, markVisited, setFavorite } from "../api/client";

function faviconUrl(link: string): string | null {
  try {
    const { hostname } = new URL(link);
    return `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
  } catch {
    return null;
  }
}

export default function EntryCard({
  entry,
  view = "grid",
  onVisit,
  onFavoriteToggle,
}: {
  entry: Entry;
  view?: "grid" | "list" | "large";
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

  const favicon = faviconUrl(entry.link);

  return (
    <div className={`entry-card view-${view}${visited ? " visited" : ""}`}>
      <button
        className={`favorite-btn${favorite ? " active" : ""}`}
        onClick={handleFavoriteClick}
        title={favorite ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={favorite}
      >
        {favorite ? "★" : "☆"}
      </button>
      <div className="entry-card-logo">
        {favicon ? (
          <img src={favicon} alt="" loading="lazy" />
        ) : (
          <span className="entry-card-logo-fallback">{(entry.title || entry.link)[0]?.toUpperCase()}</span>
        )}
      </div>
      <div className="entry-card-body">
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
    </div>
  );
}
