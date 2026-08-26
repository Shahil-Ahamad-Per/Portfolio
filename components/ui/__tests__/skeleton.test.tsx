import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "../skeleton";

describe("Skeleton component", () => {
  it("renders with animation class and custom classes", () => {
    const { container } = render(
      <Skeleton className="custom-test h-10 w-40" />
    );
    const el = container.firstChild;
    expect(el).toHaveClass(
      "animate-pulse",
      "rounded-md",
      "bg-muted",
      "h-10",
      "w-40",
      "custom-test"
    );
  });
});
