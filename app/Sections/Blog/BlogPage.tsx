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
    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-8 sm:mb-12 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
          Latest Articles
        </h2>

        {/* Mobile Scrollable / Desktop Centered Category Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 ${
                selectedCategory === category
                  ? "bg-sage-600 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white shadow-md shadow-sage-600/20"
                  : "border-sage-300 text-charcoal-700 hover:bg-sage-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} passHref>
              <Card className="bg-cream-50 dark:bg-slate-800 border-sage-200 dark:border-slate-600 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 sm:hover:-translate-y-2 hover:border-sage-400 dark:hover:border-gold-500 transition-all duration-500 group cursor-pointer h-full flex flex-col justify-between">
                <CardHeader className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-sage-100 dark:bg-slate-700 text-sage-700 dark:text-gold-300 group-hover:bg-sage-200 dark:group-hover:bg-slate-600 transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs sm:text-sm text-charcoal-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-serif text-charcoal-800 dark:text-slate-100 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-charcoal-600 dark:text-slate-300 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="flex justify-between items-center pt-2 border-t border-sage-100 dark:border-slate-700/50">
                    <span className="text-xs sm:text-sm text-charcoal-500 dark:text-slate-400">
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sage-600 dark:text-gold-400 hover:bg-sage-50 dark:hover:bg-slate-700 text-xs sm:text-sm px-2"
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
