import BlogClient from "./BlogClient";
import { getPostById } from "@/lib/content-adapter";

export const runtime = "edge";

interface PageProps {
  readonly params: Promise<{ readonly id: string }>;
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { id } = await params;
  const post = getPostById(Number(id));
  return <BlogClient post={post} />;
}
