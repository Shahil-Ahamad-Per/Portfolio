import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillsSection from "../skillPage";
import { skills } from "../skillsIcons";

describe("SkillsSection", () => {
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
    expect(links).toHaveLength(skills.length);
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
});
