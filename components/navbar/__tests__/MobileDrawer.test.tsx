import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileDrawer } from "../MobileDrawer";

describe("MobileDrawer", () => {
  const defaultProps = {
    mobileOpen: true,
    setMobileOpen: vi.fn(),
    isItemActive: (id: string) => id === "home",
    handleNavClick: vi.fn(),
    isBlogDetailPage: false,
  };

  it("renders mobile drawer navigation items when open", () => {
    render(<MobileDrawer {...defaultProps} />);

    expect(
      screen.getByRole("dialog", { name: "Mobile navigation drawer" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /About/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Contact/i })
    ).toBeInTheDocument();
  });

  it("calls handleNavClick when navigation link is clicked", () => {
    const handleNavClick = vi.fn();
    render(<MobileDrawer {...defaultProps} handleNavClick={handleNavClick} />);

    const blogBtn = screen.getByRole("button", { name: /Blog/i });
    fireEvent.click(blogBtn);

    expect(handleNavClick).toHaveBeenCalledWith("blog");
  });

  it("closes drawer when clicking close button", () => {
    const setMobileOpen = vi.fn();
    render(<MobileDrawer {...defaultProps} setMobileOpen={setMobileOpen} />);

    const closeBtn = screen.getByRole("button", { name: /Close drawer/i });
    fireEvent.click(closeBtn);

    expect(setMobileOpen).toHaveBeenCalledWith(false);
  });

  it("closes drawer when backdrop overlay is clicked", () => {
    const setMobileOpen = vi.fn();
    const { container } = render(
      <MobileDrawer {...defaultProps} setMobileOpen={setMobileOpen} />
    );

    const backdrop = container.querySelector(".lg\\:hidden.fixed.inset-0");
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(setMobileOpen).toHaveBeenCalledWith(false);
    }
  });

  it("triggers handleNavClick with 'contact' when Get In Touch button is clicked", () => {
    const handleNavClick = vi.fn();
    render(<MobileDrawer {...defaultProps} handleNavClick={handleNavClick} />);

    const getInTouchBtn = screen.getByRole("button", { name: "Get In Touch" });
    fireEvent.click(getInTouchBtn);

    expect(handleNavClick).toHaveBeenCalledWith("contact");
  });
});
