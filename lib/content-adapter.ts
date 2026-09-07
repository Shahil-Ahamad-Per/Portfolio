import {
  type PostMeta,
  gitBlogMeta,
  gitBlogContent,
  nxBlogMeta,
  nxBlogContent,
  typescriptBlogMeta,
  typescriptBlogContent,
  javascriptBlogMeta,
  javascriptBlogContent,
} from "./blog-content";

export type { PostMeta };

export interface Post extends PostMeta {
  content: string;
}

export const POSTS: PostMeta[] = [
  gitBlogMeta,
  nxBlogMeta,
  typescriptBlogMeta,
  javascriptBlogMeta,
];

const markdownContents: Record<number, string> = {
  [gitBlogMeta.id]: gitBlogContent,
  [nxBlogMeta.id]: nxBlogContent,
  [typescriptBlogMeta.id]: typescriptBlogContent,
  [javascriptBlogMeta.id]: javascriptBlogContent,
};

export function getAllPosts(): PostMeta[] {
  return POSTS;
}

export function getPostById(id: number): Post | undefined {
  const meta = POSTS.find((p) => p.id === id);
  if (!meta) return undefined;
  return { ...meta, content: markdownContents[id] ?? "" };
}
