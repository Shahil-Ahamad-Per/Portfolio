import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectsSection from "../ProjectsPage";
import * as projectsModule from "../Projects";

describe("ProjectsSection", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(window, "open").mockImplementation(() => null);
  });

  it("renders heading 'Featured Projects'", () => {
    render(<ProjectsSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Featured Projects/i })
    ).toBeInTheDocument();
  });

  it("renders all projects from projects dataset", () => {
    render(<ProjectsSection />);
    projectsModule.projects.forEach((proj) => {
      expect(screen.getByText(proj.title)).toBeInTheDocument();
      expect(screen.getByText(proj.description)).toBeInTheDocument();
    });
  });

  it("opens github and live demo links when buttons are clicked", () => {
    render(<ProjectsSection />);

    const codeButtons = screen.getAllByRole("button", { name: /Code/i });
    const liveButtons = screen.getAllByRole("button", { name: /Live Demo/i });

    if (codeButtons.length > 0) {
      fireEvent.click(codeButtons[0]);
      expect(window.open).toHaveBeenCalledWith(expect.any(String), "_blank");
    }

    if (liveButtons.length > 0) {
      fireEvent.click(liveButtons[0]);
      expect(window.open).toHaveBeenCalledWith(expect.any(String), "_blank");
    }
  });

  it("renders status badges for Work In Progress projects", () => {
    render(<ProjectsSection />);
    const inDevBadges = screen.getAllByText("In Dev");
    expect(inDevBadges.length).toBeGreaterThan(0);
  });

  it("renders 'Soon' badge and 'In Development' button for Coming Soon project without links", () => {
    vi.spyOn(projectsModule, "projects", "get").mockReturnValue([
      {
        title: "Future AI App",
        description: "An upcoming AI project",
        tech: ["Next.js", "OpenAI"],
        status: "Coming Soon",
      } as unknown as (typeof projectsModule.projects)[number],
    ]);

    render(<ProjectsSection />);

    expect(screen.getByText("Soon")).toBeInTheDocument();
    expect(screen.getByText("In Development")).toBeInTheDocument();
  });
});
