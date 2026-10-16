// Atlas search — plain JavaScript on purpose, so the same code runs in the
// browser (the site) and in Node (the vault's atlas-search script).
//
// Words are matched in any order, in any field, after a light stemming pass
// ("remover", "removes" and "remove" all become "remov"). Every query word must
// match somewhere; if nothing matches every word, the closest partial matches
// come back instead, flagged `relaxed`. A word with no exact or prefix hit still
// matches a field word within a Levenshtein distance of 2 (a typo), but ranks
// below an exact hit on the same query.

const STOPWORDS = new Set(
  (
    "a an the and or but for to of in on at by with from into about as is are be " +
    "i me my we our you your it its this that these those something some any " +
    "need needs want wants looking find help way ways how what which where who " +
    "can could should would will do does get make use using good best great " +
    "tool tools site sites website websites app apps online thing things stuff"
  ).split(" ")
);

export const ESSENTIAL_TAG = "essential";

const SUFFIXES = ["ings", "ing", "ions", "ion", "ers", "er", "ors", "or", "ed", "ly", "ment"];

/** Light suffix stripper. Not a real Porter stemmer — it only has to map a
 *  word and its common variants to the same key, the same way both sides. */
export function stem(word) {
  let w = word.toLowerCase();
  if (w.length <= 3) return w;
  if (w.endsWith("ies") && w.length > 4) w = w.slice(0, -3) + "y";
  else if (/(ss|us|is)$/.test(w)) {
    // class, status, analysis — not plurals
  } else if (/(xes|ches|shes|sses|zes)$/.test(w)) w = w.slice(0, -2);
  else if (w.endsWith("s")) w = w.slice(0, -1);

  // Up to two passes, so "monitoring" -> "monitor" -> "monit" lands where "monitor" does.
  for (let pass = 0; pass < 2; pass++) {
    const suffix = SUFFIXES.find((s) => w.endsWith(s) && w.length - s.length >= 3);
    if (!suffix) break;
    w = w.slice(0, -suffix.length);
  }
  if (w.endsWith("e") && w.length > 3) w = w.slice(0, -1);
  if (/([^aeiouls])\1$/.test(w)) w = w.slice(0, -1); // runn -> run, but keep "all", "css"
  return w;
}

function words(text) {
  return (text || "").toLowerCase().match(/[a-z0-9]+/g) || [];
}

/** Query text -> stemmed terms, stopwords dropped. */
export function queryTerms(q) {
  const raw = words(q);
  const kept = raw.filter((w) => !STOPWORDS.has(w));
  return (kept.length ? kept : raw).map(stem);
}

function hostOf(link) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

// Field weights: a hit in the title says far more than a hit in the description.
const FIELDS = [
  ["title", 6],
  ["tags", 4],
  ["use_case", 3],
  ["host", 2],
  ["description", 1.5],
];

/** Precompute the stemmed word sets once per entry. */
export function indexEntry(entry) {
  const text = {
    title: entry.title || "",
    tags: [...entry.tags, entry.category].join(" "),
    use_case: entry.use_case || "",
    host: hostOf(entry.link),
    description: entry.description || "",
  };
  const fields = {};
  for (const [name] of FIELDS) fields[name] = new Set(words(text[name]).map(stem));
  return { entry, fields, titleLower: text.title.toLowerCase() };
}

/** Edit distance between two strings (insert/delete/substitute, each cost 1). */
function levenshtein(a, b) {
  if (a === b) return 0;
  const al = a.length;
  const bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;
  let prev = new Array(bl + 1);
  let curr = new Array(bl + 1);
  for (let j = 0; j <= bl; j++) prev[j] = j;
  for (let i = 1; i <= al; i++) {
    curr[0] = i;
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[bl];
}

const FUZZY_MAX_DISTANCE = 2;
const FUZZY_MIN_TERM_LENGTH = 4; // below this, a 2-edit typo covers too many unrelated words
const FUZZY_PENALTY = 0.5; // a typo match still counts, but scores below a real hit in the same field

/** Best field weight for an exact/prefix hit, and separately for a typo (fuzzy)
 *  hit. A field that matches exactly always wins over one that only matches
 *  within edit distance 2, so a correct spelling outranks a typo. */
function termScore(indexed, term, prefix) {
  let bestExact = 0;
  let bestFuzzy = 0;
  for (const [name, weight] of FIELDS) {
    const set = indexed.fields[name];
    let hit = set.has(term);
    if (!hit && prefix && term.length >= 2) {
      for (const w of set) {
        if (w.startsWith(term)) {
          hit = true;
          break;
        }
      }
    }
    if (hit) {
      if (weight > bestExact) bestExact = weight;
      continue;
    }
    if (term.length >= FUZZY_MIN_TERM_LENGTH && weight > bestFuzzy) {
      for (const w of set) {
        if (
          Math.abs(w.length - term.length) <= FUZZY_MAX_DISTANCE &&
          levenshtein(term, w) <= FUZZY_MAX_DISTANCE
        ) {
          bestFuzzy = weight;
          break;
        }
      }
    }
  }
  if (bestExact > 0) return { score: bestExact, fuzzy: false };
  if (bestFuzzy > 0) return { score: bestFuzzy * FUZZY_PENALTY, fuzzy: true };
  return { score: 0, fuzzy: false };
}

function baseOrder(a, b) {
  const ea = a.entry.tags.includes(ESSENTIAL_TAG) ? 0 : 1;
  const eb = b.entry.tags.includes(ESSENTIAL_TAG) ? 0 : 1;
  if (ea !== eb) return ea - eb;
  const da = a.entry.added || "";
  const db = b.entry.added || "";
  if (da !== db) return da < db ? 1 : -1;
  return b.entry.id - a.entry.id;
}

/**
 * Rank indexed entries against a query.
 * @param {ReturnType<typeof indexEntry>[]} indexed
 * @param {string} q
 * @returns {{ items: any[], relaxed: boolean }}
 */
export function rank(indexed, q) {
  const terms = queryTerms(q);
  if (terms.length === 0) {
    return { items: [...indexed].sort(baseOrder).map((x) => x.entry), relaxed: false };
  }
  // The last word may still be mid-typing ("backgr"), so it also matches as a prefix.
  const typing = !/\s$/.test(q);
  const phrase = q.trim().toLowerCase();

  const scored = [];
  for (const x of indexed) {
    let score = 0;
    let matched = 0;
    let exactMatched = 0;
    terms.forEach((term, i) => {
      const { score: s, fuzzy } = termScore(x, term, typing && i === terms.length - 1);
      if (s > 0) {
        matched++;
        if (!fuzzy) exactMatched++;
      }
      score += s;
    });
    if (matched === 0) continue;
    if (phrase.length > 2 && x.titleLower.includes(phrase)) score += 10;
    scored.push({ ...x, score, matched, exactMatched });
  }

  let pool = scored.filter((x) => x.matched === terms.length);
  let relaxed = false;
  if (pool.length === 0 && terms.length > 1) {
    const need = Math.ceil(terms.length / 2);
    pool = scored.filter((x) => x.matched >= need);
    relaxed = pool.length > 0;
  }
  // Entries where every term matched exactly outrank ones that needed a typo
  // match, regardless of which fields scored higher.
  pool.sort(
    (a, b) =>
      b.matched - a.matched ||
      b.exactMatched - a.exactMatched ||
      b.score - a.score ||
      baseOrder(a, b)
  );
  return { items: pool.map((x) => x.entry), relaxed };
}
