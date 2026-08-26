import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitToWeb3Forms } from "../contact-api";

describe("contact-api / submitToWeb3Forms", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("submits contact form data to Web3Forms and returns success response", async () => {
    const mockApiResponse = {
      success: true,
      message: "Form submitted successfully",
    };
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockApiResponse),
    } as unknown as Response);

    const result = await submitToWeb3Forms({
      name: "Alice Doe",
      email: "alice@example.com",
      message: "Hello world",
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({
        method: "POST",
        body: expect.any(FormData),
      })
    );
    expect(result).toEqual(mockApiResponse);
  });

  it("handles error response from Web3Forms", async () => {
    const mockApiResponse = { success: false, message: "Invalid key" };
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockApiResponse),
    } as unknown as Response);

    const result = await submitToWeb3Forms({
      name: "Alice Doe",
      email: "alice@example.com",
      message: "Hello world",
    });

    expect(result).toEqual(mockApiResponse);
    expect(result.success).toBe(false);
  });
});
