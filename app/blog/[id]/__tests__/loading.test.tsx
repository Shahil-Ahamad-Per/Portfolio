import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogDetailLoading from "../loading";

describe("BlogDetailLoading (app/blog/[id]/loading.tsx)", () => {
  it("renders loading skeleton and status text", () => {
    render(<BlogDetailLoading />);
    expect(screen.getByText("Loading article...")).toBeInTheDocument();
  });
});
