# Atlas

A personal website/tool-library database — search, filter, and quick-capture
for links worth reusing across projects (link, category, description, use
case, tags). Solo-use, not a public product.

Full plan and phasing: see `CLAUDE.md`, or the vault-side summary at
`projects/atlas/context.md` in the `my-brain` repo.

## Quickstart (local dev)

Backend:
```
cd backend
python -m venv .venv
.venv\Scripts\pip install -r requirements.txt
.venv\Scripts\python -m uvicorn app.main:app --reload --port 8000
```

Frontend (separate terminal):
```
cd frontend
npm install
npm run dev
```

`vite.config.ts` proxies `/api` to `localhost:8000` in dev, so open the
Vite dev server URL directly — no CORS setup needed.

## Tests

```
cd backend
.venv\Scripts\python -m pytest
```
