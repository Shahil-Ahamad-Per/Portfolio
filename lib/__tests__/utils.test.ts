import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn utility function", () => {
  it("merges class names correctly", () => {
    const result = cn("p-4", "text-center", "bg-red-500");
    expect(result).toBe("p-4 text-center bg-red-500");
  });

  it("handles conditional class names", () => {
    const isHidden = false;
    const isPrimary = true;
    const result = cn("btn", isHidden && "hidden", isPrimary && "btn-primary");
    expect(result).toBe("btn btn-primary");
  });

  it("resolves Tailwind CSS conflicts by taking the latter class", () => {
    const result = cn("px-2 py-1", "p-4");
    expect(result).toBe("p-4");
  });

  it("handles empty and undefined inputs cleanly", () => {
    const result = cn("", undefined, null, false, "text-sm");
    expect(result).toBe("text-sm");
  });
});
