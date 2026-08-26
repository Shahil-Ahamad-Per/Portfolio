import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button, buttonVariants } from "../button";

describe("Button component", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: "Click me" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("bg-primary");
  });

  it("handles different variants and sizes", () => {
    const { rerender } = render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("bg-destructive", "h-11");

    rerender(
      <Button variant="outline" size="sm">
        Outline
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("border", "h-9");

    rerender(
      <Button variant="ghost" size="icon">
        Icon
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass(
      "hover:bg-accent",
      "h-10",
      "w-10"
    );

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole("button")).toHaveClass("underline-offset-4");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");
  });

  it("renders as child when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Custom Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: "Custom Link Button" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("handles click events and disabled state", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    const btn = screen.getByRole("button", { name: "Disabled Button" });
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("generates button variant classnames via helper", () => {
    const classes = buttonVariants({ variant: "default", size: "default" });
    expect(classes).toContain("bg-primary");
  });
});
