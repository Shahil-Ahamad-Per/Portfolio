"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/content-adapter";

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
    <section
      id="blog"
      className="w-full bg-surface-container-low py-space-3xl shadow-inner transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1360px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex max-w-xl flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
              05 // Perspectives &amp; Writing
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              <span className="sr-only">Latest Articles: </span>
              Reflections &amp; Technical Insights
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Essays and technical write-ups on full-stack architecture,
              frontend precision, and software design.
            </p>
          </div>

          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              Articles Published:
            </span>
            <span className="shadow-xs rounded-full bg-surface px-2.5 py-0.5 font-label-sm text-label-sm font-medium text-primary">
              {filteredPosts.length} Monographs
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="scrollbar-none -mx-4 mb-space-xl flex items-center justify-start gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-3 sm:px-0">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Button
                key={category}
                variant={isSelected ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 font-label-sm text-label-sm transition-all duration-300 ${
                  isSelected
                    ? "shadow-xs bg-primary text-on-primary hover:bg-primary-container"
                    : "border-surface-container-high bg-surface text-on-surface hover:bg-surface-container hover:text-primary"
                }`}
              >
                {category}
              </Button>
            );
          })}
        </div>

        {/* Monographs Grid */}
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="border-surface-container-high/70 group relative flex flex-col justify-between rounded-xl border bg-surface p-space-lg shadow-sm transition-all duration-300 hover:border-surface-container-highest hover:bg-surface-container hover:shadow-md"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span className="font-semibold uppercase tracking-wider text-secondary">
                    {post.category}
                  </span>
                  <span>
                    {post.date} • {post.readTime}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-primary-container">
                  {post.title}
                </h3>

                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-auto pt-space-md">
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-primary transition-colors group-hover:text-primary-container"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
