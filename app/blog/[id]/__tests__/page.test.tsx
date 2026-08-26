import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../page";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: vi.fn() }),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/blog/1",
}));

describe("Blog dynamic detail page (app/blog/[id]/page.tsx)", () => {
  it("renders the blog client with resolved post", async () => {
    const Component = await Page({ params: Promise.resolve({ id: "1" }) });
    render(Component);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings.length).toBeGreaterThan(0);
  });
});
