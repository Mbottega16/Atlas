@echo off
rem Atlas launcher for Windows. Double-click it, or run start-atlas.bat from a terminal.
rem It finds Python 3.10 or newer, then runs run_atlas.py. Options pass through, e.g. --port 8080.
setlocal
cd /d "%~dp0"
set "CHECK=import sys; sys.exit(0 if sys.version_info >= (3, 10) else 1)"
if exist "backend\.venv\Scripts\python.exe" "backend\.venv\Scripts\python.exe" -c "%CHECK%" >/dev/null 2>&1 && goto venv
py -3 -c "%CHECK%" >/dev/null 2>&1 && goto pylauncher
python -c "%CHECK%" >/dev/null 2>&1 && goto python
echo Atlas needs Python 3.10 or newer.
echo Install it from https://www.python.org/downloads/ (tick "Add python.exe to PATH"),
echo then double-click start-atlas.bat again.
pause
exit /b 1

:venv
"backend\.venv\Scripts\python.exe" run_atlas.py %*
goto end
:pylauncher
py -3 run_atlas.py %*
goto end
:python
python run_atlas.py %*
:end
echo Atlas stopped.
pause
