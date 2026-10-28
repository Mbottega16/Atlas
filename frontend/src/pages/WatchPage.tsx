import { useEffect, useMemo, useState } from "react";

import { Entry, LinkCheck, allEntries, fetchLinkCheck } from "../api/client";
import EntryCard from "../components/EntryCard";
import { EMPTY_FILTERS, Filters } from "../components/FilterBar";
import { RECHECK_DAYS, daysSince, formatDay, hasProfile } from "../lib/display";

// Everything here is worked out in the browser from what the site already
// loads (atlas.json and the link-check summary), so it is as current as the
// last publish and needs no build step of its own.

const RECENT_DAYS = 28;

const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);

/** The Monday of the week a seed date falls in (the link check runs Mondays). */
function weekOf(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function WatchPage({
  onSeeAll,
  onVisit,
  onFavoriteToggle,
}: {
  onSeeAll: (filters: Filters) => void;
  onVisit: () => void;
  onFavoriteToggle: () => void;
}) {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [linkCheck, setLinkCheck] = useState<LinkCheck>({ checked: null, links: 0 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([allEntries(), fetchLinkCheck()])
      .then(([all, check]) => {
        setEntries(all);
        setLinkCheck(check);
      })
      .catch(() => setError("Couldn't load the library — try reloading the page."));
  }, []);

  const watch = useMemo(() => {
    if (!entries) return null;
    const recent = entries
      .filter((e) => e.added && daysSince(e.added) <= RECENT_DAYS)
      .sort((a, b) => (b.added ?? "").localeCompare(a.added ?? "") || b.id - a.id);
    const weeks = new Map<string, Entry[]>();
    for (const e of recent) {
      const week = weekOf(e.added ?? "");
      weeks.set(week, [...(weeks.get(week) ?? []), e]);
    }
    const profiled = entries
      .filter(hasProfile)
      .sort((a, b) => (a.last_verified ?? "").localeCompare(b.last_verified ?? ""));
    const checked = linkCheck.checked;
    return {
      warnings: entries.filter((e) => e.warning),
      flagged: entries.filter((e) => e.flag),
      notYetChecked: checked ? entries.filter((e) => e.added && e.added > checked).length : 0,
      recent,
      weeks: [...weeks.entries()],
      profiled,
      due: profiled.filter((e) => daysSince(e.last_verified ?? "") > RECHECK_DAYS),
    };
  }, [entries, linkCheck]);

  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!watch) return <p>Loading…</p>;

  const cardProps = {
    onVisit,
    onFavoriteToggle,
    onTagClick: (tag: string) => onSeeAll({ ...EMPTY_FILTERS, tag }),
    onCategoryClick: (category: string) => onSeeAll({ ...EMPTY_FILTERS, category }),
  };
  const list = (items: Entry[]) => (
    <div className="entries-grid view-list">
      {items.map((e) => (
        <EntryCard key={e.id} entry={e} view="list" {...cardProps} />
      ))}
    </div>
  );
  const { warnings, flagged, notYetChecked, recent, weeks, profiled, due } = watch;

  return (
    <div className="watch">
      <p className="collections-lead">
        What changed in the library and what needs a look, worked out from the library itself every time the
        site is published.
      </p>
      <ul className="watch-summary">
        <li>
          <strong>{recent.length}</strong> added in the last 4 weeks
        </li>
        <li>
          <strong>{flagged.length}</strong> {plural(flagged.length, "link")} failing
        </li>
        <li>
          <strong>{warnings.length}</strong> trust {plural(warnings.length, "warning")}
        </li>
        <li>
          <strong>{due.length}</strong> {plural(due.length, "profile")} due for a re-check
        </li>
      </ul>

      <section className="watch-section">
        <h2>Trust warnings</h2>
        {warnings.length === 0 ? (
          <p className="watch-note">No tool in the library has a trust warning.</p>
        ) : (
          <>
            <p className="watch-note">
              Kept in the library with a warning, so you know before you rely on {plural(warnings.length, "it", "them")}.
            </p>
            <div className="entries-grid view-grid">
              {warnings.map((e) => (
                <EntryCard key={e.id} entry={e} view="grid" {...cardProps} />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="watch-section">
        <h2>Link health</h2>
        <p className="watch-note">
          {linkCheck.checked ? (
            <>
              The weekly link check last ran on {formatDay(linkCheck.checked)} and covered{" "}
              {linkCheck.links.toLocaleString("en-US")} links.{" "}
              {flagged.length === 0
                ? "None has failed twice in a row."
                : `${flagged.length} failed twice in a row and carry a "may be dead" badge.`}
            </>
          ) : (
            "The weekly link check hasn't run yet."
          )}
          {notYetChecked > 0 &&
            ` ${notYetChecked} ${plural(notYetChecked, "entry", "entries")} added since then will be checked on the next Monday run.`}
        </p>
        {flagged.length > 0 && list(flagged)}
      </section>

      <section className="watch-section">
        <h2>Added in the last 4 weeks</h2>
        {weeks.length === 0 ? (
          <p className="watch-note">Nothing new in the last 4 weeks.</p>
        ) : (
          weeks.map(([week, items], i) => (
            <details key={week} className="watch-week" open={i === 0}>
              <summary>
                Week of {formatDay(week)} <span>{items.length} added</span>
              </summary>
              {list(items)}
            </details>
          ))
        )}
      </section>

      <section className="watch-section">
        <h2>Checked profiles</h2>
        <p className="watch-note">
          {profiled.length} {plural(profiled.length, "tool has a profile", "tools have a profile")}: cost, access
          and limits checked on the tool's own pages. A profile older than six months is due for a re-check.
          Oldest check first.
        </p>
        {due.length > 0 && (
          <p className="watch-due">
            Due for a re-check: {due.map((e) => e.title || e.link).join(", ")}
          </p>
        )}
        {list(profiled)}
      </section>
    </div>
  );
}
