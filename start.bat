@echo off
echo ========================================
echo   今日要闻 - 本地服务器
echo ========================================
echo.
echo 启动服务器...
cd /d "%~dp0public"
python -m http.server 8080
