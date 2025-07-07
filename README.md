# 🌟 我的个人博客

一个基于 Next.js + TypeScript + Tailwind CSS 构建的现代化个人博客网站。

## ✨ 特性

- 🎨 **现代化设计**：使用 Tailwind CSS 构建响应式界面
- 🌓 **深色模式**：支持明暗主题切换
- 📝 **Markdown 支持**：使用 Markdown 编写博客文章
- 🚀 **静态生成**：支持静态导出，可部署到任何静态托管服务
- 📱 **响应式设计**：完美适配桌面和移动设备
- ⚡ **高性能**：基于 Next.js 14 构建，性能优异

## 🛠️ 技术栈

- **框架**：Next.js 14
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **内容**：Markdown + Gray Matter
- **部署**：GitHub Pages / Vercel

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 预览构建结果
```bash
npm run start
```

## 📁 项目结构

```
├── app/                 # Next.js 13+ App Router
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── about/          # 关于页面
├── components/         # React 组件
│   ├── Header.tsx      # 头部导航
│   ├── Footer.tsx      # 页脚
│   ├── Hero.tsx        # 首页横幅
│   ├── PostCard.tsx    # 文章卡片
│   └── ThemeProvider.tsx # 主题提供者
├── lib/                # 工具函数
├── posts/              # Markdown 文章
├── public/             # 静态资源
└── types/              # TypeScript 类型定义
```

## 📝 写作指南

1. 在 `posts/` 目录下创建 `.md` 文件
2. 使用 Front Matter 添加元数据：

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
---

# 文章内容

这里是文章正文...
```

## 🌐 部署

### GitHub Pages 自动部署

1. 推送代码到 GitHub 仓库
2. GitHub Actions 会自动构建和部署
3. 访问 `https://你的用户名.github.io/仓库名`

### 手动部署

```bash
# 构建静态文件
npm run build

# 部署 out 文件夹中的内容到任何静态托管服务
```

## 🎯 下一步计划

- [ ] 添加文章搜索功能
- [ ] 添加评论系统
- [ ] 添加 RSS 订阅
- [ ] 添加文章分类和标签页面
- [ ] 添加 Live2D 看板娘
- [ ] 优化 SEO

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！ 