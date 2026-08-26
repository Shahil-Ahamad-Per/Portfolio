import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tag, Calendar } from "lucide-react";
import { useState } from "react";
import { getAllPosts } from "@/lib/content-adapter";
import Link from "next/link";

const blogPosts = getAllPosts();
const categories = [
  "All",
  "Git & GitHub",
  "NX Workspace",
  "TypeScript",
  "JavaScript",
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-charcoal-800 transition-colors duration-300 hover:text-sage-600 dark:text-slate-100 dark:hover:text-gold-400 sm:mb-12 sm:text-4xl md:text-5xl">
          Latest Articles
        </h2>

        {/* Mobile Scrollable / Desktop Centered Category Filter */}
        <div className="scrollbar-none -mx-4 mb-8 flex items-center justify-start gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-12 sm:justify-center sm:gap-3 sm:px-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 active:scale-95 sm:text-sm ${
                selectedCategory === category
                  ? "bg-sage-600 text-white shadow-md shadow-sage-600/20 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700"
                  : "border-sage-300 text-charcoal-700 hover:bg-sage-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} passHref>
              <Card className="group flex h-full cursor-pointer flex-col justify-between border-sage-200 bg-cream-50 transition-all duration-500 hover:scale-[1.02] hover:border-sage-400 hover:shadow-2xl dark:border-slate-600 dark:bg-slate-800 dark:hover:border-gold-500 sm:hover:-translate-y-2 sm:hover:scale-105">
                <CardHeader className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-200 dark:bg-slate-700 dark:text-gold-300 dark:group-hover:bg-slate-600"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-charcoal-500 dark:text-slate-400 sm:text-sm">
                      <Calendar className="mr-1 h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-lg leading-snug text-charcoal-800 transition-colors duration-300 group-hover:text-sage-600 dark:text-slate-100 dark:group-hover:text-gold-400 sm:text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-xs text-charcoal-600 dark:text-slate-300 sm:text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="flex items-center justify-between border-t border-sage-100 pt-2 dark:border-slate-700/50">
                    <span className="text-xs text-charcoal-500 dark:text-slate-400 sm:text-sm">
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-2 text-xs text-sage-600 hover:bg-sage-50 dark:text-gold-400 dark:hover:bg-slate-700 sm:text-sm"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
