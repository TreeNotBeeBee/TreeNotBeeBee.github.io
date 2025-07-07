import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          所有文章
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          共 {posts.length} 篇文章
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
    </div>
  )
} 