// Tag suggestions for the Browse tag box. Plain JavaScript so it can be checked in Node.

/**
 * Tags to suggest for what has been typed so far. Names that start with the
 * text come first, then names that contain it. Within each group the caller's
 * order is kept (the library lists tags by how many entries use them). An empty
 * draft suggests the top tags.
 * @param {{name: string, count: number}[]} options
 * @param {string} draft
 * @param {number} [limit]
 */
export function matchTags(options, draft, limit = 8) {
  const q = draft.trim().toLowerCase();
  if (!q) return options.slice(0, limit);
  const startsWith = [];
  const contains = [];
  for (const option of options) {
    const name = option.name.toLowerCase();
    if (name.startsWith(q)) startsWith.push(option);
    else if (name.includes(q)) contains.push(option);
  }
  return [...startsWith, ...contains].slice(0, limit);
}

/**
 * Highlighted row after an arrow key. -1 means no row is highlighted yet: the
 * first Down press highlights the first row, the first Up press the last. After
 * that it wraps at both ends. Other keys leave the row where it is.
 * @param {number} current
 * @param {string} key
 * @param {number} length
 */
export function stepIndex(current, key, length) {
  if (length === 0) return -1;
  if (key === "ArrowDown") return current < 0 ? 0 : (current + 1) % length;
  if (key === "ArrowUp") return current < 0 ? length - 1 : (current - 1 + length) % length;
  return current;
}
