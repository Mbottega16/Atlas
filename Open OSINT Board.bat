@echo off
cd /d "%~dp0"
echo Opening Atlas OSINT Board...
start "" "%~dp0frontend\public\board.html"
