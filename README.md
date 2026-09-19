# Atlas

A personal website/tool-library database — search, filter, and quick-capture
for links worth reusing across projects (link, category, description, use
case, tags).

The public site is a read-only static build on Render (`render.yaml`). The
library itself is `backend/seed/atlas-seed.json`; you change it locally. How
it all fits, and the edit workflow: see `CLAUDE.md`.

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
Vite dev server URL directly — no CORS setup needed. A fresh checkout has no
`backend/data/atlas.db`; the backend builds it from the seed on first start.

To preview the public read-only build: `VITE_STATIC=1 npm run build` then
`npx vite preview`.

## Tests

```
cd backend
.venv\Scripts\python -m pytest
```
