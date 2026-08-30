import { FormEvent, useEffect, useState } from "react";

import {
  Entry,
  EntryInput,
  batchImport,
  captureEnabled,
  createEntry,
  exportLibraryUrl,
  fetchCategories,
  researchLinks,
  searchEntries,
} from "../api/client";
import EntryCard from "../components/EntryCard";

const BLANK: EntryInput = {
  link: "",
  title: "",
  category: "",
  description: "",
  use_case: "",
  tags: [],
};

function parseLinks(text: string): string[] {
  return text
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter((s) => /^https?:\/\/|\w+\.\w/.test(s));
}

export default function CapturePage() {
  const [recent, setRecent] = useState<Entry[]>([]);
  const [cats, setCats] = useState<string[]>([]);
  const [liveEnabled, setLiveEnabled] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  const refreshRecent = () =>
    searchEntries({ limit: 20 }).then((res) =>
      setRecent(res.items.filter((e) => e.source === "capture").slice(0, 20))
    );

  useEffect(() => {
    refreshRecent().catch(() => {});
    fetchCategories()
      .then((c) => setCats(c.map((x) => x.name)))
      .catch(() => {});
    captureEnabled()
      .then((r) => setLiveEnabled(r.enabled))
      .catch(() => {});
  }, []);

  const announce = (msg: string) => {
    setFlash(msg);
    setTimeout(() => setFlash(null), 4000);
    refreshRecent().catch(() => {});
  };

  return (
    <div className="capture-page">
      {flash && <p className="capture-flash">{flash}</p>}

      <SingleEntryForm cats={cats} onSaved={announce} />
      <QuickPasteForm cats={cats} onSaved={announce} />
      {liveEnabled ? (
        <LiveResearchForm onSaved={announce} />
      ) : (
        <details className="capture-block">
          <summary>Claude-assisted capture (off)</summary>
          <p className="capture-hint">
            Set <code>ANTHROPIC_API_KEY</code> on the backend to turn on
            paste-a-list-of-URLs research. Until then, use a Claude Code session
            rooted in this repo, or fill entries in above.
          </p>
        </details>
      )}

      <div className="capture-block">
        <h3>Backup</h3>
        <p className="capture-hint">
          <a href={exportLibraryUrl()} target="_blank" rel="noreferrer">
            Download the whole library as JSON
          </a>{" "}
          — keep a copy off-box. Restore with <code>POST /api/import</code>.
        </p>
      </div>

      <h3>Recently captured</h3>
      {recent.length === 0 && <p>Nothing captured yet.</p>}
      {recent.map((e) => (
        <EntryCard key={e.id} entry={e} />
      ))}
    </div>
  );
}

function CategoryInput({
  value,
  onChange,
  cats,
}: {
  value: string;
  onChange: (v: string) => void;
  cats: string[];
}) {
  return (
    <>
      <input
        list="atlas-categories"
        placeholder="category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <datalist id="atlas-categories">
        {cats.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </>
  );
}

function SingleEntryForm({ cats, onSaved }: { cats: string[]; onSaved: (m: string) => void }) {
  const [form, setForm] = useState<EntryInput>(BLANK);
  const [tagText, setTagText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = (patch: Partial<EntryInput>) => setForm((f) => ({ ...f, ...patch }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await createEntry({
        ...form,
        tags: tagText.split(",").map((t) => t.trim()).filter(Boolean),
      });
      setForm(BLANK);
      setTagText("");
      onSaved("Added.");
    } catch (err) {
      setError(err instanceof Error && err.message.includes("409") ? "That link is already in the library." : "Couldn't save — check the link and try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="capture-block" onSubmit={submit}>
      <h3>Add one</h3>
      <input
        type="url"
        placeholder="https://…  (required)"
        value={form.link}
        onChange={(e) => set({ link: e.target.value })}
        required
      />
      <input
        placeholder="title"
        value={form.title ?? ""}
        onChange={(e) => set({ title: e.target.value })}
      />
      <CategoryInput value={form.category} onChange={(v) => set({ category: v })} cats={cats} />
      <input
        placeholder="what you'd use it for"
        value={form.use_case ?? ""}
        onChange={(e) => set({ use_case: e.target.value })}
      />
      <textarea
        placeholder="description"
        value={form.description ?? ""}
        onChange={(e) => set({ description: e.target.value })}
      />
      <input
        placeholder="tags, comma, separated"
        value={tagText}
        onChange={(e) => setTagText(e.target.value)}
      />
      <button type="submit" disabled={busy || !form.link || !form.category}>
        {busy ? "Saving…" : "Add"}
      </button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </form>
  );
}

function QuickPasteForm({ cats, onSaved }: { cats: string[]; onSaved: (m: string) => void }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("misc");
  const [busy, setBusy] = useState(false);
  const links = parseLinks(text);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const items: EntryInput[] = links.map((link) => ({ link, category, tags: [] }));
      const res = await batchImport(items);
      onSaved(`${res.created.length} added, ${res.updated.length} already known.`);
      setText("");
    } catch {
      onSaved("Bulk add failed — is the backend running?");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="capture-block" onSubmit={submit}>
      <h3>Paste a list</h3>
      <p className="capture-hint">
        One URL per line. Saved with just the link + a category — enrich them
        later from Browse, or in a Claude Code session.
      </p>
      <textarea
        placeholder={"https://one.com\nhttps://two.com"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
      />
      <div className="capture-row">
        <CategoryInput value={category} onChange={setCategory} cats={cats} />
        <button type="submit" disabled={busy || links.length === 0}>
          {busy ? "Adding…" : `Add ${links.length || ""} link${links.length === 1 ? "" : "s"}`}
        </button>
      </div>
    </form>
  );
}

function LiveResearchForm({ onSaved }: { onSaved: (m: string) => void }) {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState("");
  const [drafts, setDrafts] = useState<EntryInput[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const links = parseLinks(text);

  const research = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await researchLinks(links, notes || undefined);
      setDrafts(res.drafts);
    } catch {
      setError("Research call failed.");
    } finally {
      setBusy(false);
    }
  };

  const commit = async () => {
    if (!drafts) return;
    setBusy(true);
    try {
      const res = await batchImport(drafts);
      onSaved(`${res.created.length} added, ${res.updated.length} updated.`);
      setDrafts(null);
      setText("");
      setNotes("");
    } catch {
      setError("Save failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="capture-block" onSubmit={research}>
      <h3>Claude-assisted capture</h3>
      <textarea
        placeholder={"Paste URLs — Claude researches and tags each one"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
      />
      <input
        placeholder="optional: extra context for the research"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit" disabled={busy || links.length === 0}>
        {busy ? "Researching…" : `Research ${links.length || ""} link${links.length === 1 ? "" : "s"}`}
      </button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {drafts && (
        <div className="capture-drafts">
          <p>{drafts.length} draft{drafts.length === 1 ? "" : "s"} — review, then save:</p>
          {drafts.map((d, i) => (
            <div key={i} className="capture-draft">
              <strong>{d.title || d.link}</strong>
              <span className="meta"> {d.category}</span>
              {d.description && <p>{d.description}</p>}
              <div className="tag-row">
                {d.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <button type="button" onClick={commit} disabled={busy}>
            {busy ? "Saving…" : `Save all ${drafts.length}`}
          </button>
        </div>
      )}
    </form>
  );
}
