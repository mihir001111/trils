@echo off
echo ========================================
echo After Trials Web - Next.js Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install

echo.
echo [2/3] Verifying environment variables...
if not exist .env.local (
    echo ERROR: .env.local not found!
    echo The file should already exist in the project.
    exit /b 1
)
echo Environment variables configured.

echo.
echo [3/3] Running type check...
call npm run type-check

echo.
echo ========================================
echo ✅ Setup Complete!
echo ========================================
echo.
echo To start the development server:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
echo For more info, see QUICK_START.md
echo ========================================
pause
