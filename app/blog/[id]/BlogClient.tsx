"use client";
import { useEffect, useState, useCallback } from "react";
import type React from "react";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/app/Sections/Footer";
import { useTheme } from "next-themes";
import { ChevronDown, ChevronRight, FileText, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Post } from "@/lib/content-adapter";
import {
  useTableOfContents,
  type TocItem,
} from "@/hooks/use-table-of-contents";
import { useReadingProgress } from "@/hooks/use-reading-progress";

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (isReactElement(children)) {
    return extractText(
      (children.props as { children?: React.ReactNode }).children
    );
  }
  return String(children);
}

function isReactElement(node: React.ReactNode): node is React.ReactElement {
  return !!(node && typeof node === "object" && "props" in node);
}

interface BlogClientProps {
  post: Post | undefined;
}

export default function BlogClient({ post }: BlogClientProps) {
  const { theme, setTheme } = useTheme();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [activeId, setActiveId] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  const hasContent = !!post?.content;
  const toc = useTableOfContents("#blog-content", hasContent);
  const readingProgress = useReadingProgress(hasContent);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (toc.length > 0) {
      setExpandedSections(new Set(toc.flatMap((item) => flattenIds(item))));
    }
  }, [toc]);

  const handleTocClick = useCallback(
    (targetId: string, e: React.MouseEvent) => {
      e.preventDefault();
      setActiveId(targetId);
      const targetElem = document.getElementById(targetId);
      if (!targetElem) return;
      const yOffset = -100;
      const y =
        targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    []
  );

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  }, []);

  const renderTocItem = (item: TocItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isActive = activeId === item.id;

    return (
      <li key={item.id}>
        <div className="group flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleSection(item.id)}
              className="mr-1 flex-shrink-0 rounded p-1 transition-colors hover:bg-sage-100 dark:hover:bg-slate-700"
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3 text-charcoal-500 dark:text-slate-400" />
              ) : (
                <ChevronRight className="h-3 w-3 text-charcoal-500 dark:text-slate-400" />
              )}
            </button>
          ) : (
            <div className="w-5" />
          )}
          <button
            onClick={(e) => handleTocClick(item.id, e)}
            className={`block flex-1 rounded-md px-3 py-2 text-left text-sm transition-all duration-200 hover:bg-sage-100 dark:hover:bg-slate-700 ${
              isActive
                ? "border-l-2 border-sage-500 bg-sage-100 font-medium text-sage-700 dark:border-gold-400 dark:bg-slate-700 dark:text-gold-400"
                : "text-charcoal-700 hover:text-sage-600 dark:text-slate-300 dark:hover:text-gold-400"
            } ${item.level === 2 ? "font-medium" : "font-normal"}`}
          >
            {item.text}
          </button>
        </div>
        {hasChildren && isExpanded && (
          <ul className="ml-4 mt-1 space-y-1 border-l border-sage-200 pl-2 dark:border-slate-600">
            {item.children!.map((child) => renderTocItem(child))}
          </ul>
        )}
      </li>
    );
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
        <div className="mx-auto max-w-6xl space-y-6 p-6">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-6 w-96" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cream-50 to-sage-50 px-6 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
        <div className="text-center">
          <div className="mb-6 text-6xl">😢</div>
          <h1 className="mb-4 text-2xl font-bold text-charcoal-800 dark:text-slate-100 sm:text-3xl">
            Article not found
          </h1>
          <p className="mb-6 text-charcoal-600 dark:text-slate-300">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-sage-600 px-6 py-3 text-white transition-colors hover:bg-sage-700 dark:bg-gold-500 dark:hover:bg-gold-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!post.content) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
        <NavBar theme={theme} setTheme={setTheme} />
        {/* lg:pl-72 must match Navbar w-72 and SIDEBAR_WIDTH_PX in lib/nav-config.ts */}
        <div className="flex min-h-screen flex-col pt-16 lg:pl-72 lg:pt-0">
          <main className="flex flex-grow flex-col items-center justify-center px-6 py-20">
            <div className="max-w-2xl text-center">
              <div className="mb-6 text-6xl sm:mb-8 sm:text-8xl">🚀</div>
              <h1 className="mb-4 text-2xl font-bold text-charcoal-800 dark:text-slate-100 sm:mb-6 sm:text-4xl">
                {post.title}
              </h1>
              <div className="mb-4 bg-gradient-to-r from-sage-500 to-gold-500 bg-clip-text text-xl font-semibold text-transparent sm:mb-6 sm:text-2xl">
                Coming Soon!
              </div>
              <p className="mb-6 text-base leading-relaxed text-charcoal-600 dark:text-slate-300 sm:mb-8 sm:text-lg">
                This blog post is currently being crafted with care. Stay tuned
                for amazing content that&apos;s worth the wait!
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-sage-600 px-6 py-3 text-white transition-colors hover:bg-sage-700 dark:bg-gold-500 dark:hover:bg-gold-600 sm:w-auto"
                >
                  ← Back to Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-sage-200 px-6 py-3 text-charcoal-700 transition-colors hover:bg-sage-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 sm:w-auto"
                >
                  Go Back
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
      <NavBar theme={theme} setTheme={setTheme} />

      {/* lg:pl-72 must match Navbar w-72 and SIDEBAR_WIDTH_PX in lib/nav-config.ts */}
      <div className="flex min-h-screen flex-col pt-16 lg:pl-72 lg:pt-0">
        <header className="border-b border-sage-200 bg-cream-50/50 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50">
          <div className="container mx-auto max-w-6xl px-6 py-8">
            <div className="scrollbar-none mb-4 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 text-sm text-charcoal-600 dark:text-slate-400">
              <Link
                href="/"
                className="shrink-0 transition-colors hover:text-sage-600 dark:hover:text-gold-400"
              >
                Home
              </Link>
              <span className="shrink-0">/</span>
              <Link
                href="/#blog"
                className="shrink-0 transition-colors hover:text-sage-600 dark:hover:text-gold-400"
              >
                Blog
              </Link>
              <span className="shrink-0">/</span>
              <span className="min-w-0 truncate text-charcoal-800 dark:text-slate-200">
                {post.title}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-charcoal-800 dark:text-slate-100 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Technical Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto grid max-w-6xl flex-grow grid-cols-1 gap-8 px-6 py-8 sm:py-12 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-8">
            <div
              id="blog-content"
              className="prose prose-sm max-w-none dark:prose-invert sm:prose-lg prose-headings:font-serif prose-headings:font-bold prose-headings:text-charcoal-800 prose-h2:mb-3 prose-h2:mt-8 prose-h2:scroll-mt-20 prose-h2:text-2xl prose-h2:text-sage-800 prose-h3:mb-2 prose-h3:mt-6 prose-h3:scroll-mt-20 prose-h3:text-xl prose-h3:text-sage-700 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-charcoal-700 prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal-800 prose-li:my-1 prose-li:text-charcoal-700 prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-sage-200 prose-th:bg-sage-50 prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-sage-200 prose-td:px-3 prose-td:py-1 dark:prose-headings:text-slate-100 dark:prose-h2:text-sage-400 dark:prose-h3:text-sage-300 dark:prose-p:text-slate-300 dark:prose-a:text-gold-400 dark:prose-strong:text-slate-200 dark:prose-li:text-slate-300 dark:prose-th:border-slate-600 dark:prose-th:bg-slate-800 dark:prose-td:border-slate-600 sm:prose-h2:mb-4 sm:prose-h2:mt-12 sm:prose-h2:text-3xl sm:prose-h3:mb-3 sm:prose-h3:mt-8 sm:prose-h3:text-2xl sm:prose-p:mb-6 sm:prose-th:px-6 sm:prose-th:py-3 sm:prose-td:px-6 sm:prose-td:py-2"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children, ...props }) => {
                    const text = extractText(children);
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                    return (
                      <h2 id={id} {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, ...props }) => {
                    const text = extractText(children);
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                    return (
                      <h3 id={id} {...props}>
                        {children}
                      </h3>
                    );
                  },
                  code: ({ className, children, ...props }) => {
                    const isBlock = className?.startsWith("language-");
                    if (!isBlock) {
                      return (
                        <code
                          className="rounded bg-sage-100 px-1.5 py-0.5 text-xs text-sage-800 dark:bg-slate-800 dark:text-gold-400 sm:text-sm"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <div className="group relative my-4 sm:my-6">
                        <div className="flex items-center justify-between rounded-t-xl border border-sage-200 bg-slate-800 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 sm:px-4">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 sm:text-xs">
                            {className?.replace("language-", "") || "code"}
                          </span>
                          <button
                            onClick={() =>
                              navigator.clipboard.writeText(
                                String(children).replace(/\n$/, "")
                              )
                            }
                            className="text-[10px] text-slate-400 transition-colors hover:text-white sm:text-xs"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="!mt-0 overflow-x-auto !rounded-t-none rounded-b-xl border border-t-0 border-sage-200 bg-slate-900 p-3 dark:border-slate-700 dark:bg-slate-950 sm:p-4">
                          <code
                            className="text-xs text-slate-100 sm:text-sm"
                            {...props}
                          >
                            {children}
                          </code>
                        </pre>
                      </div>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {toc.length > 0 && (
            <aside className="hidden lg:col-span-4 lg:block">
              <nav
                className="sticky top-24 overflow-hidden rounded-lg border border-sage-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80"
                style={{ maxHeight: "calc(100vh - 8rem)" }}
                aria-label="Table of contents"
              >
                <div className="border-b border-sage-200 bg-sage-50 p-4 dark:border-slate-700 dark:bg-slate-700">
                  <h2 className="flex items-center gap-2 font-semibold text-charcoal-800 dark:text-slate-200">
                    <FileText className="h-4 w-4" />
                    Table of Contents
                  </h2>
                </div>
                <div
                  className="overflow-y-auto p-4"
                  style={{ maxHeight: "calc(100vh - 12rem)" }}
                >
                  <ul className="space-y-1">
                    {toc.map((item) => renderTocItem(item))}
                  </ul>
                </div>
                <div className="h-1 bg-sage-100 dark:bg-slate-700">
                  <div
                    className="h-full bg-gradient-to-r from-sage-500 to-gold-500 transition-all duration-300"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
              </nav>
            </aside>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

function flattenIds(item: TocItem): string[] {
  const ids = [item.id];
  if (item.children) {
    for (const child of item.children) {
      ids.push(...flattenIds(child));
    }
  }
  return ids;
}
