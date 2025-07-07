@echo off
echo 正在构建博客项目...
echo.

REM 检查 Node.js 是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：Node.js 未安装或未添加到系统路径
    echo 请从 https://nodejs.org 下载并安装 Node.js
    echo.
    pause
    exit /b 1
)

REM 检查 npm 是否可用
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：npm 不可用
    echo.
    pause
    exit /b 1
)

echo Node.js 和 npm 已安装，开始构建...
echo.

REM 安装依赖
echo 正在安装依赖...
npm install
if %errorlevel% neq 0 (
    echo 错误：依赖安装失败
    pause
    exit /b 1
)

echo.
echo 正在构建项目...
npm run build
if %errorlevel% neq 0 (
    echo 错误：项目构建失败
    pause
    exit /b 1
)

echo.
echo ✅ 构建完成！
echo 静态文件已生成到 out 文件夹中
echo.
echo 你可以：
echo 1. 将 out 文件夹内容部署到任何静态托管服务
echo 2. 使用 "serve out" 命令本地预览
echo 3. 推送到 GitHub 让 GitHub Actions 自动部署
echo.
pause 