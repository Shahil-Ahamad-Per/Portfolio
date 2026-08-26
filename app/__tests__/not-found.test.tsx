import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "../not-found";

describe("NotFound (app/not-found.tsx)", () => {
  it("renders 404 heading and not found message", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("heading", { level: 1, name: "404" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Page not found. The page you're looking for doesn't exist or has been moved./i
      )
    ).toBeInTheDocument();
  });

  it("renders a link to navigate back to Home", () => {
    render(<NotFound />);
    const homeLink = screen.getByRole("link", { name: /← Back to Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
