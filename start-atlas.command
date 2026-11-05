#!/bin/bash
# Atlas launcher for Mac (and Linux). Double-click it in Finder, or run ./start-atlas.command
# It finds Python 3.10 or newer, then runs run_atlas.py. Options pass through, e.g. --port 8080.
cd "$(dirname "$0")" || exit 1

ok() { "$1" -c 'import sys; sys.exit(0 if sys.version_info >= (3, 10) else 1)' >/dev/null 2>&1; }

PY=""
if [ -x backend/.venv/bin/python ] && ok backend/.venv/bin/python; then
  PY=backend/.venv/bin/python
fi
if [ -z "$PY" ]; then
  for c in python3.13 python3.12 python3.11 python3.10 python3 \
           /opt/homebrew/bin/python3 /usr/local/bin/python3; do
    if command -v "$c" >/dev/null 2>&1 && ok "$c"; then PY="$c"; break; fi
  done
fi
if [ -z "$PY" ] && command -v uv >/dev/null 2>&1; then
  PY="$(uv python find '>=3.10' 2>/dev/null)"
fi
if [ -z "$PY" ]; then
  echo "Atlas needs Python 3.10 or newer (the Mac's built-in python3 is 3.9)."
  echo "Install it from https://www.python.org/downloads/ (or: brew install python@3.12),"
  echo "then double-click start-atlas.command again."
  read -r -p "Press Enter to close."
  exit 1
fi

"$PY" run_atlas.py "$@"
read -r -p "Atlas stopped. Press Enter to close."
