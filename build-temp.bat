@echo off
echo 正在构建博客项目...
echo.

set NODE_PATH=C:\Program Files\nodejs
set PATH=%NODE_PATH%;%PATH%

echo 使用 Node.js 版本:
"%NODE_PATH%\node.exe" --version

echo 使用 npm 版本:
"%NODE_PATH%\npm.cmd" --version

echo.
echo 正在构建项目...
"%NODE_PATH%\npm.cmd" run build

if %errorlevel% neq 0 (
    echo 错误：项目构建失败
    pause
    exit /b 1
)

echo.
echo ✅ 构建完成！
echo 静态文件已生成到 out 文件夹中
echo.
dir out
echo.
pause 