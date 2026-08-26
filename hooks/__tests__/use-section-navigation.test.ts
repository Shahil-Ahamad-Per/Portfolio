import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSectionNavigation } from "../use-section-navigation";

function createSection(id: string, offsetTop: number, offsetHeight: number) {
  const el = document.createElement("div");
  el.id = id;
  Object.defineProperty(el, "offsetTop", { value: offsetTop, writable: true });
  Object.defineProperty(el, "offsetHeight", {
    value: offsetHeight,
    writable: true,
  });
  Object.defineProperty(el, "getBoundingClientRect", {
    value: () => ({ top: offsetTop - window.scrollY, height: offsetHeight }),
  });
  document.body.appendChild(el);
  return el;
}

describe("use-section-navigation", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    window.history.replaceState(null, "", "/");
    window.scrollTo(0, 0);
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  it("returns home as initial active section", () => {
    const { result } = renderHook(() => useSectionNavigation(true));
    expect(result.current.activeSection).toBe("home");
  });

  it("scrolls to section on mount when hash is present in URL", () => {
    createSection("about", 600, 600);
    window.location.hash = "#about";

    const { result } = renderHook(() => useSectionNavigation(true));
    expect(result.current.activeSection).toBe("about");
  });

  it("does nothing when not active", () => {
    createSection("home", 0, 600);
    const { result } = renderHook(() => useSectionNavigation(false));
    expect(result.current.activeSection).toBe("home");
  });

  it("scrollToSection scrolls to the element and updates activeSection with mobile offset", () => {
    window.innerWidth = 800;
    createSection("home", 0, 600);
    createSection("about", 600, 600);
    const scrollToSpy = vi.spyOn(window, "scrollTo");

    const { result } = renderHook(() => useSectionNavigation(true));

    act(() => {
      result.current.scrollToSection("about");
    });

    expect(result.current.activeSection).toBe("about");
    expect(scrollToSpy).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: "smooth" })
    );
  });

  it("scrollToSection does not change active section for non-existent section", () => {
    createSection("home", 0, 600);

    const { result } = renderHook(() => useSectionNavigation(true));

    act(() => {
      result.current.scrollToSection("nonexistent");
    });

    expect(result.current.activeSection).toBe("home");
  });

  it("hashchange event updates active section", () => {
    createSection("home", 0, 600);
    createSection("contact", 1200, 600);
    vi.spyOn(window, "scrollTo");

    const { result } = renderHook(() => useSectionNavigation(true));

    act(() => {
      window.location.hash = "#contact";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    expect(result.current.activeSection).toBe("contact");
  });

  it("updates active section during scroll", () => {
    createSection("home", 0, 600);
    createSection("about", 600, 600);
    createSection("skills", 1200, 600);

    const { result } = renderHook(() => useSectionNavigation(true));

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 650, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.activeSection).toBe("about");
  });
});
