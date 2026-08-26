import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Portfolio from "../page";
import * as welcomeScreenHook from "@/hooks/use-welcome-screen";
import * as sectionNavHook from "@/hooks/use-section-navigation";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: vi.fn() }),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Portfolio Page (app/page.tsx)", () => {
  beforeEach(() => {
    vi.spyOn(welcomeScreenHook, "useWelcomeScreen").mockReturnValue({
      showWelcome: false,
      handleWelcomeExit: vi.fn(),
    });
    vi.spyOn(sectionNavHook, "useSectionNavigation").mockReturnValue({
      activeSection: "home",
      scrollToSection: vi.fn(),
    });
  });

  it("renders WelcomeScreen when showWelcome is true", () => {
    vi.spyOn(welcomeScreenHook, "useWelcomeScreen").mockReturnValue({
      showWelcome: true,
      handleWelcomeExit: vi.fn(),
    });

    render(<Portfolio />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Welcome" })
    ).toBeInTheDocument();
  });

  it("renders all sections when showWelcome is false", () => {
    render(<Portfolio />);

    // Hero / MainPage
    expect(
      screen.getByRole("heading", { level: 1, name: /Shahil.*Ahamad/i })
    ).toBeInTheDocument();

    // About
    expect(
      screen.getByRole("heading", { level: 2, name: /About Me/i })
    ).toBeInTheDocument();

    // Skills
    expect(
      screen.getByRole("heading", { level: 2, name: /Skills & Technologies/i })
    ).toBeInTheDocument();

    // Projects
    expect(
      screen.getByRole("heading", { level: 2, name: /Featured Projects/i })
    ).toBeInTheDocument();

    // Blog
    expect(
      screen.getByRole("heading", { level: 2, name: /Latest Articles/i })
    ).toBeInTheDocument();

    // Contact
    expect(
      screen.getByRole("heading", { level: 2, name: /Let's Work Together/i })
    ).toBeInTheDocument();

    // Footer
    expect(
      screen.getByText(/Crafted with passion and attention to detail/i)
    ).toBeInTheDocument();
  });
});
