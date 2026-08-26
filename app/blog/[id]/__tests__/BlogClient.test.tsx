import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BlogClient from "../BlogClient";
import type { Post } from "@/lib/content-adapter";
import * as tocHook from "@/hooks/use-table-of-contents";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: vi.fn() }),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/blog/1",
}));

describe("BlogClient component", () => {
  const samplePost: Post = {
    id: 1,
    title: "Mastering TypeScript",
    date: "2026-01-15",
    category: "TypeScript",
    excerpt: "Learn TypeScript deeply and write safer code.",
    readTime: "5 min read",
    content:
      "## Introduction\n\nThis is `inline code`.\n\n```typescript\nconst a = 1;\n```\n\n### Advanced Concepts\n\nHere are details.",
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders 'Article not found' when post is undefined", () => {
    render(<BlogClient post={undefined} />);

    expect(
      screen.getByRole("heading", { name: "Article not found" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /← Back to Home/i })
    ).toBeInTheDocument();
  });

  it("renders 'Coming Soon!' when post exists but has no content", () => {
    const historyBackSpy = vi
      .spyOn(window.history, "back")
      .mockImplementation(() => {});
    const postWithoutContent = {
      ...samplePost,
      content: "",
    } as unknown as Post;

    render(<BlogClient post={postWithoutContent} />);

    expect(
      screen.getByRole("heading", { name: samplePost.title })
    ).toBeInTheDocument();
    expect(screen.getByText("Coming Soon!")).toBeInTheDocument();

    const goBackBtn = screen.getByRole("button", { name: "Go Back" });
    fireEvent.click(goBackBtn);
    expect(historyBackSpy).toHaveBeenCalled();
  });

  it("renders full article with title, technical guide, code block, and copy button", async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    render(<BlogClient post={samplePost} />);

    expect(
      screen.getByRole("heading", { level: 1, name: samplePost.title })
    ).toBeInTheDocument();
    expect(screen.getByText("Technical Guide")).toBeInTheDocument();
    expect(screen.getByText("5 min read")).toBeInTheDocument();
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
    expect(screen.getByText("Introduction")).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: "Copy" });
    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });

  it("renders Table of Contents and handles TOC navigation and toggling", () => {
    vi.spyOn(tocHook, "useTableOfContents").mockReturnValue([
      {
        id: "introduction",
        text: "Introduction",
        level: 2,
        children: [
          {
            id: "advanced-concepts",
            text: "Advanced Concepts",
            level: 3,
          },
        ],
      },
    ]);

    // Create target element in document
    const headingElem = document.createElement("h2");
    headingElem.id = "introduction";
    headingElem.getBoundingClientRect = () => ({
      top: 200,
      bottom: 240,
      left: 0,
      right: 100,
      width: 100,
      height: 40,
      x: 0,
      y: 200,
      toJSON: () => {},
    });
    document.body.appendChild(headingElem);

    render(<BlogClient post={samplePost} />);

    expect(
      screen.getByRole("heading", { name: "Table of Contents" })
    ).toBeInTheDocument();

    // Click TOC item
    const tocButtons = screen.getAllByRole("button", { name: "Introduction" });
    fireEvent.click(tocButtons[0]);
    expect(window.scrollTo).toHaveBeenCalled();

    // Toggle collapsible section
    const chevronButtons = screen.getAllByRole("button");
    const toggleBtn = chevronButtons.find(
      (btn) =>
        btn.querySelector("svg.lucide-chevron-down") ||
        btn.querySelector("svg.lucide-chevron-right")
    );
    if (toggleBtn) {
      fireEvent.click(toggleBtn);
    }

    document.body.removeChild(headingElem);
  });
});
