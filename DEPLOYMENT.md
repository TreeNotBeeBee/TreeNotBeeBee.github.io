# 🚀 部署指南

## 📋 准备工作

### 1. 安装 Node.js
- 访问 [nodejs.org](https://nodejs.org/)
- 下载并安装 LTS 版本
- 安装完成后重启命令行

### 2. 验证安装
```bash
node --version
npm --version
```

## 🔧 本地构建

### 方法一：使用批处理文件（Windows）
双击 `build.bat` 文件，它会自动：
- 检查 Node.js 安装
- 安装依赖
- 构建项目
- 生成静态文件到 `out` 文件夹

### 方法二：手动命令
```bash
# 安装依赖
npm install

# 构建项目
npm run build
```

## 🌐 部署到 GitHub Pages

### 自动部署（推荐）

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 创建新仓库（如：`my-blog`）
   - 选择 Public

2. **推送代码到 GitHub**
   ```bash
   # 添加远程仓库（替换成你的用户名和仓库名）
   git remote add origin https://github.com/你的用户名/my-blog.git
   
   # 推送代码
   git push -u origin master
   ```

3. **启用 GitHub Pages**
   - 进入仓库设置（Settings）
   - 找到 "Pages" 部分
   - 选择 "GitHub Actions" 作为部署源
   - GitHub Actions 会自动构建和部署

4. **访问网站**
   - 网站地址：`https://你的用户名.github.io/仓库名`
   - 每次推送代码都会自动更新

### 手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **创建 gh-pages 分支**
   ```bash
   git checkout -b gh-pages
   git rm -rf .
   git clean -fxd
   ```

3. **复制静态文件**
   ```bash
   # 复制 out 文件夹内容到根目录
   cp -r out/* .
   
   # 创建 .nojekyll 文件
   touch .nojekyll
   ```

4. **提交并推送**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## 🎯 其他部署选项

### Vercel（推荐）
1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 账号登录
3. 导入仓库
4. 自动部署完成

### Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `out` 文件夹到网站
3. 或连接 GitHub 仓库自动部署

### 自己的服务器
1. 构建项目生成 `out` 文件夹
2. 将 `out` 文件夹内容上传到服务器
3. 配置 Web 服务器（如 Nginx、Apache）

## 🔍 故障排除

### 构建失败
- 检查 Node.js 版本（推荐 18+）
- 删除 `node_modules` 重新安装：
  ```bash
  rm -rf node_modules
  npm install
  ```

### GitHub Actions 失败
- 检查 `.github/workflows/deploy.yml` 文件
- 确保仓库有写入权限
- 查看 Actions 日志找出错误

### 网站无法访问
- 确认 GitHub Pages 已启用
- 检查仓库是否为 Public
- 等待几分钟让部署生效

### 样式或功能异常
- 检查 `next.config.js` 中的 `basePath` 设置
- 确保所有资源路径正确
- 检查浏览器控制台错误

## 📝 部署后的维护

### 更新内容
1. 修改代码或添加文章
2. 提交并推送到 GitHub
3. 自动部署会在几分钟内完成

### 监控网站
- 使用 GitHub Actions 查看部署状态
- 设置域名和 SSL 证书
- 配置网站分析工具

## 🎉 完成！

恭喜！你的博客现在已经成功部署了！

**网站地址**：`https://你的用户名.github.io/仓库名`

接下来你可以：
- 📝 添加更多文章
- 🎨 自定义样式和主题
- 🔧 添加新功能
- 📊 配置网站分析 