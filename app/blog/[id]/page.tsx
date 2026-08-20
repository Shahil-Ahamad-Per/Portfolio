import BlogClient from "./BlogClient";
import { getPostById } from "@/lib/content-adapter";

export const runtime = "edge";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(Number(id));
  return <BlogClient post={post} />;
}
