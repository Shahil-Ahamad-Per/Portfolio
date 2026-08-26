import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders copyright text with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        new RegExp(`Copyright © ${currentYear} Shahil Ahamad`, "i")
      )
    ).toBeInTheDocument();
  });

  it("renders DMCA protection status link", () => {
    render(<Footer />);
    const dmcaLink = screen.getByRole("link");
    expect(dmcaLink).toHaveAttribute("href", "https://www.dmca.com/r/g70zll2");
    expect(dmcaLink).toHaveAttribute("target", "_blank");
    expect(dmcaLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(dmcaLink).toHaveAttribute("title", "DMCA.com Protection Status");
  });
});
