import type { Entry } from "../api/client";

export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="entry-card">
      <h3>
        <a href={entry.link} target="_blank" rel="noreferrer">
          {entry.title || entry.link}
        </a>
      </h3>
      <div className="meta">
        {entry.category}
        {entry.use_case ? ` · ${entry.use_case}` : ""}
      </div>
      {entry.description && <p>{entry.description}</p>}
      {entry.tags.map((t) => (
        <span key={t} className="tag-pill">
          {t}
        </span>
      ))}
    </div>
  );
}
