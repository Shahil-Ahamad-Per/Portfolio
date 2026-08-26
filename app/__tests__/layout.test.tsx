import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "../layout";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "font-sans" }),
  Playfair_Display: () => ({ variable: "font-serif" }),
}));

vi.mock("@vercel/analytics/next", () => ({
  Analytics: () => <div data-testid="analytics-component" />,
}));

describe("RootLayout", () => {
  it("renders children inside ThemeProvider and includes analytics", () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Hello Portfolio</div>
      </RootLayout>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByTestId("analytics-component")).toBeInTheDocument();
    expect(document.querySelector("html")).toHaveAttribute("lang", "en");
  });

  it("exports valid metadata configuration", () => {
    expect(metadata.title).toBe("Shahil Ahamad");
    expect(metadata.description).toContain("Shahil Ahamad");
    expect(metadata.openGraph?.title).toBe("Shahil Ahamad");
    expect(metadata.twitter?.creator).toBe("@shahil_ahamad");
  });
});
