import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BackToTop } from "../BackToTop";

describe("BackToTop", () => {
  it("does not render when window.scrollY <= 400", () => {
    const onScrollToTop = vi.fn();
    window.scrollY = 300;
    render(<BackToTop onScrollToTop={onScrollToTop} />);

    expect(
      screen.queryByRole("button", { name: "Back to top" })
    ).not.toBeInTheDocument();
  });

  it("renders when window.scrollY > 400 and calls onScrollToTop on click", () => {
    const onScrollToTop = vi.fn();
    render(<BackToTop onScrollToTop={onScrollToTop} />);

    window.scrollY = 500;
    fireEvent.scroll(window);

    const button = screen.getByRole("button", { name: "Back to top" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onScrollToTop).toHaveBeenCalledTimes(1);
  });
});
