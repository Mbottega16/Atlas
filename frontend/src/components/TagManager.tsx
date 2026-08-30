import { useEffect, useMemo, useState } from "react";

import { TagCount, fetchTags, mergeTags, renameTag } from "../api/client";

/** Lives on the Capture page. The library has ~900 tags, so this is
 * search-first: nothing lists until you filter, then you can rename one or
 * tick several and merge them. */
export default function TagManager({ onAfterChange }: { onAfterChange?: () => void }) {
  const [tags, setTags] = useState<TagCount[]>([]);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [mergeInto, setMergeInto] = useState("");
  const [renaming, setRenaming] = useState<string | null>(null);
  const [renameTo, setRenameTo] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const load = () => fetchTags().then(setTags).catch(() => {});
  useEffect(() => {
    load();
  }, []);

  const shown = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return [];
    return tags.filter((t) => t.name.includes(f)).slice(0, 60);
  }, [tags, filter]);

  const announce = async (text: string) => {
    setMsg(text);
    setTimeout(() => setMsg(null), 4000);
    setSelected(new Set());
    setRenaming(null);
    await load();
    onAfterChange?.();
  };

  const doRename = async (name: string) => {
    if (!renameTo.trim() || busy) return;
    setBusy(true);
    try {
      const r = await renameTag(name, renameTo);
      await announce(
        r.merged
          ? `Merged "${name}" into "${r.tag}" (${r.entries_touched} entries).`
          : `Renamed "${name}" → "${r.tag}".`
      );
    } catch {
      setMsg("Rename failed.");
    } finally {
      setBusy(false);
      setRenameTo("");
    }
  };

  const doMerge = async () => {
    if (!mergeInto.trim() || selected.size === 0 || busy) return;
    setBusy(true);
    try {
      const r = await mergeTags([...selected], mergeInto);
      await announce(`Merged ${selected.size} into "${r.tag}" (${r.entries_touched} entries).`);
      setMergeInto("");
    } catch {
      setMsg("Merge failed.");
    } finally {
      setBusy(false);
    }
  };

  const toggle = (name: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <details className="capture-block">
      <summary>Manage tags ({tags.length})</summary>
      {msg && <p className="capture-flash">{msg}</p>}
      <input
        placeholder="filter tags…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filter && shown.length === 0 && <p className="capture-hint">No tags match.</p>}
      {shown.length > 0 && (
        <table className="tag-table">
          <tbody>
            {shown.map((t) => (
              <tr key={t.name}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.has(t.name)}
                    onChange={() => toggle(t.name)}
                  />
                </td>
                <td>{t.name}</td>
                <td className="tag-table-count">{t.count}</td>
                <td>
                  {renaming === t.name ? (
                    <span className="capture-row">
                      <input
                        autoFocus
                        value={renameTo}
                        onChange={(e) => setRenameTo(e.target.value)}
                        placeholder="new name"
                      />
                      <button type="button" onClick={() => doRename(t.name)} disabled={busy}>
                        Save
                      </button>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setRenaming(t.name);
                        setRenameTo(t.name);
                      }}
                    >
                      Rename
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selected.size > 0 && (
        <div className="capture-row">
          <span className="capture-hint">{selected.size} selected →</span>
          <input
            placeholder="merge into…"
            value={mergeInto}
            onChange={(e) => setMergeInto(e.target.value)}
          />
          <button type="button" onClick={doMerge} disabled={busy || !mergeInto.trim()}>
            Merge
          </button>
        </div>
      )}
    </details>
  );
}
