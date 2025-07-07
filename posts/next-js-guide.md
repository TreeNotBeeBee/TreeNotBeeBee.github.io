---
title: 'Next.js 入门指南：构建现代 Web 应用'
date: '2024-01-10'
excerpt: 'Next.js 是一个强大的 React 框架，本文将介绍如何使用 Next.js 构建现代 Web 应用。'
coverImage: '/images/nextjs-cover.jpg'
tags: ['Next.js', 'React', 'Web开发', '前端']
category: '技术'
author: '博主'
published: true
---

# Next.js 入门指南：构建现代 Web 应用

Next.js 是一个基于 React 的全栈框架，它提供了许多开箱即用的功能，让开发者可以快速构建高性能的 Web 应用。

## 什么是 Next.js？

Next.js 是由 Vercel 开发的一个 React 框架，它具有以下特点：

- **服务端渲染 (SSR)**：提高首屏加载速度和 SEO
- **静态站点生成 (SSG)**：在构建时生成静态页面
- **API 路由**：内置 API 服务器功能
- **文件系统路由**：基于文件结构的路由系统
- **自动代码分割**：优化性能

## 主要特性

### 1. 混合渲染模式

Next.js 支持多种渲染模式：

```javascript
// 静态生成 (SSG)
export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts()
    }
  }
}

// 服务端渲染 (SSR)
export async function getServerSideProps() {
  return {
    props: {
      data: await fetchData()
    }
  }
}
```

### 2. API 路由

创建 API 端点非常简单：

```javascript
// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])
  }
}
```

### 3. 图像优化

Next.js 提供了自动图像优化：

```jsx
import Image from 'next/image'

function MyImage() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="英雄图片"
      width={800}
      height={600}
      priority
    />
  )
}
```

## 项目结构

典型的 Next.js 项目结构如下：

```
my-app/
├── pages/
│   ├── api/
│   │   └── users.js
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   └── about.js
├── components/
│   ├── Header.js
│   └── Footer.js
├── styles/
│   └── globals.css
├── public/
│   └── images/
├── package.json
└── next.config.js
```

## 路由系统

Next.js 使用基于文件的路由系统：

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[slug].js` → `/blog/hello-world`
- `pages/api/users.js` → `/api/users`

### 动态路由

```javascript
// pages/blog/[slug].js
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  
  return <h1>文章: {slug}</h1>
}
```

## 性能优化

### 1. 代码分割

Next.js 自动进行代码分割，但你也可以手动分割：

```javascript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('../components/heavy-component'),
  { loading: () => <p>Loading...</p> }
)
```

### 2. 预加载

```javascript
import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/about" prefetch>
        <a>关于我们</a>
      </Link>
    </nav>
  )
}
```

## 部署选项

### 1. Vercel（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 2. 静态导出

```javascript
// next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

```bash
# 构建并导出
npm run build
```

## 最佳实践

1. **使用 TypeScript**：提高代码质量
2. **优化图片**：使用 Next.js Image 组件
3. **合理使用 SSG/SSR**：根据内容特性选择渲染方式
4. **代码分割**：避免大包影响性能
5. **使用 ESLint**：保持代码规范

## 总结

Next.js 是一个功能强大的框架，它简化了 React 应用的开发和部署过程。通过合理利用其特性，你可以构建出高性能、可扩展的 Web 应用。

### 相关资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Next.js 学习课程](https://nextjs.org/learn)
- [Vercel 平台](https://vercel.com)

---

*这个博客就是使用 Next.js 构建的，你可以查看源代码来学习实际的实现方式。* 