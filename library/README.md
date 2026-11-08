# Atlas Reference Catalog for Qwen & Agents

This directory contains the complete curated Atlas library (1717 tools and websites)
structured specifically for Qwen and offline AI workflows.

## Contents
- **`catalog.md`**: Master catalog with all 1717 tools, grouped by category.
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
