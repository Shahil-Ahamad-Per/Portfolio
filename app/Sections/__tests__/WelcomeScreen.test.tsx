import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import WelcomeScreen from "../WelcomeScreen";

describe("WelcomeScreen", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.innerHeight = 800;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the welcome screen with Welcome heading", () => {
    const onExitMock = vi.fn();
    render(<WelcomeScreen onExit={onExitMock} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Welcome"
    );
    expect(screen.queryByText("Scroll to explore")).not.toBeInTheDocument();
  });

  it("reveals 'Scroll to explore' text after 500ms animation delay", () => {
    const onExitMock = vi.fn();
    render(<WelcomeScreen onExit={onExitMock} />);

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByText("Scroll to explore")).toBeInTheDocument();
  });

  it("does not call onExit if scroll is below 50% of innerHeight", () => {
    const onExitMock = vi.fn();
    render(<WelcomeScreen onExit={onExitMock} />);

    window.scrollY = 200; // < 400 (800 * 0.5)
    fireEvent.scroll(window);

    expect(onExitMock).not.toHaveBeenCalled();
  });

  it("calls onExit when user scrolls past 50% of window.innerHeight", () => {
    const onExitMock = vi.fn();
    render(<WelcomeScreen onExit={onExitMock} />);

    window.scrollY = 500; // > 400 (800 * 0.5)
    fireEvent.scroll(window);

    expect(onExitMock).toHaveBeenCalledTimes(1);
  });

  it("cleans up scroll listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const onExitMock = vi.fn();
    const { unmount } = render(<WelcomeScreen onExit={onExitMock} />);

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });
});
