import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Github, Linkedin } from "../icons";

describe("Custom Icons", () => {
  it("renders Github SVG icon with default and custom classes", () => {
    const { container } = render(<Github className="h-6 w-6 text-black" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("h-6", "w-6", "text-black");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });

  it("renders Linkedin SVG icon with default and custom classes", () => {
    const { container } = render(
      <Linkedin className="h-6 w-6 text-blue-500" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("h-6", "w-6", "text-blue-500");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });
});
