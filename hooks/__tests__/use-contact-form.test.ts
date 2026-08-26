import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useContactForm, RateLimiter, ApiClient } from "../use-contact-form";

function createMockRateLimiter(
  overrides: Partial<RateLimiter> = {}
): RateLimiter {
  return {
    check: vi.fn().mockReturnValue({ remaining: 5, isLimited: false }),
    increment: vi.fn().mockReturnValue({ count: 1, isLimited: false }),
    ...overrides,
  };
}

function createMockApiClient(overrides: Partial<ApiClient> = {}): ApiClient {
  return {
    submit: vi.fn().mockResolvedValue({ success: true }),
    ...overrides,
  };
}

function createFormEvent() {
  const form = document.createElement("form");
  const nameInput = document.createElement("input");
  nameInput.name = "name";
  nameInput.value = "John";
  const emailInput = document.createElement("input");
  emailInput.name = "email";
  emailInput.value = "john@test.com";
  const messageInput = document.createElement("input");
  messageInput.name = "message";
  messageInput.value = "Hello";
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);

  return {
    preventDefault: vi.fn(),
    currentTarget: form,
  } as unknown as React.FormEvent<HTMLFormElement>;
}

describe("use-contact-form", () => {
  let rateLimiter: RateLimiter;
  let apiClient: ApiClient;

  beforeEach(() => {
    vi.clearAllMocks();
    rateLimiter = createMockRateLimiter();
    apiClient = createMockApiClient();
  });

  it("initializes with default state", () => {
    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.isRateLimited).toBe(false);
    expect(result.current.messageText).toBe("");
  });

  it("checks rate limit on mount", () => {
    renderHook(() => useContactForm({ rateLimiter, apiClient }));
    expect(rateLimiter.check).toHaveBeenCalled();
  });

  it("sets isRateLimited when rate limit is exceeded", () => {
    rateLimiter = createMockRateLimiter({
      check: vi.fn().mockReturnValue({ remaining: 0, isLimited: true }),
    });
    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );
    expect(result.current.isRateLimited).toBe(true);
  });

  it("submits successfully and resets form", async () => {
    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );
    const formRef = { current: document.createElement("form") };
    formRef.current.reset = vi.fn();

    await act(async () => {
      await result.current.handleSubmit(createFormEvent(), formRef);
    });

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(apiClient.submit).toHaveBeenCalledWith({
      name: "John",
      email: "john@test.com",
      message: "Hello",
    });
    expect(rateLimiter.increment).toHaveBeenCalled();
  });

  it("handles submission failure", async () => {
    apiClient = createMockApiClient({
      submit: vi
        .fn()
        .mockResolvedValue({ success: false, message: "API error" }),
    });

    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );
    const formRef = { current: document.createElement("form") };

    await act(async () => {
      await result.current.handleSubmit(createFormEvent(), formRef);
    });

    expect(result.current.error).toBe("API error");
    expect(result.current.isSuccess).toBe(false);
  });

  it("handles network error", async () => {
    apiClient = createMockApiClient({
      submit: vi.fn().mockRejectedValue(new Error("Network")),
    });

    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );
    const formRef = { current: document.createElement("form") };

    await act(async () => {
      await result.current.handleSubmit(createFormEvent(), formRef);
    });

    expect(result.current.error).toBe(
      "Failed to send message. Please try again later."
    );
  });

  it("does not submit when rate limited", async () => {
    rateLimiter = createMockRateLimiter({
      check: vi.fn().mockReturnValue({ remaining: 0, isLimited: true }),
    });

    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );
    const formRef = { current: document.createElement("form") };

    await act(async () => {
      await result.current.handleSubmit(createFormEvent(), formRef);
    });

    expect(apiClient.submit).not.toHaveBeenCalled();
  });

  it("setMessageText updates messageText", () => {
    const { result } = renderHook(() =>
      useContactForm({ rateLimiter, apiClient })
    );

    act(() => {
      result.current.setMessageText("test message");
    });

    expect(result.current.messageText).toBe("test message");
  });
});
