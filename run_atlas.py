"""Run the full Atlas website on this computer, reachable from your other devices.

Start it with the launcher for your system. It finds Python 3.10+, or installs it
(Mac: Python 3.12 through uv; Windows: the python.org installer, for this user only):
  Mac:      double-click start-atlas.command   (or: ./start-atlas.command)
  Windows:  double-click start-atlas.bat
Or directly, with Python 3.10 or newer:  python run_atlas.py

What it does, every start:
  1. Makes backend/.venv and installs backend/requirements.txt (only when that file changes).
  2. Builds the website into frontend/dist (only when the frontend or the seed changed).
     No Node.js on the computer? It downloads the current LTS from nodejs.org into .tools/.
  3. Adds new seed entries to the local DB (backend/scripts/sync_seed.py). Local edits are kept.
  4. Serves the website and its API from one server on port 8000, on every network
     interface, so the other computer can open http://<this-computer>:8000.

Options:
  --port N        use port N instead of 8000
  --local-only    accept connections from this computer only
  --no-build      skip the frontend build step
"""

from __future__ import annotations

import argparse
import hashlib
import os
import platform
import shutil
import socket
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BACKEND = ROOT / "backend"
FRONTEND = ROOT / "frontend"
VENV = BACKEND / ".venv"
TOOLS = ROOT / ".tools"  # Node.js downloaded by this script, when the computer has none
WINDOWS = os.name == "nt"
VENV_PY = VENV / ("Scripts/python.exe" if WINDOWS else "bin/python")


def step(msg: str) -> None:
    print(f"\n== {msg}", flush=True)


def fail(msg: str) -> None:
    print(f"\nERROR: {msg}", flush=True)
    sys.exit(1)


def run(cmd: list, cwd: Path, env: dict | None = None) -> None:
    code = subprocess.call([str(c) for c in cmd], cwd=str(cwd), env=env)
    if code != 0:
        fail(f"command failed ({code}): {' '.join(str(c) for c in cmd)}")


def ensure_backend() -> None:
    step("Backend: Python environment")
    if not VENV_PY.exists():
        print(f"Creating {VENV.relative_to(ROOT)} with Python {platform.python_version()}")
        run([sys.executable, "-m", "venv", VENV], ROOT)
    reqs = (BACKEND / "requirements.txt").read_bytes()
    stamp = VENV / ".atlas-requirements.sha1"
    digest = hashlib.sha1(reqs).hexdigest()
    if not stamp.exists() or stamp.read_text().strip() != digest:
        print("Installing backend packages (first start or requirements changed)")
        run([VENV_PY, "-m", "pip", "install", "--upgrade", "pip", "-q"], BACKEND)
        run([VENV_PY, "-m", "pip", "install", "-r", "requirements.txt", "-q"], BACKEND)
        stamp.write_text(digest)
    else:
        print("Backend packages are up to date")


def newest_mtime(paths: list) -> float:
    newest = 0.0
    for p in paths:
        if p.is_file():
            newest = max(newest, p.stat().st_mtime)
        elif p.is_dir():
            for f in p.rglob("*"):
                if f.is_file():
                    newest = max(newest, f.stat().st_mtime)
    return newest


def download(url: str, dest: Path) -> None:
    """Download with the system curl when there is one (it uses the computer's own
    certificates), else with Python."""
    curl = shutil.which("curl")
    if curl and subprocess.call([curl, "-fsSL", "-o", str(dest), url]) == 0:
        return
    import urllib.request

    with urllib.request.urlopen(url) as r, open(dest, "wb") as f:
        shutil.copyfileobj(r, f)


def node_platform() -> tuple[str, str]:
    """(nodejs.org platform name, archive extension) for this computer."""
    machine = platform.machine().lower()
    arch = "arm64" if machine in ("arm64", "aarch64") else "x64"
    system = platform.system()
    if system == "Darwin":
        return f"darwin-{arch}", "tar.gz"
    if system == "Windows":
        return f"win-{arch}", "zip"
    return f"linux-{arch}", "tar.gz"


def local_node_bin() -> Path | None:
    """The bin folder of a Node.js that run_atlas.py downloaded earlier, if any."""
    for d in sorted(TOOLS.glob("node-*"), reverse=True):
        bindir = d if WINDOWS else d / "bin"
        if (bindir / ("npm.cmd" if WINDOWS else "npm")).exists():
            return bindir
    return None


def install_node() -> Path:
    """Download the current LTS Node.js from nodejs.org into .tools/ (no admin rights)."""
    import json

    TOOLS.mkdir(exist_ok=True)
    print("Node.js not found: downloading it from nodejs.org (one time, about 50 MB)")
    index = TOOLS / "node-index.json"
    download("https://nodejs.org/dist/index.json", index)
    releases = json.loads(index.read_text(encoding="utf-8"))
    index.unlink()
    version = next(r["version"] for r in releases if r.get("lts"))
    plat, ext = node_platform()
    name = f"node-{version}-{plat}"
    archive = TOOLS / f"{name}.{ext}"
    download(f"https://nodejs.org/dist/{version}/{name}.{ext}", archive)
    print(f"Unpacking Node.js {version}")
    if ext == "zip":
        import zipfile

        with zipfile.ZipFile(archive) as z:
            z.extractall(TOOLS)
    else:
        import tarfile

        with tarfile.open(archive) as t:
            try:
                t.extractall(TOOLS, filter="data")
            except TypeError:  # Python without extraction filters
                t.extractall(TOOLS)
    archive.unlink()
    bindir = local_node_bin()
    if bindir is None:
        fail(f"Node.js download unpacked, but npm is missing in {TOOLS}")
    return bindir


def ensure_frontend(skip_build: bool) -> None:
    step("Frontend: website build")
    dist_index = FRONTEND / "dist" / "index.html"
    if skip_build:
        if not dist_index.exists():
            fail("--no-build was given, but frontend/dist does not exist yet")
        print("Skipping the build (--no-build)")
        return
    env = dict(os.environ)
    env.pop("VITE_STATIC", None)  # the local build is the full read-write app
    npm = shutil.which("npm")
    if npm is None:
        bindir = local_node_bin()
        if bindir is None:
            try:
                bindir = install_node()
            except Exception as exc:  # noqa: BLE001
                if dist_index.exists():
                    print(f"Could not get Node.js ({exc}): using the existing build")
                    return
                fail(f"Could not download Node.js ({exc}). Install the LTS version from "
                     "https://nodejs.org, then start Atlas again.")
        env["PATH"] = str(bindir) + os.pathsep + env.get("PATH", "")
        npm = str(bindir / ("npm.cmd" if WINDOWS else "npm"))
    sources = [FRONTEND / "src", FRONTEND / "index.html", FRONTEND / "package-lock.json",
               FRONTEND / "vite.config.ts", FRONTEND / "scripts", BACKEND / "seed"]
    if dist_index.exists() and dist_index.stat().st_mtime >= newest_mtime(sources):
        print("Website build is up to date")
        return
    if not (FRONTEND / "node_modules").exists():
        print("Installing frontend packages (first start)")
        run([npm, "ci"], FRONTEND, env)
    print("Building the website")
    run([npm, "run", "build"], FRONTEND, env)


def sync_db() -> None:
    step("Library: local database")
    env = dict(os.environ, PYTHONPATH=str(BACKEND))
    run([VENV_PY, "scripts/sync_seed.py"], BACKEND, env)


def lan_addresses() -> list:
    addrs = set()
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("10.255.255.255", 1))  # no packet is sent; this picks the LAN interface
            addrs.add(s.getsockname()[0])
    except OSError:
        pass
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            addrs.add(info[4][0])
    except OSError:
        pass
    return sorted(a for a in addrs if not a.startswith("127."))


def password_set() -> bool:
    env_file = BACKEND / ".env"
    if os.environ.get("ADMIN_PASSWORD"):
        return True
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            if line.strip().startswith("ADMIN_PASSWORD=") and line.split("=", 1)[1].strip():
                return True
    return False


def serve(port: int, local_only: bool) -> None:
    host = "127.0.0.1" if local_only else "0.0.0.0"
    step("Atlas is starting")
    print(f"  On this computer:   http://localhost:{port}")
    if not local_only:
        name = socket.gethostname()
        if platform.system() == "Darwin" and not name.endswith(".local"):
            name += ".local"
        print(f"  From other devices: http://{name}:{port}")
        for ip in lan_addresses():
            print(f"                      http://{ip}:{port}")
        if not password_set():
            print("  Note: no password is set, so anyone on this network can edit the library.")
            print("        To require one, set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in backend/.env")
    print("  Stop the server with Ctrl+C (or close this window).\n", flush=True)
    env = dict(os.environ, PYTHONPATH=str(BACKEND))
    try:
        subprocess.call([str(VENV_PY), "-m", "uvicorn", "app.main:app", "--host", host,
                         "--port", str(port)], cwd=str(BACKEND), env=env)
    except KeyboardInterrupt:
        pass


def main() -> None:
    sys.stdout.reconfigure(line_buffering=True)  # keep messages in order with npm/pip output
    if sys.version_info < (3, 10):
        fail(f"Atlas needs Python 3.10 or newer; this is {platform.python_version()}. "
             "Install it from https://www.python.org/downloads/ and start Atlas again.")
    parser = argparse.ArgumentParser(description="Run the Atlas website on this computer.")
    parser.add_argument("--port", type=int, default=int(os.environ.get("ATLAS_PORT", 8000)))
    parser.add_argument("--local-only", action="store_true")
    parser.add_argument("--no-build", action="store_true")
    args = parser.parse_args()
    (BACKEND / "data").mkdir(exist_ok=True)
    ensure_backend()
    ensure_frontend(args.no_build)
    sync_db()
    serve(args.port, args.local_only)


if __name__ == "__main__":
    main()
