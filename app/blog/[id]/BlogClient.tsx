"use client";
import { useEffect, useState, useCallback } from "react";
import type React from "react";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/app/Sections/Footer";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Clock,
  Check,
  Copy,
} from "lucide-react";
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
  if (
    children === null ||
    children === undefined ||
    typeof children === "boolean"
  ) {
    return "";
  }
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }
  if (isReactElement(children)) {
    return extractText(
      (children.props as { children?: React.ReactNode }).children
    );
  }
  return "";
}

function isReactElement(node: React.ReactNode): node is React.ReactElement {
  return Boolean(node && typeof node === "object" && "props" in node);
}

function MarkdownH2({
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  const text = extractText(children);
  const id = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return (
    <h2
      id={id}
      className="border-surface-container-high/60 mb-4 mt-12 scroll-mt-24 border-b pb-2 font-serif text-2xl font-bold tracking-tight text-primary sm:text-3xl"
      {...props}
    >
      {children}
    </h2>
  );
}

function MarkdownH3({
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  const text = extractText(children);
  const id = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return (
    <h3
      id={id}
      className="text-primary/95 mb-3 mt-8 scroll-mt-24 font-serif text-xl font-semibold sm:text-2xl"
      {...props}
    >
      {children}
    </h3>
  );
}

function MarkdownCode({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLElement>>) {
  const [copied, setCopied] = useState(false);
  const rawText = extractText(children);
  const isBlock = Boolean(
    className?.startsWith("language-") || rawText.includes("\n")
  );
  if (!isBlock) {
    return (
      <code
        className="border-surface-container-high/70 rounded-md border bg-surface-container px-1.5 py-0.5 font-mono text-xs text-primary sm:text-sm"
        {...props}
      >
        {children}
      </code>
    );
  }

  const handleCopy = () => {
    const textToCopy = rawText.replace(/\n$/, "");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const language = className?.replace("language-", "") || "code";

  return (
    <div className="border-surface-container-high/80 group relative my-6 overflow-hidden rounded-xl border bg-surface shadow-sm">
      <div className="border-surface-container-high/80 flex items-center justify-between border-b bg-surface-container px-4 py-2.5">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied code" : "Copy"}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-primary" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-surface-container-lowest/80 !mt-0 overflow-x-auto !rounded-none p-4 font-mono text-xs leading-relaxed text-on-surface dark:bg-surface-container-lowest sm:text-sm">
        <code className="font-mono text-on-surface" {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
}

function MarkdownPre({
  children,
}: Readonly<React.HTMLAttributes<HTMLPreElement>>) {
  return <>{children}</>;
}

function MarkdownA({
  href,
  children,
  target: userTarget,
  rel: userRel,
  className,
  ...props
}: Readonly<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { node?: unknown }
>) {
  const { node: _node, ...domProps } = props;
  const isExternal =
    href?.startsWith("http://") ||
    href?.startsWith("https://") ||
    href?.startsWith("//");

  return (
    <a
      href={href}
      {...domProps}
      target={isExternal ? "_blank" : userTarget}
      rel={isExternal ? "noopener noreferrer" : userRel}
      className={`decoration-secondary/50 font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-container hover:decoration-secondary ${className || ""}`}
    >
      {children}
    </a>
  );
}

const markdownComponents = {
  h2: MarkdownH2,
  h3: MarkdownH3,
  pre: MarkdownPre,
  code: MarkdownCode,
  a: MarkdownA,
};

interface BlogClientProps {
  readonly post: Post | undefined;
}

export default function BlogClient({ post }: Readonly<BlogClientProps>) {
  const { theme, setTheme } = useTheme();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [activeId, setActiveId] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  const hasContent = Boolean(post?.content);
  const toc = useTableOfContents("#blog-content", hasContent);
  const readingProgress = useReadingProgress(hasContent);

  useEffect(() => {
    setMounted(true);
    try {
      sessionStorage.setItem("returnToSection", "blog");
    } catch {
      // ignore
    }
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
              type="button"
              onClick={() => toggleSection(item.id)}
              aria-label={
                isExpanded ? `Collapse ${item.text}` : `Expand ${item.text}`
              }
              className="mr-1 flex-shrink-0 rounded-md p-1 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
            >
              {isExpanded ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" />
              )}
            </button>
          ) : (
            <div className="w-5" />
          )}
          <button
            type="button"
            onClick={(e) => handleTocClick(item.id, e)}
            className={`block flex-1 rounded-md px-3 py-1.5 text-left text-sm transition-all duration-200 ${
              isActive
                ? "border-l-2 border-primary bg-surface-container font-semibold text-primary"
                : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
            } ${item.level === 2 ? "font-medium" : "font-normal"}`}
          >
            {item.text}
          </button>
        </div>
        {hasChildren && isExpanded && (
          <ul className="border-surface-container-high/60 ml-4 mt-1 space-y-0.5 border-l pl-2">
            {item.children!.map((child) => renderTocItem(child))}
          </ul>
        )}
      </li>
    );
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface text-on-surface">
        <div className="mx-auto max-w-[1360px] space-y-6 px-margin py-space-xl pt-28 md:px-margin-tablet lg:px-margin-desktop">
          <Skeleton className="h-12 w-64 bg-surface-container-high" />
          <Skeleton className="h-6 w-96 bg-surface-container-high" />
          <Skeleton className="h-64 w-full bg-surface-container-high" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-surface text-on-surface">
        <NavBar theme={theme} setTheme={setTheme} />
        <div className="flex min-h-screen flex-col pt-20">
          <main className="flex flex-grow flex-col items-center justify-center px-6 py-20">
            <div className="max-w-md text-center">
              <div className="mb-6 text-6xl">😢</div>
              <h1 className="mb-4 font-headline-lg text-headline-lg text-primary">
                Article not found
              </h1>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                The article you&apos;re looking for doesn&apos;t exist or has
                been relocated.
              </p>
              <Link
                href="/#blog"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container"
              >
                ← Back to Home
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (!post.content) {
    return (
      <div className="flex min-h-screen flex-col bg-surface text-on-surface">
        <NavBar theme={theme} setTheme={setTheme} />
        <div className="flex min-h-screen flex-col pt-20">
          <main className="flex flex-grow flex-col items-center justify-center px-6 py-20">
            <div className="max-w-2xl text-center">
              <div className="mb-6 text-6xl sm:mb-8 sm:text-8xl">🚀</div>
              <h1 className="mb-4 font-headline-lg text-headline-lg text-primary sm:text-4xl">
                {post.title}
              </h1>
              <div className="mb-4 font-headline-sm text-headline-sm font-semibold text-secondary sm:text-2xl">
                Coming Soon!
              </div>
              <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant sm:mb-8 sm:text-body-lg">
                This blog post is currently being crafted with deliberate
                architectural care. Stay tuned for insights worth the wait!
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <Link
                  href="/#blog"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container sm:w-auto"
                >
                  ← Back to Home
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      sessionStorage.setItem("returnToSection", "blog");
                    } catch {
                      // ignore
                    }
                    window.history.back();
                  }}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-surface-container-high bg-surface-container px-6 py-3 font-label-lg text-label-lg text-on-surface transition-all hover:bg-surface-container-high hover:text-primary sm:w-auto"
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
    <div className="min-h-screen bg-surface text-on-surface transition-colors duration-500 selection:bg-primary-fixed selection:text-on-primary-fixed">
      <NavBar theme={theme} setTheme={setTheme} />

      <div className="flex min-h-screen flex-col pt-20">
        <header className="border-surface-container-high/70 bg-surface-container-low/40 relative overflow-hidden border-b backdrop-blur-sm">
          {/* Top Ambient Glow matching portfolio aesthetic */}
          <div className="from-primary-fixed/20 via-secondary-fixed/10 pointer-events-none absolute -top-24 left-1/2 -z-10 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl" />

          <div className="mx-auto max-w-[1360px] px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
            <nav aria-label="Breadcrumb" className="mb-space-md">
              <ol className="scrollbar-none flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 font-label-sm text-label-sm">
                <li className="inline-flex items-center gap-2">
                  <Link
                    href="/#blog"
                    className="inline-flex h-auto min-h-0 shrink-0 items-center uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                  <span
                    className="text-on-surface-variant/40 shrink-0 select-none"
                    aria-hidden="true"
                  >
                    /
                  </span>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Link
                    href="/#blog"
                    className="inline-flex h-auto min-h-0 shrink-0 items-center uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Blog
                  </Link>
                  <span
                    className="text-on-surface-variant/40 shrink-0 select-none"
                    aria-hidden="true"
                  >
                    /
                  </span>
                </li>
                <li
                  className="min-w-0 truncate font-semibold text-primary"
                  aria-current="page"
                >
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="mb-space-xs flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                {post.category || "Perspective & Research"} // Technical Guide
              </span>
            </div>

            <h1 className="mb-space-md text-balance font-headline-lg text-headline-lg leading-tight text-primary sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs pt-space-xs text-sm">
              <div className="border-surface-container-high/60 inline-flex items-center gap-1.5 rounded-full border bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-surface">
                <FileText className="h-3.5 w-3.5 text-secondary" />
                <span>Technical Guide</span>
              </div>
              <div className="border-surface-container-high/60 inline-flex items-center gap-1.5 rounded-full border bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-surface">
                <Clock className="h-3.5 w-3.5 text-secondary" />
                <span>{post.readTime}</span>
              </div>
              {post.category && (
                <div className="border-surface-container-high/60 inline-flex items-center gap-1.5 rounded-full border bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-surface">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>{post.category}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="mx-auto grid w-full max-w-[1360px] flex-grow grid-cols-1 gap-space-xl px-margin py-space-xl md:px-margin-tablet lg:grid-cols-12 lg:px-margin-desktop">
          <article className="lg:col-span-8">
            <div
              id="blog-content"
              className="prose-p:text-on-surface/90 prose-blockquote:bg-surface-container/40 prose-li:text-on-surface/90 prose-table:border-surface-container-high/80 prose-td:border-surface-container-high/50 prose prose-sm max-w-none font-sans dark:prose-invert sm:prose-lg marker:text-secondary prose-headings:font-serif prose-headings:text-primary prose-p:mb-6 prose-p:font-body-md prose-p:text-body-md prose-p:leading-relaxed prose-blockquote:my-6 prose-blockquote:rounded-r-xl prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-on-surface-variant prose-strong:font-semibold prose-strong:text-on-surface prose-li:my-1.5 prose-table:my-6 prose-table:w-full prose-table:border-collapse prose-table:overflow-hidden prose-table:rounded-xl prose-table:border prose-th:border-b prose-th:border-surface-container-high prose-th:bg-surface-container prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-label-md prose-th:text-label-md prose-th:font-semibold prose-th:text-primary prose-td:border-b prose-td:px-4 prose-td:py-2.5 prose-td:font-body-sm prose-td:text-body-sm prose-td:text-on-surface"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {post.content.replace(/\{:[^}]+\}/g, "")}
              </ReactMarkdown>
            </div>

            {/* End of article callout & navigation */}
            <div className="border-surface-container-high/80 bg-surface-container-low/60 mt-space-2xl flex flex-col items-start justify-between gap-space-md rounded-2xl border p-space-lg shadow-sm sm:flex-row sm:items-center">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                  Perspectives &amp; Technical Insights
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Explore More Articles
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Delve into monographs covering frontend architecture,
                  monorepos, and distributed web services.
                </p>
              </div>
              <Link
                href="/#blog"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-space-lg py-2.5 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container"
              >
                <span>← Back to All Articles</span>
              </Link>
            </div>
          </article>

          {toc.length > 0 && (
            <aside className="hidden lg:col-span-4 lg:block">
              <nav
                className="border-surface-container-high/80 sticky top-28 overflow-hidden rounded-2xl border bg-surface shadow-sm transition-all"
                style={{ maxHeight: "calc(100vh - 9rem)" }}
                aria-label="Table of contents"
              >
                <div className="border-surface-container-high/60 bg-surface-container-low/60 flex items-center justify-between border-b p-space-md">
                  <h2 className="flex items-center gap-2 font-headline-sm text-[16px] font-semibold text-primary">
                    <FileText className="h-4 w-4 text-secondary" />
                    Table of Contents
                  </h2>
                  <span className="font-label-sm text-label-sm font-semibold text-secondary">
                    {Math.round(readingProgress)}% read
                  </span>
                </div>
                <div
                  className="overflow-y-auto p-space-sm"
                  style={{ maxHeight: "calc(100vh - 14rem)" }}
                >
                  <ul className="space-y-0.5">
                    {toc.map((item) => renderTocItem(item))}
                  </ul>
                </div>
                <div className="h-1.5 w-full bg-surface-container">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-primary-container transition-all duration-300"
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
