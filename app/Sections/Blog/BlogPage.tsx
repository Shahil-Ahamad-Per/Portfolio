import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tag, Calendar } from "lucide-react"
import { useState } from "react"
import { blogPosts } from "./Blogs"

const categories = ["All", "Git & GitHub", "NX Workspace", "TypeScript", "JavaScript"]

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
<section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
            Latest Articles
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-sage-600 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                    : "border-sage-600 text-sage-600 hover:bg-sage-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-slate-800 hover:scale-110 hover:shadow-lg transition-all duration-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-cream-50 dark:bg-slate-800 border-sage-200 dark:border-slate-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-sage-400 dark:hover:border-gold-500 transition-all duration-500 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-sage-100 dark:bg-slate-700 text-sage-700 dark:text-gold-300 group-hover:bg-sage-200 dark:group-hover:bg-slate-600 hover:scale-110 transition-all duration-300"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-charcoal-500 dark:text-slate-400 group-hover:text-charcoal-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif text-charcoal-800 dark:text-slate-100 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-charcoal-600 dark:text-slate-300 group-hover:text-charcoal-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-charcoal-500 dark:text-slate-400 group-hover:text-charcoal-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sage-600 dark:text-gold-400 hover:bg-sage-50 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
