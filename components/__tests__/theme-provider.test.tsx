import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../theme-provider";

describe("ThemeProvider", () => {
  it("renders children wrapped inside the theme provider", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div data-testid="child-element">Theme Child Content</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId("child-element")).toHaveTextContent(
      "Theme Child Content"
    );
  });
});
