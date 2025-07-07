# 我的个人博客

这是一个基于 Next.js 构建的现代化个人博客系统，支持 Markdown 写作、主题切换、响应式设计等功能。

## ✨ 功能特性

- 📝 **Markdown 写作**：支持完整的 Markdown 语法
- 🎨 **主题切换**：支持暗色/亮色主题
- 📱 **响应式设计**：适配各种设备尺寸
- 🏷️ **分类标签**：文章分类和标签管理
- ⚡ **性能优化**：静态生成，加载速度快
- 🔍 **SEO 友好**：良好的搜索引擎优化
- 📊 **阅读时间**：自动计算文章阅读时间
- 💬 **作者信息**：支持作者署名

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
npm run start
```

### 4. 导出静态文件

```bash
npm run export
```

## 📝 写作指南

### 创建新文章

1. 在 `posts` 目录下创建一个新的 `.md` 文件
2. 文件名将作为文章的 URL 路径（例如：`my-article.md` → `/posts/my-article`）
3. 在文件开头添加 Front Matter 元数据

### Front Matter 格式

```yaml
---
title: '文章标题'
date: '2024-01-15'
excerpt: '文章摘要，用于首页和列表页显示'
coverImage: '/images/cover.jpg'  # 可选，封面图片
tags: ['标签1', '标签2', '标签3']  # 可选，文章标签
category: '分类名'  # 可选，文章分类
author: '作者名'  # 可选，默认为"匿名"
published: true  # 可选，是否发布，默认为 true
---

# 文章内容

这里写你的文章内容...
```

### 支持的 Markdown 语法

- **标题**：`# ## ### ####`
- **强调**：`*斜体*` `**粗体**`
- **链接**：`[链接文本](URL)`
- **图片**：`![替代文本](图片URL)`
- **代码**：`` `行内代码` `` 和 ``` 代码块 ```
- **引用**：`> 引用内容`
- **列表**：`- 无序列表` 和 `1. 有序列表`
- **表格**：标准 Markdown 表格语法

### 示例文章

查看 `posts` 目录下的示例文章：
- `welcome.md` - 欢迎文章
- `next-js-guide.md` - 技术教程
- `life-thoughts.md` - 生活感悟

## 🎨 自定义配置

### 修改网站信息

编辑 `app/layout.tsx` 中的 metadata：

```typescript
export const metadata: Metadata = {
  title: '你的博客名称',
  description: '你的博客描述',
  // ...其他配置
}
```

### 修改主题色彩

编辑 `tailwind.config.js` 中的 primary 颜色：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ...你的颜色配置
  }
}
```

### 修改个人信息

1. 编辑 `app/about/page.tsx` 更新关于页面
2. 编辑 `components/Footer.tsx` 更新页脚信息
3. 编辑 `components/Header.tsx` 更新网站标题

## 📁 项目结构

```
my-blog/
├── app/                    # Next.js 应用目录
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/             # 关于页面
│   ├── posts/             # 文章相关页面
│   └── [other-routes]/    # 其他页面
├── components/            # React 组件
│   ├── Header.tsx         # 头部导航
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx          # 首页英雄区域
│   ├── PostCard.tsx      # 文章卡片
│   └── ThemeProvider.tsx # 主题提供者
├── lib/                  # 工具函数
│   └── posts.ts          # 文章处理函数
├── posts/                # Markdown 文章
│   ├── welcome.md
│   ├── next-js-guide.md
│   └── life-thoughts.md
├── types/                # TypeScript 类型定义
│   └── post.ts
├── public/               # 静态资源
│   └── images/
├── package.json
├── tailwind.config.js    # Tailwind CSS 配置
├── next.config.js        # Next.js 配置
└── README.md
```

## 🚀 部署指南

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 [Vercel](https://vercel.com)
3. 导入你的 GitHub 仓库
4. 自动部署完成

### 部署到 GitHub Pages

1. 修改 `next.config.js`：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/your-repo-name',  // 如果是用户页面则不需要
  images: {
    unoptimized: true
  }
}
```

2. 构建并部署：

```bash
npm run build
```

3. 将 `out` 目录的内容推送到 `gh-pages` 分支

### 部署到其他平台

由于项目支持静态导出，你可以将构建后的文件部署到任何静态托管服务，如：
- Netlify
- Cloudflare Pages
- GitHub Pages
- Firebase Hosting

## 🔧 开发技巧

### 添加新页面

1. 在 `app` 目录下创建新文件夹
2. 在文件夹中创建 `page.tsx` 文件
3. 更新导航菜单（在 `components/Header.tsx` 中）

### 自定义样式

- 全局样式：编辑 `app/globals.css`
- 组件样式：使用 Tailwind CSS 类名
- 自定义组件：在 `components` 目录下创建

### 添加新功能

1. 创建新的 React 组件
2. 更新类型定义（如果需要）
3. 添加相关的工具函数
4. 更新文档

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

感谢以下开源项目：
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Marked](https://marked.js.org/)
- [Gray Matter](https://github.com/jonschlinkert/gray-matter)

---

**开始你的博客之旅吧！** 🎉

如果你有任何问题，请查看示例文章或提交 Issue。 