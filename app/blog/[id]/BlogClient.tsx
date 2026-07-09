"use client"
import { useEffect, useState, useCallback } from "react"
import type React from "react"
import Link from "next/link"
import NavBar from "@/components/Navbar"
import Footer from "@/app/Sections/Footer"
import { useTheme } from "next-themes"
import { ChevronDown, ChevronRight, FileText, Clock } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Post } from "@/lib/content-adapter"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

function buildTocHierarchy(flatToc: TocItem[]): TocItem[] {
  const result: TocItem[] = []
  const stack: TocItem[] = []

  flatToc.forEach((item) => {
    const newItem = { ...item, children: [] }
    while (stack.length > 0 && stack[stack.length - 1].level >= newItem.level) {
      stack.pop()
    }
    if (stack.length === 0) {
      result.push(newItem)
    } else {
      const parent = stack[stack.length - 1]
      if (!parent.children) parent.children = []
      parent.children.push(newItem)
    }
    stack.push(newItem)
  })

  return result
}

interface BlogClientProps {
  post: Post | undefined
}

export default function BlogClient({ post }: BlogClientProps) {
  const { theme, setTheme } = useTheme()
  const [toc, setToc] = useState<TocItem[]>([])
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [activeId, setActiveId] = useState<string>("")
  const [readingProgress, setReadingProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!post || !post.content) return
    const timer = setTimeout(() => {
      const headings = Array.from(document.querySelectorAll("#blog-content h2, #blog-content h3")) as HTMLElement[]
      const flatToc = headings.map((heading) => ({
        id: heading.id,
        text: heading.innerText,
        level: Number(heading.tagName.replace("H", "")),
      }))
      setToc(buildTocHierarchy(flatToc))
      setExpandedSections(new Set(flatToc.map((item) => item.id)))
    }, 100)
    return () => clearTimeout(timer)
  }, [post])

  useEffect(() => {
    if (!post?.content) return
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setReadingProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [post?.content])

  const handleTocClick = useCallback((targetId: string, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveId(targetId)
    const targetElem = document.getElementById(targetId)
    if (!targetElem) return
    const yOffset = -100
    const y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }, [])

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) newSet.delete(id)
      else newSet.add(id)
      return newSet
    })
  }, [])

  const renderTocItem = (item: TocItem) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedSections.has(item.id)
    const isActive = activeId === item.id

    return (
      <li key={item.id}>
        <div className="flex items-center group">
          {hasChildren ? (
            <button
              onClick={() => toggleSection(item.id)}
              className="flex-shrink-0 p-1 hover:bg-sage-100 dark:hover:bg-slate-700 rounded transition-colors mr-1"
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
            className={`flex-1 text-left block py-2 px-3 rounded-md text-sm transition-all duration-200 hover:bg-sage-100 dark:hover:bg-slate-700 ${
              isActive
                ? "bg-sage-100 dark:bg-slate-700 text-sage-700 dark:text-gold-400 font-medium border-l-2 border-sage-500 dark:border-gold-400"
                : "text-charcoal-700 dark:text-slate-300 hover:text-sage-600 dark:hover:text-gold-400"
            } ${item.level === 2 ? "font-medium" : "font-normal"}`}
          >
            {item.text}
          </button>
        </div>
        {hasChildren && isExpanded && (
          <ul className="ml-4 mt-1 space-y-1 border-l border-sage-200 dark:border-slate-600 pl-2">
            {item.children!.map((child) => renderTocItem(child))}
          </ul>
        )}
      </li>
    )
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
        <div className="p-6 space-y-6 max-w-6xl mx-auto">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-6 w-96" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900 px-6">
        <div className="text-center">
          <div className="text-6xl mb-6">😢</div>
          <h1 className="text-3xl font-bold mb-4 text-charcoal-800 dark:text-slate-100">Article not found</h1>
          <p className="text-charcoal-600 dark:text-slate-300 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-sage-600 dark:bg-gold-500 text-white rounded-lg hover:bg-sage-700 dark:hover:bg-gold-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  if (!post.content) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
        <NavBar theme={theme} setTheme={setTheme} />
        <main className="flex-grow flex flex-col justify-center items-center px-6 py-20">
          <div className="text-center max-w-2xl">
            <div className="text-8xl mb-8">🚀</div>
            <h1 className="text-4xl font-bold mb-6 text-charcoal-800 dark:text-slate-100">{post.title}</h1>
            <div className="bg-gradient-to-r from-sage-500 to-gold-500 bg-clip-text text-transparent text-2xl font-semibold mb-6">
              Coming Soon!
            </div>
            <p className="text-lg text-charcoal-600 dark:text-slate-300 mb-8 leading-relaxed">
              This blog post is currently being crafted with care. Stay tuned for amazing content that&apos;s worth the wait!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/" className="inline-flex items-center px-6 py-3 bg-sage-600 dark:bg-gold-500 text-white rounded-lg hover:bg-sage-700 dark:hover:bg-gold-600 transition-colors">
                ← Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 border border-sage-200 dark:border-slate-600 text-charcoal-700 dark:text-slate-300 rounded-lg hover:bg-sage-100 dark:hover:bg-slate-800 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
      <NavBar theme={theme} setTheme={setTheme} />

      <header className="border-b border-sage-200 dark:border-slate-700 bg-cream-50/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-charcoal-600 dark:text-slate-400 mb-4">
            <Link href="/" className="hover:text-sage-600 dark:hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#blog" className="hover:text-sage-600 dark:hover:text-gold-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-charcoal-800 dark:text-slate-200">{post.title}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-800 dark:text-slate-100 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-charcoal-600 dark:text-slate-400">
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

      <main className="container mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8">
          <div
            id="blog-content"
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-charcoal-800 dark:prose-headings:text-slate-100
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-sage-800 dark:prose-h2:text-sage-400 prose-h2:scroll-mt-20
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-sage-700 dark:prose-h3:text-sage-300 prose-h3:scroll-mt-20
              prose-p:text-charcoal-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-charcoal-800 dark:prose-strong:text-slate-200
              prose-a:text-sage-600 dark:prose-a:text-gold-400
              prose-a:no-underline hover:prose-a:underline
              prose-li:text-charcoal-700 dark:prose-li:text-slate-300
              prose-li:my-1
              prose-table:w-full prose-table:border-collapse
              prose-th:border prose-th:border-sage-200 dark:prose-th:border-slate-600
              prose-th:px-6 prose-th:py-3 prose-th:text-left prose-th:font-semibold
              prose-th:bg-sage-50 dark:prose-th:bg-slate-800
              prose-td:border prose-td:border-sage-200 dark:prose-td:border-slate-600
              prose-td:px-6 prose-td:py-2"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children, ...props }) => {
                  const text = extractText(children)
                  const id = slugify(text)
                  return <h2 id={id} {...props}>{children}</h2>
                },
                h3: ({ children, ...props }) => {
                  const text = extractText(children)
                  const id = slugify(text)
                  return <h3 id={id} {...props}>{children}</h3>
                },
                code: ({ className, children, ...props }) => {
                  const isBlock = className?.startsWith("language-")
                  if (!isBlock) {
                    return (
                      <code
                        className="bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-gold-400 px-1.5 py-0.5 rounded text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  }
                  return (
                    <div className="relative group my-6">
                      <div className="flex items-center justify-between bg-slate-800 dark:bg-slate-950 border border-sage-200 dark:border-slate-700 rounded-t-xl px-4 py-2">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">
                          {className?.replace("language-", "") || "code"}
                        </span>
                        <button
                          onClick={() => navigator.clipboard.writeText(String(children).replace(/\n$/, ""))}
                          className="text-xs text-slate-400 hover:text-white transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="!mt-0 !rounded-t-none bg-slate-900 dark:bg-slate-950 border border-t-0 border-sage-200 dark:border-slate-700 rounded-b-xl p-4 overflow-x-auto">
                        <code className="text-sm text-slate-100" {...props}>{children}</code>
                      </pre>
                    </div>
                  )
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {toc.length > 0 && (
          <aside className="lg:col-span-4">
            <nav
              className="sticky top-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-sage-200 dark:border-slate-700 shadow-sm overflow-hidden"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
              aria-label="Table of contents"
            >
              <div className="p-4 border-b border-sage-200 dark:border-slate-700 bg-sage-50 dark:bg-slate-700">
                <h2 className="font-semibold text-charcoal-800 dark:text-slate-200 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Table of Contents
                </h2>
              </div>
              <div className="overflow-y-auto p-4" style={{ maxHeight: "calc(100vh - 12rem)" }}>
                <ul className="space-y-1">{toc.map((item) => renderTocItem(item))}</ul>
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
  )
}

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children
  if (Array.isArray(children)) return children.map(extractText).join("")
  if (isReactElement(children)) {
    return extractText((children.props as { children?: React.ReactNode }).children)
  }
  return String(children)
}

function isReactElement(node: React.ReactNode): node is React.ReactElement {
  return !!(node && typeof node === "object" && "props" in node)
}
