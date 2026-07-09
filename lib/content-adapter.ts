export interface PostMeta {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

export interface Post extends PostMeta {
  content: string
}

export const POSTS: PostMeta[] = [
  {
    id: 1,
    title: "Mastering Git Workflows for Team Collaboration",
    excerpt:
      "Learn advanced Git strategies that will streamline your team's development process and reduce merge conflicts.",
    category: "Git & GitHub",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Scalable Applications with NX Workspace",
    excerpt:
      "Discover how NX can transform your monorepo management and boost development productivity.",
    category: "NX Workspace",
    date: "2024-01-10",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Enterprise Applications",
    excerpt:
      "Essential TypeScript patterns and practices for building maintainable, type-safe applications.",
    category: "TypeScript",
    date: "2024-01-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Modern JavaScript: ES2024 Features You Should Know",
    excerpt:
      "Explore the latest JavaScript features and how they can improve your development workflow.",
    category: "JavaScript",
    date: "2023-12-28",
    readTime: "6 min read",
  },
]

export function getAllPosts(): PostMeta[] {
  return POSTS
}

export function getPostById(id: number): Post | undefined {
  const meta = POSTS.find((p) => p.id === id)
  if (!meta) return undefined
  return { ...meta, content: "" }
}
