import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/types/post'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md  hover:scale-105 transition-all duration-500 overflow-hidden">
      {/* 文章封面图片 */}
      {post.coverImage && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* 文章标题 */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            {post.title}
          </Link>
        </h3>
        
        {/* 文章摘要 */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* 标签 */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        {/* 文章信息 */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy-MM-dd')}
          </time>
          
          {post.readingTime && (
            <>
              <span className="mx-2">•</span>
              <span>{post.readingTime} 分钟阅读</span>
            </>
          )}
          
          {post.category && (
            <>
              <span className="mx-2">•</span>
              <Link 
                href={`/categories/${post.category}`}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {post.category}
              </Link>
            </>
          )}
        </div>
      </div>
    </article>
  )
} 