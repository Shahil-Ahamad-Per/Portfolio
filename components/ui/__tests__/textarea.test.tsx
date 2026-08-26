import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "../textarea";

describe("Textarea component", () => {
  it("renders textarea element and handles change", () => {
    const handleChange = vi.fn();
    render(
      <Textarea
        placeholder="Type message"
        onChange={handleChange}
        className="custom-textarea"
      />
    );

    const textarea = screen.getByPlaceholderText("Type message");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass("custom-textarea");

    fireEvent.change(textarea, { target: { value: "Hello world" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
