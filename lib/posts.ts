import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Post, PostMeta } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

// 确保 posts 目录存在
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true })
}

// 计算阅读时间（基于平均每分钟200字）
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

// 获取所有文章
export async function getAllPosts(): Promise<Post[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        const slug = fileName.replace(/\.md$/, '')
        const readingTime = calculateReadingTime(content)
        
        return {
          slug,
          title: data.title || '无标题',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || content.substring(0, 200) + '...',
          content,
          coverImage: data.coverImage,
          tags: data.tags || [],
          category: data.category,
          readingTime,
          author: data.author || '匿名',
          published: data.published !== false, // 默认为 true
        } as Post
      })
      .filter(post => post.published) // 只显示已发布的文章
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

// 根据 slug 获取单篇文章
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // 将 Markdown 转换为 HTML
    const htmlContent = await marked(content)
    const readingTime = calculateReadingTime(content)
    
    return {
      slug,
      title: data.title || '无标题',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 200) + '...',
      content: htmlContent,
      coverImage: data.coverImage,
      tags: data.tags || [],
      category: data.category,
      readingTime,
      author: data.author || '匿名',
      published: data.published !== false,
    } as Post
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}

// 获取所有分类
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))
  return categories as string[]
}

// 获取所有标签
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = Array.from(new Set(posts.flatMap(post => post.tags || [])))
  return tags
}

// 根据分类获取文章
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.category === category)
}

// 根据标签获取文章
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.tags?.includes(tag))
} 