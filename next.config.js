/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，这样可以部署到 GitHub Pages
  output: 'export',
  trailingSlash: true,
  // 禁用图片优化，因为静态导出不支持
  images: {
    unoptimized: true
  },
  // 如果部署到 GitHub Pages 的子路径，需要设置 basePath
  // basePath: '/your-repo-name',
}

module.exports = nextConfig 