#!/usr/bin/env python3
"""Atlas standalone search for Qwen and CLI tools.
Usage:
  python3 search.py "pdf editor"
  python3 search.py --category "security & privacy" "scan"
  python3 search.py --tag osint
  python3 search.py "python" --limit 5 --json
"""
import sys, os, json, argparse
from pathlib import Path

HERE = Path(__file__).resolve().parent
SEED_FILE = HERE / "atlas.json"
if not SEED_FILE.exists():
    SEED_FILE = HERE.parent.parent.parent.parent / "atlas" / "app" / "backend" / "seed" / "atlas-seed.json"

def search(query="", category="", tag="", limit=10):
    if not SEED_FILE.exists():
        return []
    entries = json.loads(SEED_FILE.read_text(encoding="utf-8"))
    q_words = query.lower().split()
    results = []
    for e in entries:
        if category and e.get("category", "").lower() != category.lower():
            continue
        if tag and tag.lower() not in [t.lower() for t in e.get("tags", [])] and e.get("category", "").lower() != tag.lower():
            continue
        hay = " ".join([
            e.get("title", ""),
            e.get("link", ""),
            e.get("description", ""),
            e.get("use_case", ""),
            " ".join(e.get("tags", [])),
            e.get("category", "")
        ]).lower()
        if all(w in hay for w in q_words):
            results.append(e)
            if limit and len(results) >= limit:
                break
    return results

def main():
    parser = argparse.ArgumentParser(description="Search Atlas tools library")
    parser.add_argument("query", nargs="*", default=[], help="Keywords to search")
    parser.add_argument("--category", "-c", default="", help="Filter by category")
    parser.add_argument("--tag", "-t", default="", help="Filter by tag")
    parser.add_argument("--limit", "-n", type=int, default=10, help="Max results to return")
    parser.add_argument("--json", action="store_true", help="Output JSON")
    args = parser.parse_args()

    q = " ".join(args.query)
    matches = search(q, args.category, args.tag, args.limit)

    if args.json:
        print(json.dumps(matches, indent=2, ensure_ascii=False))
        return

    print(f"Found {len(matches)} matches in Atlas:")
    for m in matches:
        title = m.get("title", m["link"])
        url = m["link"]
        cat = m.get("category", "")
        use = m.get("use_case", "")
        desc = m.get("description", "")
        print(f"- {title} ({cat})")
        print(f"  {url}")
        if use: print(f"  Task: {use}")
        if desc: print(f"  Info: {desc}")
        print()

if __name__ == "__main__":
    main()
