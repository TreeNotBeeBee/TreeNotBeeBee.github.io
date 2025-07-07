import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* 文章头部 */}
      <header className="mb-8">
        {/* 封面图片 */}
        {post.coverImage && (
          <div className="mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
        
        {/* 文章标题 */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>
        
        {/* 文章信息 */}
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-6">
          <time dateTime={post.date} className="text-sm">
            {format(new Date(post.date), 'yyyy年MM月dd日')}
          </time>
          
          {post.readingTime && (
            <>
              <span className="mx-2">•</span>
              <span className="text-sm">{post.readingTime} 分钟阅读</span>
            </>
          )}
          
          {post.author && (
            <>
              <span className="mx-2">•</span>
              <span className="text-sm">作者: {post.author}</span>
            </>
          )}
          
          {post.category && (
            <>
              <span className="mx-2">•</span>
              <Link 
                href={`/categories/${post.category}`}
                className="text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {post.category}
              </Link>
            </>
          )}
        </div>
        
        {/* 标签 */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      
      {/* 文章内容 */}
      <div 
        className="prose prose-lg dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* 返回按钮 */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          href="/posts"
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          返回文章列表
        </Link>
      </div>
    </article>
  )
} 