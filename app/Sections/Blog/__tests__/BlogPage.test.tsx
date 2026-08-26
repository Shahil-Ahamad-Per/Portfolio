import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BlogSection from "../BlogPage";
import { getAllPosts } from "@/lib/content-adapter";

describe("BlogSection", () => {
  it("renders section heading 'Latest Articles'", () => {
    render(<BlogSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Latest Articles/i })
    ).toBeInTheDocument();
  });

  it("renders all category filter buttons", () => {
    render(<BlogSection />);
    const categories = [
      "All",
      "Git & GitHub",
      "NX Workspace",
      "TypeScript",
      "JavaScript",
    ];

    categories.forEach((category) => {
      expect(
        screen.getByRole("button", { name: category })
      ).toBeInTheDocument();
    });
  });

  it("filters articles when a category is selected", () => {
    render(<BlogSection />);
    const gitCategoryBtn = screen.getByRole("button", { name: "Git & GitHub" });
    fireEvent.click(gitCategoryBtn);

    const posts = getAllPosts();
    const gitPosts = posts.filter((p) => p.category === "Git & GitHub");

    gitPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it("resets filter when 'All' category is clicked", () => {
    render(<BlogSection />);
    const typeScriptBtn = screen.getByRole("button", { name: "TypeScript" });
    fireEvent.click(typeScriptBtn);

    const allBtn = screen.getByRole("button", { name: "All" });
    fireEvent.click(allBtn);

    const posts = getAllPosts();
    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it("renders links to blog detail pages", () => {
    render(<BlogSection />);
    const posts = getAllPosts();
    const firstPost = posts[0];

    const postLinks = screen.getAllByRole("link");
    const matchingLink = postLinks.find(
      (link) => link.getAttribute("href") === `/blog/${firstPost.id}`
    );

    expect(matchingLink).toBeDefined();
  });
});
