export interface PostMeta {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export interface BlogPost {
  meta: PostMeta;
  content: string;
}
