@echo off
rem Atlas launcher for Windows. Double-click it, or run start-atlas.bat from a terminal.
rem It finds Python 3.10 or newer (and installs one if needed), then runs run_atlas.py,
rem which installs everything else. Options pass through, e.g. --port 8080.
setlocal
cd /d "%~dp0"
set "CHECK=import sys; sys.exit(0 if sys.version_info >= (3, 10) else 1)"
set "ARCH=amd64"
set "PYDIR=Python312"
if /i "%PROCESSOR_ARCHITECTURE%"=="ARM64" set "ARCH=arm64"
if /i "%PROCESSOR_ARCHITECTURE%"=="ARM64" set "PYDIR=Python312-arm64"
set "PY=%LOCALAPPDATA%\Programs\Python\%PYDIR%\python.exe"

:find
if exist "backend\.venv\Scripts\python.exe" "backend\.venv\Scripts\python.exe" -c "%CHECK%" >/dev/null 2>&1 && goto venv
if exist "%PY%" "%PY%" -c "%CHECK%" >/dev/null 2>&1 && goto user
py -3 -c "%CHECK%" >/dev/null 2>&1 && goto pylauncher
python -c "%CHECK%" >/dev/null 2>&1 && goto python
if defined TRIED goto nopython
set TRIED=1

rem No admin rights needed: the official python.org installer, for this user only.
echo Python 3.10 or newer not found. Downloading and installing Python 3.12...
set "INSTALLER=%TEMP%\atlas-python-3.12.10-%ARCH%.exe"
curl.exe -fL -o "%INSTALLER%" "https://www.python.org/ftp/python/3.12.10/python-3.12.10-%ARCH%.exe"
if errorlevel 1 goto winget
"%INSTALLER%" /quiet InstallAllUsers=0 PrependPath=1 Include_launcher=0 Include_test=0
del "%INSTALLER%" >/dev/null 2>&1
goto find

:winget
winget install -e --id Python.Python.3.12 --scope user --silent --accept-package-agreements --accept-source-agreements
goto find

:nopython
echo.
echo Could not install Python automatically.
echo Install it from https://www.python.org/downloads/ (tick "Add python.exe to PATH"),
echo then double-click start-atlas.bat again.
pause
exit /b 1

:venv
"backend\.venv\Scripts\python.exe" run_atlas.py %*
goto end
:user
"%PY%" run_atlas.py %*
goto end
:pylauncher
py -3 run_atlas.py %*
goto end
:python
python run_atlas.py %*
:end
echo Atlas stopped.
pause
