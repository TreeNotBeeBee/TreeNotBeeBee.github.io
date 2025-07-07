import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Hero from '@/components/Hero'

export default async function Home() {
  // 获取最新的文章
  const posts = await getAllPosts()
  const latestPosts = posts.slice(0, 6) // 只显示最新的6篇文章

  return (
    <div className="space-y-12">
      {/* 英雄区域 - 博客介绍 */}
      <Hero />
      
      {/* 最新文章 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          最新文章
        </h2>
        
        {latestPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              还没有文章，快去写第一篇吧！
            </p>
            <p className="text-gray-400 dark:text-gray-500 mt-2">
              在 posts 文件夹中创建 .md 文件即可开始写作
            </p>
          </div>
        )}
        
        {latestPosts.length > 0 && (
          <div className="text-center mt-8">
            <a
              href="/posts"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              查看所有文章
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}
      </section>
    </div>
  )
} 