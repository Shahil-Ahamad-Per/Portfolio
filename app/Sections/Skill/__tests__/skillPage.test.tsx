import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillsSection from "../skillPage";
import * as iconsModule from "../skillsIcons";

describe("SkillsSection", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders section heading 'Skills & Technologies'", () => {
    render(<SkillsSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Skills & Technologies/i })
    ).toBeInTheDocument();
  });

  it("renders all skill items from skills configuration", () => {
    render(<SkillsSection />);
    expect(screen.getAllByText("React.js")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Next.js")[0]).toBeInTheDocument();
    expect(screen.getAllByText("JavaScript")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Node.js")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Prisma")[0]).toBeInTheDocument();
    expect(screen.getAllByText("GraphQL")[0]).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders skills category breakdown cards", () => {
    render(<SkillsSection />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Frontend" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Backend" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Database" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "DevOps & Tools" })
    ).toBeInTheDocument();
  });

  it("renders individual category skills within groups", () => {
    render(<SkillsSection />);
    expect(screen.getAllByText("Tailwind CSS")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Express.js")[0]).toBeInTheDocument();
    expect(screen.getAllByText("MongoDB")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Docker")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Cloudflare")[0]).toBeInTheDocument();
  });

  it("renders skill fallback letter when image is missing and image tag when image is url", () => {
    vi.spyOn(iconsModule, "skills", "get").mockReturnValue([
      { name: "Rust", category: "Backend", url: "", image: "" },
      {
        name: "Python",
        category: "Backend",
        url: "https://python.org",
        image: "https://example.com/python.png",
      },
    ]);

    render(<SkillsSection />);
    expect(screen.getByText("R")).toBeInTheDocument();
    const pythonImg = screen.getByAltText("Python");
    expect(pythonImg).toHaveAttribute("src", "https://example.com/python.png");
  });
});
