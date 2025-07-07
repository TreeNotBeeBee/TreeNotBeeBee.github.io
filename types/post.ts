export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
  tags?: string[]
  category?: string
  readingTime?: number
  author?: string
  published?: boolean
}

export interface PostMeta {
  title: string
  date: string
  excerpt: string
  coverImage?: string
  tags?: string[]
  category?: string
  author?: string
  published?: boolean
} 