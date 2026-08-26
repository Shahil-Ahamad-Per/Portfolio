import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useReadingProgress } from "../use-reading-progress";

describe("useReadingProgress hook", () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      configurable: true,
    });
    window.innerHeight = 1000;
    window.scrollY = 0;
  });

  it("returns 0 initial progress", () => {
    const { result } = renderHook(() => useReadingProgress(true));
    expect(result.current).toBe(0);
  });

  it("calculates reading progress on scroll event", () => {
    const { result } = renderHook(() => useReadingProgress(true));

    act(() => {
      // scrollHeight (2000) - innerHeight (1000) = 1000 docHeight
      window.scrollY = 500;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(50);
  });

  it("caps progress at 100%", () => {
    const { result } = renderHook(() => useReadingProgress(true));

    act(() => {
      window.scrollY = 1500;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(100);
  });

  it("does not attach listener when enabled is false", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    renderHook(() => useReadingProgress(false));

    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
      expect.any(Object)
    );
  });

  it("handles zero docHeight gracefully", () => {
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 1000,
      configurable: true,
    });
    window.innerHeight = 1000;

    const { result } = renderHook(() => useReadingProgress(true));
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(0);
  });
});
