import { useEffect, useState } from "react";

import {
  Collections,
  Comparison,
  Entry,
  Source,
  Stack,
  entriesByLink,
  fetchCollections,
  markVisited,
} from "../api/client";
import EntryCard from "../components/EntryCard";
import { EMPTY_FILTERS, Filters } from "../components/FilterBar";
import { ACCESS_LABEL, COST_LABEL, faviconUrl, formatDay } from "../lib/display";
import { ESSENTIAL_TAG } from "../lib/searchCore";

interface Props {
  /** The open stack or comparison; "" shows the list of all of them. */
  openId: string;
  onOpen: (id: string) => void;
  onSeeAll: (filters: Filters) => void;
  onVisit: () => void;
  onFavoriteToggle: () => void;
}

export default function CollectionsPage({ openId, onOpen, onSeeAll, onVisit, onFavoriteToggle }: Props) {
  const [data, setData] = useState<Collections | null>(null);
  const [byLink, setByLink] = useState<Map<string, Entry>>(new Map());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchCollections(), entriesByLink()])
      .then(([collections, entries]) => {
        setData(collections);
        setByLink(entries);
      })
      .catch(() => setError("Couldn't load the library — try reloading the page."));
  }, []);

  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!data) return <p>Loading…</p>;

  const cardProps = {
    onVisit,
    onFavoriteToggle,
    onTagClick: (tag: string) => onSeeAll({ ...EMPTY_FILTERS, tag }),
    onCategoryClick: (category: string) => onSeeAll({ ...EMPTY_FILTERS, category }),
  };
  const stack = data.stacks.find((s) => s.id === openId);
  if (stack) return <StackView stack={stack} byLink={byLink} onBack={() => onOpen("")} cardProps={cardProps} />;
  const comparison = data.comparisons.find((c) => c.id === openId);
  if (comparison) {
    return <ComparisonView comparison={comparison} byLink={byLink} onBack={() => onOpen("")} onVisit={onVisit} />;
  }

  const icons = (links: string[]) => (
    <span className="collection-icons" aria-hidden="true">
      {links.map((link) => {
        const icon = faviconUrl(link);
        return icon ? <img key={link} src={icon} alt="" loading="lazy" /> : null;
      })}
    </span>
  );

  return (
    <div className="collections">
      {openId && <p className="filter-hint">That collection isn't here any more — here are the current ones.</p>}
      <p className="collections-lead">
        Ready-made answers to common jobs: tools that work together in order, and similar tools side by side.
      </p>

      <h2 className="collections-heading">
        Stacks <span>tools that work together, in order</span>
      </h2>
      <div className="collection-cards">
        {data.stacks.map((s) => (
          <button key={s.id} className="collection-card" onClick={() => onOpen(s.id)}>
            <span className="collection-kind">Stack · {s.steps.length} tools</span>
            <strong>{s.title}</strong>
            <span className="collection-summary">{s.summary}</span>
            {icons(s.steps.map((step) => step.link))}
          </button>
        ))}
      </div>

      <h2 className="collections-heading">
        Comparisons <span>which one to open first</span>
      </h2>
      <div className="collection-cards">
        {data.comparisons.map((c) => (
          <button key={c.id} className="collection-card" onClick={() => onOpen(c.id)}>
            <span className="collection-kind">Comparison · {c.members.length} tools</span>
            <strong>{c.title}</strong>
            <span className="collection-summary">{c.question}</span>
            {icons(c.members.map((m) => m.link))}
          </button>
        ))}
      </div>
    </div>
  );
}

function StackView({
  stack,
  byLink,
  onBack,
  cardProps,
}: {
  stack: Stack;
  byLink: Map<string, Entry>;
  onBack: () => void;
  cardProps: Omit<React.ComponentProps<typeof EntryCard>, "entry">;
}) {
  return (
    <article className="collection-detail">
      <button className="guide-back" onClick={onBack}>
        ← All collections
      </button>
      <p className="collection-kind">Stack · checked {formatDay(stack.last_verified)}</p>
      <h2>{stack.title}</h2>
      <p className="collection-summary">{stack.summary}</p>
      <ol className="stack-steps">
        {stack.steps.map((step, i) => {
          const entry = byLink.get(step.link);
          return (
            <li key={step.link} className="stack-step">
              <span className="stack-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <div className="stack-step-body">
                <p className="stack-step-do">{step.do}</p>
                {entry && <EntryCard entry={entry} view="list" {...cardProps} />}
              </div>
            </li>
          );
        })}
      </ol>
      <Notes notes={stack.notes} />
      <SourceLine source={stack.source} />
    </article>
  );
}

function ComparisonView({
  comparison,
  byLink,
  onBack,
  onVisit,
}: {
  comparison: Comparison;
  byLink: Map<string, Entry>;
  onBack: () => void;
  onVisit: () => void;
}) {
  const members = comparison.members
    .map((m) => ({ ...m, entry: byLink.get(m.link) }))
    .filter((m): m is typeof m & { entry: Entry } => !!m.entry);
  const nameOf = (link: string) => byLink.get(link)?.title || link;
  const open = (link: string) => {
    markVisited(link);
    onVisit();
  };

  return (
    <article className="collection-detail">
      <button className="guide-back" onClick={onBack}>
        ← All collections
      </button>
      <p className="collection-kind">Comparison · checked {formatDay(comparison.last_verified)}</p>
      <h2>{comparison.title}</h2>
      <p className="collection-summary">{comparison.question}</p>
      <p className="collection-framing">
        <strong>Read first.</strong> {comparison.framing}
      </p>

      <div className="compare-grid" style={{ "--cols": members.length } as React.CSSProperties}>
        {members.map(({ link, role, entry }) => {
          const icon = faviconUrl(link);
          return (
            <section key={link} className="compare-col" aria-label={entry.title ?? link}>
              {entry.screenshot ? (
                <img
                  className="compare-shot"
                  src={`/${entry.screenshot}`}
                  alt={`The ${entry.title} home page`}
                  loading="lazy"
                />
              ) : (
                <div className="compare-shot compare-shot-none">
                  {icon && <img src={icon} alt="" loading="lazy" />}
                  <span>No screenshot</span>
                </div>
              )}
              <h3>
                <a href={link} target="_blank" rel="noreferrer" onClick={() => open(link)}>
                  {entry.title}
                </a>
                {entry.tags.includes(ESSENTIAL_TAG) && <span className="compare-essential">★ first choice</span>}
              </h3>
              <p className="compare-role">{role}</p>
              <div className="compare-row">
                <span className="compare-label">Cost</span>
                <span>
                  {entry.cost ? COST_LABEL[entry.cost] : "—"}
                  {entry.price_note && <small>{entry.price_note}</small>}
                </span>
              </div>
              <div className="compare-row">
                <span className="compare-label">Access</span>
                <span>{entry.access ? ACCESS_LABEL[entry.access] : "—"}</span>
              </div>
              <div className="compare-row">
                <span className="compare-label">Best for</span>
                <span>{entry.best_for ?? "—"}</span>
              </div>
              <div className="compare-row">
                <span className="compare-label">Limit</span>
                <span>{entry.limits ?? "—"}</span>
              </div>
              <div className="compare-row">
                <span className="compare-label">Checked</span>
                <span>
                  {entry.last_verified ? formatDay(entry.last_verified) : "—"}
                  {entry.verification && <small>{entry.verification}</small>}
                </span>
              </div>
            </section>
          );
        })}
      </div>

      {comparison.pick.length > 0 && (
        <>
          <h3 className="collection-subhead">Which one to open first</h3>
          <ul className="compare-pick">
            {comparison.pick.map((p) => (
              <li key={p.link}>
                Open <strong>{nameOf(p.link)}</strong> when {p.when}
              </li>
            ))}
          </ul>
        </>
      )}
      {comparison.steps && comparison.steps.length > 0 && (
        <>
          <h3 className="collection-subhead">A careful order to use them in</h3>
          <ol className="compare-steps">
            {comparison.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </>
      )}
      <Notes notes={comparison.notes} />
      <SourceLine source={comparison.source} />
    </article>
  );
}

function Notes({ notes }: { notes?: string[] }) {
  if (!notes?.length) return null;
  return (
    <ul className="collection-notes">
      {notes.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}

function SourceLine({ source }: { source?: Source }) {
  if (!source) return null;
  return (
    <p className="collection-source">
      <a href={source.link} target="_blank" rel="noreferrer">
        {source.label}
      </a>
    </p>
  );
}
