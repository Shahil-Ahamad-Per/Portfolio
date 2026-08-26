import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileHeader } from "../MobileHeader";

describe("MobileHeader", () => {
  const defaultProps = {
    theme: "light",
    toggleTheme: vi.fn(),
    mobileOpen: false,
    setMobileOpen: vi.fn(),
    onHomeClick: vi.fn(),
  };

  it("renders mobile header brand logo and title", () => {
    render(<MobileHeader {...defaultProps} />);

    expect(screen.getByText("Shahil")).toBeInTheDocument();
    expect(screen.getByText("Ahamad")).toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  it("calls onHomeClick when home brand button is clicked", () => {
    const onHomeClick = vi.fn();
    render(<MobileHeader {...defaultProps} onHomeClick={onHomeClick} />);

    const brandBtn = screen.getByRole("button", {
      name: /Shahil Ahamad Home/i,
    });
    fireEvent.click(brandBtn);

    expect(onHomeClick).toHaveBeenCalledTimes(1);
  });

  it("calls toggleTheme when theme button is clicked", () => {
    const toggleTheme = vi.fn();
    render(<MobileHeader {...defaultProps} toggleTheme={toggleTheme} />);

    const themeBtn = screen.getByLabelText(/Toggle theme/i);
    fireEvent.click(themeBtn);

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it("calls setMobileOpen when menu toggle button is clicked", () => {
    const setMobileOpen = vi.fn();
    render(<MobileHeader {...defaultProps} setMobileOpen={setMobileOpen} />);

    const menuBtn = screen.getByLabelText(/Open navigation menu/i);
    fireEvent.click(menuBtn);

    expect(setMobileOpen).toHaveBeenCalledTimes(1);
  });
});
