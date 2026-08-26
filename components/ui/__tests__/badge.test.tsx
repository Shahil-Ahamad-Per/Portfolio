import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge, badgeVariants } from "../badge";

describe("Badge component", () => {
  it("renders with default and different variants", () => {
    const { rerender } = render(<Badge>Default Badge</Badge>);
    expect(screen.getByText("Default Badge")).toHaveClass("bg-primary");

    rerender(<Badge variant="secondary">Secondary Badge</Badge>);
    expect(screen.getByText("Secondary Badge")).toHaveClass("bg-secondary");

    rerender(<Badge variant="destructive">Destructive Badge</Badge>);
    expect(screen.getByText("Destructive Badge")).toHaveClass("bg-destructive");

    rerender(<Badge variant="outline">Outline Badge</Badge>);
    expect(screen.getByText("Outline Badge")).toHaveClass("text-foreground");
  });

  it("exports badgeVariants generator", () => {
    expect(badgeVariants({ variant: "outline" })).toContain("text-foreground");
  });
});
