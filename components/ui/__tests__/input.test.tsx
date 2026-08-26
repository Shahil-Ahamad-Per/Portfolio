import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../input";

describe("Input component", () => {
  it("renders input element with attributes and handles change", () => {
    const handleChange = vi.fn();
    render(
      <Input
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
        className="custom-input"
      />
    );

    const input = screen.getByPlaceholderText("Enter email");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveClass("custom-input");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
