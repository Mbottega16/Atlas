#!/bin/bash
# Atlas launcher for Mac (and Linux). Double-click it in Finder, or run ./start-atlas.command
# It finds Python 3.10 or newer (and installs one if needed), then runs run_atlas.py,
# which installs everything else. Options pass through, e.g. --port 8080.
cd "$(dirname "$0")" || exit 1

ok() { "$1" -c 'import sys; sys.exit(0 if sys.version_info >= (3, 10) else 1)' >/dev/null 2>&1; }

find_python() {
  if [ -x backend/.venv/bin/python ] && ok backend/.venv/bin/python; then
    echo backend/.venv/bin/python; return
  fi
  for c in python3.13 python3.12 python3.11 python3.10 python3 \
           /opt/homebrew/bin/python3 /usr/local/bin/python3; do
    if command -v "$c" >/dev/null 2>&1 && ok "$c"; then command -v "$c"; return; fi
  done
  if command -v uv >/dev/null 2>&1; then
    uv python find '>=3.10' 2>/dev/null
  fi
}

export PATH="$HOME/.local/bin:$PATH"  # where uv installs itself
PY="$(find_python)"

if [ -z "$PY" ]; then
  # No admin rights needed: uv (astral.sh) installs itself and Python 3.12 in your home folder.
  echo "Python 3.10 or newer not found (the Mac's built-in python3 is 3.9). Installing Python 3.12..."
  if ! command -v uv >/dev/null 2>&1; then
    curl -LsSf https://astral.sh/uv/install.sh | env UV_NO_MODIFY_PATH=1 sh
  fi
  if command -v uv >/dev/null 2>&1 && uv python install 3.12; then
    PY="$(uv python find 3.12 2>/dev/null)"
  fi
fi

if [ -z "$PY" ]; then
  echo
  echo "Could not install Python automatically."
  echo "Install it from https://www.python.org/downloads/, then double-click start-atlas.command again."
  read -r -p "Press Enter to close."
  exit 1
fi

"$PY" run_atlas.py "$@"
read -r -p "Atlas stopped. Press Enter to close."
