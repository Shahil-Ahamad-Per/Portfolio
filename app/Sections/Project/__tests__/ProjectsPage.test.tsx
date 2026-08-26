import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectsSection from "../ProjectsPage";
import { projects } from "../Projects";

describe("ProjectsSection", () => {
  beforeEach(() => {
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
    projects.forEach((proj) => {
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
});
