import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTableOfContents } from "../use-table-of-contents";

describe("useTableOfContents hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = `
      <div id="blog-content">
        <h2 id="section-1">Section 1</h2>
        <h3 id="section-1-1">Section 1.1</h3>
        <h3 id="section-1-2">Section 1.2</h3>
        <h2 id="section-2">Section 2</h2>
      </div>
    `;

    // Ensure innerText returns textContent in JSDOM
    document.querySelectorAll("h2, h3").forEach((el) => {
      Object.defineProperty(el, "innerText", {
        get() {
          return this.textContent;
        },
        configurable: true,
      });
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = "";
  });

  it("returns empty toc initially and populates after timeout", () => {
    const { result } = renderHook(() =>
      useTableOfContents("#blog-content", true)
    );

    expect(result.current).toEqual([]);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toHaveLength(2);
    expect(result.current[0].text).toBe("Section 1");
    expect(result.current[0].children).toHaveLength(2);
    expect(result.current[0].children?.[0].text).toBe("Section 1.1");
    expect(result.current[1].text).toBe("Section 2");
  });

  it("does not populate toc when enabled is false", () => {
    const { result } = renderHook(() =>
      useTableOfContents("#blog-content", false)
    );

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current).toEqual([]);
  });

  it("slugifies heading text when heading id is missing", () => {
    document.body.innerHTML = `
      <div id="blog-content">
        <h2>Un-ID Heading Test</h2>
      </div>
    `;
    document.querySelectorAll("h2").forEach((el) => {
      Object.defineProperty(el, "innerText", {
        get() {
          return this.textContent;
        },
        configurable: true,
      });
    });

    const { result } = renderHook(() =>
      useTableOfContents("#blog-content", true)
    );

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0].id).toBe("un-id-heading-test");
  });
});
