import { FormEvent, useState } from "react";

import {
  Access,
  Cost,
  Entry,
  READ_ONLY,
  deleteEntry,
  isFavorite,
  isVisited,
  markVisited,
  setFavorite,
  updateEntry,
} from "../api/client";
import { ACCESS_LABEL, COST_LABEL, faviconUrl, formatDay } from "../lib/display";

/** Cost, access and the check date — the short form of a profile. */
export function ProfileChips({ entry }: { entry: Entry }) {
  if (!entry.last_verified) return null;
  return (
    <div className="profile-chips">
      {entry.cost && (
        <span className="profile-chip" title={entry.price_note ?? undefined}>
          {COST_LABEL[entry.cost] ?? entry.cost}
        </span>
      )}
      {entry.access && <span className="profile-chip">{ACCESS_LABEL[entry.access] ?? entry.access}</span>}
      <span className="profile-checked" title={entry.verification ?? undefined}>
        ✓ Checked {formatDay(entry.last_verified)}
      </span>
    </div>
  );
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
  const name = entry.title || entry.link;
  const shot = entry.screenshot && view !== "list" ? entry.screenshot : null;

  return (
    <div className={`entry-card view-${view}${visited ? " visited" : ""}${shot ? " has-shot" : ""}`}>
      {shot && (
        <img
          className="entry-card-shot"
          src={`/${shot}`}
          alt={`The ${name} home page`}
          title={`The official page as it looked when checked${
            entry.last_verified ? ` on ${formatDay(entry.last_verified)}` : ""
          }`}
          loading="lazy"
        />
      )}
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
        {entry.warning && (
          <span className="flag-badge warning-badge" title={entry.warning}>
            ⚠ trust warning
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
        {entry.warning && <p className="entry-warning">{entry.warning}</p>}
        {entry.best_for && (
          <p className="entry-profile-line">
            <strong>Best for</strong> {entry.best_for}
          </p>
        )}
        {entry.limits && (
          <p className="entry-profile-line">
            <strong>Limit</strong> {entry.limits}
          </p>
        )}
        <ProfileChips entry={entry} />
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

// The profile fields the edit form shows, in order, with their placeholders.
const PROFILE_INPUTS = [
  ["cost", "cost"],
  ["access", "access"],
  ["price_note", "price note — what the money buys"],
  ["best_for", "best for — when to pick this one"],
  ["limits", "limit — what it can't tell you"],
  ["warning", "trust warning (rare)"],
  ["last_verified", "checked on"],
  ["verification", "what you checked"],
  ["screenshot", "screenshot — shots/host.jpg"],
] as const;
type ProfileInput = (typeof PROFILE_INPUTS)[number][0];

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
  const [profile, setProfile] = useState<Record<ProfileInput, string>>(() =>
    Object.fromEntries(PROFILE_INPUTS.map(([f]) => [f, entry[f] ?? ""])) as Record<ProfileInput, string>
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    // A blank profile field is sent as null, so clearing it really clears it.
    const value = (f: ProfileInput) => profile[f].trim() || null;
    try {
      await updateEntry(entry.id, {
        link,
        title,
        category,
        use_case: useCase,
        description,
        tags: tagText.split(",").map((t) => t.trim()).filter(Boolean),
        cost: value("cost") as Cost | null,
        access: value("access") as Access | null,
        price_note: value("price_note"),
        best_for: value("best_for"),
        limits: value("limits"),
        warning: value("warning"),
        last_verified: value("last_verified"),
        verification: value("verification"),
        screenshot: value("screenshot"),
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
      <details className="entry-card-profile-edit" open={!!entry.last_verified}>
        <summary>Profile (what you checked on the tool's own pages)</summary>
        <select value={profile.cost} onChange={(e) => setProfile({ ...profile, cost: e.target.value })} aria-label="cost">
          <option value="">cost —</option>
          {(Object.keys(COST_LABEL) as Cost[]).map((c) => (
            <option key={c} value={c}>
              {COST_LABEL[c]}
            </option>
          ))}
        </select>
        <select value={profile.access} onChange={(e) => setProfile({ ...profile, access: e.target.value })} aria-label="access">
          <option value="">access —</option>
          {(Object.keys(ACCESS_LABEL) as Access[]).map((a) => (
            <option key={a} value={a}>
              {ACCESS_LABEL[a]}
            </option>
          ))}
        </select>
        {PROFILE_INPUTS.filter(([f]) => f !== "cost" && f !== "access").map(([f, placeholder]) => (
          <input
            key={f}
            type={f === "last_verified" ? "date" : "text"}
            value={profile[f]}
            onChange={(e) => setProfile({ ...profile, [f]: e.target.value })}
            placeholder={placeholder}
            aria-label={placeholder}
          />
        ))}
      </details>
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
