import BlogClient from "./BlogClient"
import { getPostWithContent } from "@/lib/post-content"

export const runtime = "edge"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getPostWithContent(Number(id))
  return <BlogClient post={post} />
}
