import { FormEvent, useState } from "react";

import {
  Entry,
  READ_ONLY,
  deleteEntry,
  isFavorite,
  isVisited,
  markVisited,
  setFavorite,
  updateEntry,
} from "../api/client";

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
  onChanged,
  onTagClick,
  onCategoryClick,
}: {
  entry: Entry;
  view?: "grid" | "list" | "large";
  onVisit?: () => void;
  onFavoriteToggle?: () => void;
  onTagClick?: (tag: string) => void;
  onCategoryClick?: (category: string) => void;
  // Passing this in turns on the Edit / Delete controls (never on the read-only
  // public site) and is called after either succeeds, so the parent can refresh.
  onChanged?: () => void;
}) {
  const [visited, setVisited] = useState(() => isVisited(entry.link));
  const [favorite, setFavoriteState] = useState(() => isFavorite(entry.link));
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleOpen = () => {
    markVisited(entry.link);
    setVisited(true);
    onVisit?.();
  };

  const handleFavoriteClick = () => {
    const next = !favorite;
    setFavorite(entry.link, next);
    setFavoriteState(next);
    onFavoriteToggle?.();
  };

  const handleDelete = async () => {
    if (busy || !window.confirm(`Delete "${entry.title || entry.link}"?`)) return;
    setBusy(true);
    try {
      await deleteEntry(entry.id);
      onChanged?.();
    } catch {
      setBusy(false);
    }
  };

  if (editing) {
    return (
      <EditForm
        entry={entry}
        onCancel={() => setEditing(false)}
        onSaved={() => {
          setEditing(false);
          onChanged?.();
        }}
      />
    );
  }

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
        {entry.flag && (
          <span
            className="flag-badge"
            title={`Failed the weekly link check twice in a row (last: ${entry.flag.checked}${
              entry.flag.detail ? `, ${entry.flag.detail}` : ""
            })`}
          >
            ⚠ may be dead
          </span>
        )}
        <h3>
          <a href={entry.link} target="_blank" rel="noreferrer" onClick={handleOpen}>
            {entry.title || entry.link}
          </a>
        </h3>
        <div className="meta">
          {onCategoryClick ? (
            <button
              type="button"
              className="meta-category"
              title={`Show everything in ${entry.category}`}
              onClick={() => onCategoryClick(entry.category)}
            >
              {entry.category}
            </button>
          ) : (
            entry.category
          )}
          {entry.use_case ? ` · ${entry.use_case}` : ""}
        </div>
        {entry.description && <p>{entry.description}</p>}
        <div className="tag-row">
          {entry.tags.map((t) =>
            onTagClick ? (
              <button
                key={t}
                type="button"
                className="tag-pill"
                title={`Show everything tagged ${t}`}
                onClick={() => onTagClick(t)}
              >
                {t}
              </button>
            ) : (
              <span key={t} className="tag-pill">
                {t}
              </span>
            )
          )}
        </div>
        {onChanged && !READ_ONLY && (
          <div className="entry-card-admin">
            <button type="button" onClick={() => setEditing(true)} disabled={busy}>
              Edit
            </button>
            <button type="button" onClick={handleDelete} disabled={busy}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function EditForm({
  entry,
  onCancel,
  onSaved,
}: {
  entry: Entry;
  onCancel: () => void;
  onSaved: () => void;
}) {
  const [link, setLink] = useState(entry.link);
  const [title, setTitle] = useState(entry.title ?? "");
  const [category, setCategory] = useState(entry.category);
  const [useCase, setUseCase] = useState(entry.use_case ?? "");
  const [description, setDescription] = useState(entry.description ?? "");
  const [tagText, setTagText] = useState(entry.tags.join(", "));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await updateEntry(entry.id, {
        link,
        title,
        category,
        use_case: useCase,
        description,
        tags: tagText.split(",").map((t) => t.trim()).filter(Boolean),
      });
      onSaved();
    } catch {
      setError("Couldn't save.");
      setBusy(false);
    }
  };

  return (
    <form className="entry-card entry-card-edit" onSubmit={submit}>
      <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="link" required />
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category" required />
      <input value={useCase} onChange={(e) => setUseCase(e.target.value)} placeholder="use case" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" />
      <input value={tagText} onChange={(e) => setTagText(e.target.value)} placeholder="tags, comma, separated" />
      <div className="entry-card-admin">
        <button type="submit" disabled={busy}>
          {busy ? "Saving…" : "Save"}
        </button>
        <button type="button" onClick={onCancel} disabled={busy}>
          Cancel
        </button>
      </div>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </form>
  );
}
