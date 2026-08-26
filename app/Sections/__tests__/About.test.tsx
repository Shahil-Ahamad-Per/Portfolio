import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "../About";

describe("AboutSection", () => {
  it("renders heading 'About Me'", () => {
    render(<AboutSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /About Me/i })
    ).toBeInTheDocument();
  });

  it("renders the profile image with correct attributes", () => {
    render(<AboutSection />);
    const image = screen.getByRole("img", { name: /Shahil Ahamad/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/profile.jpg");
  });

  it("renders descriptive paragraphs about experience and passion", () => {
    render(<AboutSection />);
    expect(
      screen.getByText(/I'm Shahil Ahamad, a passionate full-stack developer/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/My expertise spans modern JavaScript frameworks/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /When I'm not coding, you'll find me exploring new technologies/i
      )
    ).toBeInTheDocument();
  });
});
