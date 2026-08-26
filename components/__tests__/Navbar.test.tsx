import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import NavBar from "../Navbar";
import * as nextNavigation from "next/navigation";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
}));

describe("NavBar component", () => {
  const defaultProps = {
    theme: "light",
    setTheme: vi.fn(),
    activeSection: "home",
    scrollToSection: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(nextNavigation.usePathname).mockReturnValue("/");
    document.body.style.overflow = "";
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("renders desktop sidebar, mobile header, social dock, and nav items", () => {
    render(<NavBar {...defaultProps} />);

    expect(
      screen.getByRole("complementary", { name: "Main sidebar navigation" })
    ).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("complementary", { name: "Social profiles quick dock" })
    ).toBeInTheDocument();
  });

  it("toggles theme when theme button is clicked", () => {
    const setThemeMock = vi.fn();
    render(<NavBar {...defaultProps} theme="light" setTheme={setThemeMock} />);

    const themeButtons = screen.getAllByLabelText(
      /Switch to dark mode|Toggle theme/i
    );
    fireEvent.click(themeButtons[0]);

    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("toggles dark to light theme", () => {
    const setThemeMock = vi.fn();
    render(<NavBar {...defaultProps} theme="dark" setTheme={setThemeMock} />);

    const themeButtons = screen.getAllByLabelText(
      /Switch to light mode|Toggle theme/i
    );
    fireEvent.click(themeButtons[0]);

    expect(setThemeMock).toHaveBeenCalledWith("light");
  });

  it("calls scrollToSection when nav item is clicked on main page", () => {
    const scrollToSectionMock = vi.fn();
    render(<NavBar {...defaultProps} scrollToSection={scrollToSectionMock} />);

    const aboutButtons = screen.getAllByRole("button", { name: /About/i });
    fireEvent.click(aboutButtons[0]);

    expect(scrollToSectionMock).toHaveBeenCalledWith("about");
  });

  it("handles scrollToTop when BackToTop is clicked on main page", () => {
    const scrollToSectionMock = vi.fn();
    render(<NavBar {...defaultProps} scrollToSection={scrollToSectionMock} />);

    // Trigger scroll so BackToTop appears
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 500, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    const backToTopBtn = screen.getByRole("button", { name: /Back to top/i });
    fireEvent.click(backToTopBtn);

    expect(scrollToSectionMock).toHaveBeenCalledWith("home");
  });

  it("scrolls window to top when scrollToSection is not provided", () => {
    render(<NavBar {...defaultProps} scrollToSection={undefined} />);

    // Trigger scroll so BackToTop appears
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 500, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    const backToTopBtn = screen.getByRole("button", { name: /Back to top/i });
    fireEvent.click(backToTopBtn);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("navigates via window.location when on blog detail page", () => {
    vi.mocked(nextNavigation.usePathname).mockReturnValue("/blog/1");

    render(<NavBar {...defaultProps} />);

    const aboutButtons = screen.getAllByRole("button", { name: /About/i });
    fireEvent.click(aboutButtons[0]);

    expect(window.location.href).toContain("/#about");
  });

  it("closes mobile drawer on window resize >= 1024", () => {
    render(<NavBar {...defaultProps} />);

    // Open mobile menu
    const menuBtn = screen.getByLabelText(/Open navigation menu/i);
    fireEvent.click(menuBtn);
    expect(document.body.style.overflow).toBe("hidden");

    // Simulate resize
    act(() => {
      window.innerWidth = 1200;
      window.dispatchEvent(new Event("resize"));
    });

    expect(document.body.style.overflow).toBe("");
  });
});
