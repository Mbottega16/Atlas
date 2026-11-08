#!/usr/bin/env python3
"""Export Atlas seed into structured Markdown and JSON reference files for Qwen
and offline agents.

Generates:
  - references/atlas/catalog.md: Master tools catalog grouped by category.
  - references/atlas/by-category/<cat>.md: Per-category tables with links, use cases, and descriptions.
  - references/atlas/atlas.json: Full raw JSON data.
  - references/atlas/search.py: Instant CLI search tool.
  - references/atlas/README.md: Guide for Qwen tasks in tasks.md.
"""
import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
SEED_PATH = ROOT / "backend" / "seed" / "atlas-seed.json"

QWEN_ENV = os.environ.get("QWEN_REF_DIR")
if QWEN_ENV:
    QWEN_REF_DIR = Path(QWEN_ENV)
else:
    QWEN_REF_DIR = ROOT.parent.parent / "mosaic" / "qwen" / "references" / "atlas"

REPO_REF_DIR = ROOT / "library"

SEARCH_SCRIPT = '''#!/usr/bin/env python3
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
'''

def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")

def main():
    entries = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    targets = [REPO_REF_DIR]
    if QWEN_REF_DIR.parent.exists():
        targets.append(QWEN_REF_DIR)

    for target in targets:
        target.mkdir(parents=True, exist_ok=True)
        (target / "by-category").mkdir(parents=True, exist_ok=True)

    by_cat = {}
    for e in entries:
        cat = e.get("category", "other")
        by_cat.setdefault(cat, []).append(e)

    for cat in by_cat:
        by_cat[cat].sort(key=lambda x: (x.get("title") or "").lower())

    # Build per-category files
    for cat, items in by_cat.items():
        filename = f"{slugify(cat)}.md"
        lines = [
            f"# Atlas — {cat.title()}",
            f"*{len(items)} curated websites and tools in category '{cat}'.*",
            "",
            "| Tool | URL | Use Case | Description | Tags |",
            "|---|---|---|---|---|",
        ]
        for e in items:
            title = (e.get("title") or e["link"]).replace("|", "\\|")
            url = e["link"]
            use = (e.get("use_case") or "").replace("|", "\\|")
            desc = (e.get("description") or "").replace("|", "\\|")
            tags = ", ".join(e.get("tags") or []).replace("|", "\\|")
            lines.append(f"| **[{title}]({url})** | `{url}` | {use} | {desc} | {tags} |")

        content = "\n".join(lines) + "\n"
        for target in targets:
            (target / "by-category" / filename).write_text(content, encoding="utf-8")

    # Build all-tools master catalog
    master_lines = [
        "# Atlas — Master Tools & Links Catalog",
        f"*{len(entries)} curated websites and tools across {len(by_cat)} categories.*",
        "Live site: https://atlas-library-znte.onrender.com",
        "",
        "## Categories Index",
    ]
    for cat in sorted(by_cat.keys()):
        master_lines.append(f"- [{cat.title()}](#{slugify(cat)}) ({len(by_cat[cat])} tools)")
    master_lines.append("")

    for cat in sorted(by_cat.keys()):
        items = by_cat[cat]
        master_lines.append(f"## {cat.title()}")
        master_lines.append(f"*{len(items)} tools.*")
        master_lines.append("")
        for e in items:
            title = e.get("title") or e["link"]
            url = e["link"]
            use = e.get("use_case") or ""
            desc = e.get("description") or ""
            tags = ", ".join(e.get("tags") or [])
            master_lines.append(f"### {title}")
            master_lines.append(f"- **URL**: {url}")
            if use:
                master_lines.append(f"- **Use Case**: {use}")
            if desc:
                master_lines.append(f"- **Description**: {desc}")
            if tags:
                master_lines.append(f"- **Tags**: {tags}")
            master_lines.append("")

    master_content = "\n".join(master_lines) + "\n"
    for target in targets:
        (target / "catalog.md").write_text(master_content, encoding="utf-8")
        (target / "atlas.json").write_text(json.dumps(entries, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        search_file = target / "search.py"
        search_file.write_text(SEARCH_SCRIPT, encoding="utf-8")
        search_file.chmod(0o755)

    readme = f"""# Atlas Reference Catalog for Qwen & Agents

This directory contains the complete curated Atlas library ({len(entries)} tools and websites)
structured specifically for Qwen and offline AI workflows.

## Contents
- **`catalog.md`**: Master catalog with all {len(entries)} tools, grouped by category.
- **`atlas.json`**: Complete raw JSON database with all entries, tags, and use cases.
- **`search.py`**: Fast local CLI search tool (`python3 search.py "pdf merge"`).
- **`by-category/`**: Individual markdown files for each of the 20 categories.

## How to use in Qwen tasks (`tasks.md`)
You can point any Qwen task to read specific categories or the entire catalog:

```markdown
- [ ] Recommend design tools for game assets
  read: references/atlas/by-category/design-and-media.md
  how: Pick the 3 best tools for making 2D pixel sprites and explain why.
```

## Direct CLI search
```bash
python3 search.py "video editor"
python3 search.py --category "developer tools" "git"
```

## Live Web Site
The library is live and public at: **https://atlas-library-znte.onrender.com**
"""
    for target in targets:
        (target / "README.md").write_text(readme, encoding="utf-8")

    # Also ensure search_atlas.py is present at Qwen root if Qwen exists
    if QWEN_REF_DIR.parent.exists():
        qwen_root_search = QWEN_REF_DIR.parent / "search_atlas.py"
        qwen_search_code = SEARCH_SCRIPT.replace(
            'SEED_FILE = HERE / "atlas.json"',
            'SEED_FILE = HERE / "references" / "atlas" / "atlas.json"'
        )
        qwen_root_search.write_text(qwen_search_code, encoding="utf-8")
        qwen_root_search.chmod(0o755)

    print(f"Exported {len(entries)} entries across {len(targets)} targets.")

if __name__ == "__main__":
    main()
