import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useWelcomeScreen } from "../use-welcome-screen";

describe("use-welcome-screen", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("shows welcome on first visit", () => {
    const { result } = renderHook(() => useWelcomeScreen());
    expect(result.current.showWelcome).toBe(true);
  });

  it("does not show welcome on subsequent visits", () => {
    sessionStorage.setItem("hasVisitedInSession", "true");
    const { result } = renderHook(() => useWelcomeScreen());
    expect(result.current.showWelcome).toBe(false);
  });

  it("hides welcome after handleWelcomeExit is called", () => {
    const { result } = renderHook(() => useWelcomeScreen());
    expect(result.current.showWelcome).toBe(true);

    act(() => {
      result.current.handleWelcomeExit();
    });

    expect(result.current.showWelcome).toBe(false);
  });

  it("persists visit to sessionStorage after exit", () => {
    const { result } = renderHook(() => useWelcomeScreen());

    act(() => {
      result.current.handleWelcomeExit();
    });

    expect(sessionStorage.getItem("hasVisitedInSession")).toBe("true");
  });

  it("returns false when sessionStorage throws", () => {
    const origGetItem = Object.getOwnPropertyDescriptor(
      Storage.prototype,
      "getItem"
    );
    Object.defineProperty(Storage.prototype, "getItem", {
      value: () => {
        throw new Error("unavailable");
      },
      configurable: true,
    });

    const { result } = renderHook(() => useWelcomeScreen());
    expect(result.current.showWelcome).toBe(false);

    if (origGetItem) {
      Object.defineProperty(Storage.prototype, "getItem", origGetItem);
    }
  });
});
