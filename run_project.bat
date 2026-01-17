@echo off
setlocal
echo Checking for Node.js...

:: Try to add common Node paths
if exist "C:\Program Files\nodejs\node.exe" set "PATH=%PATH%;C:\Program Files\nodejs"
if exist "C:\Program Files (x86)\nodejs\node.exe" set "PATH=%PATH%;C:\Program Files (x86)\nodejs"

:: Check if node is available now
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Node.js was not found!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installing, run this file again.
    echo.
    pause
    exit /b 1
)

echo.
echo Found Node.js!
echo Installing dependencies (this may take a minute)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo Starting development server...
echo Your browser should open automatically.
echo.
call npm run dev
pause
