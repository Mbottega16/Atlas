# Atlas

A personal website/tool-library database — search, filter, and quick-capture
for links worth reusing across projects (link, category, description, use
case, tags).

The public site is a read-only static build on Render (`render.yaml`). The
library itself is `backend/seed/atlas-seed.json`; you change it locally. How
it all fits, and the edit workflow: see `CLAUDE.md`.

## Run it on your Mac or PC

You need Python 3.10 or newer (python.org) and, for the first build, Node.js LTS (nodejs.org).

1. Get the latest copy: `git pull`.
2. Start it:
   - **Mac:** double-click `start-atlas.command`.
   - **Windows:** double-click `start-atlas.bat`.
3. Open the address it prints. On this computer: <http://localhost:8000>.
   From your other computer or phone on the same network: `http://<computer-name>:8000`
   (the window lists the exact addresses).
4. Allow the firewall prompt the first time, so the other computer can connect.

Run it on both computers to have a server on each. Each one keeps its own working copy of
the library; new links you `git pull` are added on the next start, and your local edits stay.
To require a password, set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` in `backend/.env`
(see `backend/.env.example`). Options: `--port 8080`, `--local-only`.

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
