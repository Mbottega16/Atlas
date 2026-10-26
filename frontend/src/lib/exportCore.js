// Export a list of entries as a browser bookmarks file or as JSON.
// Plain JavaScript, like searchCore.js, so it can be checked in Node.

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Escape text for use inside HTML element content or a quoted attribute. */
export function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/** Entries grouped by category, categories and entries in alphabetical / id order. */
function groupByCategory(entries) {
  const groups = new Map();
  for (const entry of entries) {
    const name = entry.category || "Uncategorized";
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(entry);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, items]) => [name, items.sort((a, b) => a.id - b.id)]);
}

/**
 * Netscape Bookmark File format, the one every major browser imports.
 * Each category becomes a folder; each entry keeps its tags and use case.
 * @param {{id:number, title:string|null, link:string, category:string, tags:string[], use_case:string|null, description:string|null}[]} entries
 * @param {Date} [now]
 * @returns {string}
 */
export function toBookmarkHtml(entries, now = new Date()) {
  const addDate = Math.floor(now.getTime() / 1000);
  const lines = [
    "<!DOCTYPE NETSCAPE-Bookmark-file-1>",
    "<!-- This is an automatically generated file. -->",
    '<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">',
    "<TITLE>Atlas</TITLE>",
    "<H1>Atlas</H1>",
    "<DL><p>",
  ];
  for (const [category, items] of groupByCategory(entries)) {
    lines.push(`    <DT><H3 ADD_DATE="${addDate}">${escapeHtml(category)}</H3>`);
    lines.push("    <DL><p>");
    for (const entry of items) {
      const tags = entry.tags.length ? ` TAGS="${escapeHtml(entry.tags.join(","))}"` : "";
      const title = entry.title || entry.link;
      lines.push(
        `        <DT><A HREF="${escapeHtml(entry.link)}" ADD_DATE="${addDate}"${tags}>${escapeHtml(title)}</A>`
      );
      const note = [entry.use_case, entry.description].filter(Boolean).join(" — ");
      if (note) lines.push(`        <DD>${escapeHtml(note)}`);
    }
    lines.push("    </DL><p>");
  }
  lines.push("</DL><p>");
  return lines.join("\n") + "\n";
}

/**
 * JSON export: the same fields the library API returns, pretty-printed.
 * @param {object[]} entries
 * @returns {string}
 */
export function toJson(entries) {
  const rows = entries.map(({ id, title, link, category, use_case, description, tags }) => ({
    id,
    title,
    link,
    category,
    use_case,
    description,
    tags,
  }));
  return JSON.stringify(rows, null, 2) + "\n";
}

/** Hand a text file to the browser as a download. Browser-only. */
export function downloadText(filename, mime, text) {
  const url = URL.createObjectURL(new Blob([text], { type: mime }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
