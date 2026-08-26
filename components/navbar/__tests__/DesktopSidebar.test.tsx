import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DesktopSidebar } from "../DesktopSidebar";

describe("DesktopSidebar", () => {
  const defaultProps = {
    theme: "light",
    toggleTheme: vi.fn(),
    activeSection: "home",
    isItemActive: (id: string) => id === "home",
    handleNavClick: vi.fn(),
    isBlogDetailPage: false,
  };

  it("renders brand logo, name, and role title", () => {
    render(<DesktopSidebar {...defaultProps} />);

    expect(screen.getByText("Shahil")).toBeInTheDocument();
    expect(screen.getByText("Ahamad")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Dev")).toBeInTheDocument();
    expect(screen.getByAltText("Shahil Ahamad Logo")).toBeInTheDocument();

    const homeBrandBtn = screen.getByRole("button", { name: "Go to Home" });
    fireEvent.click(homeBrandBtn);
    expect(defaultProps.handleNavClick).toHaveBeenCalledWith("home");
  });

  it("renders all navigation items", () => {
    render(<DesktopSidebar {...defaultProps} />);

    const homeButtons = screen.getAllByRole("button", { name: /Home/i });
    expect(homeButtons.length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Skills/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Projects/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Blog/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Contact/i })
    ).toBeInTheDocument();
  });

  it("calls handleNavClick when navigation button is clicked", () => {
    const handleNavClick = vi.fn();
    render(
      <DesktopSidebar {...defaultProps} handleNavClick={handleNavClick} />
    );

    const projectsBtn = screen.getByRole("button", { name: /Projects/i });
    fireEvent.click(projectsBtn);

    expect(handleNavClick).toHaveBeenCalledWith("projects");
  });

  it("calls toggleTheme when theme toggle button is clicked", () => {
    const toggleTheme = vi.fn();
    render(<DesktopSidebar {...defaultProps} toggleTheme={toggleTheme} />);

    const themeBtn = screen.getByRole("button", {
      name: /Switch to dark mode/i,
    });
    fireEvent.click(themeBtn);

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it("renders 'Back to Portfolio' link when on blog detail page", () => {
    render(<DesktopSidebar {...defaultProps} isBlogDetailPage={true} />);

    const backLink = screen.getByRole("link", { name: /Back to Portfolio/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });
});
