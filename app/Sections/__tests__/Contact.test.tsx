import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactSection from "../Contact";
import * as contactFormHook from "@/hooks/use-contact-form";

describe("ContactSection", () => {
  const defaultHookState = {
    isLoading: false,
    isSuccess: false,
    error: null,
    isRateLimited: false,
    messageText: "",
    setMessageText: vi.fn(),
    handleSubmit: vi.fn((e) => e?.preventDefault?.()),
  };

  beforeEach(() => {
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
    });
  });

  it("renders heading 'Let's Work Together' and contact info links", () => {
    render(<ContactSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Let's Work Together/i })
    ).toBeInTheDocument();
    expect(screen.getByText("contact@shahilahamad.com.np")).toBeInTheDocument();
    expect(
      screen.getByText("github.com/Shahil-Ahamad-Per")
    ).toBeInTheDocument();
    expect(
      screen.getByText("linkedin.com/in/shahil-ahamad")
    ).toBeInTheDocument();
  });

  it("renders form fields (name, email, message)", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send Message/i })
    ).toBeInTheDocument();
  });

  it("calls setMessageText when typing in textarea", () => {
    const setMessageText = vi.fn();
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      setMessageText,
    });

    render(<ContactSection />);
    const textarea = screen.getByLabelText(/Your Message/i);
    fireEvent.change(textarea, { target: { value: "Hello Shahil" } });

    expect(setMessageText).toHaveBeenCalledWith("Hello Shahil");
  });

  it("submits the form and calls handleSubmit", () => {
    const handleSubmit = vi.fn((e) => e?.preventDefault?.());
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      handleSubmit,
    });

    render(<ContactSection />);
    const submitBtn = screen.getByRole("button", { name: /Send Message/i });
    const form = submitBtn.closest("form");
    if (form) {
      fireEvent.submit(form);
      expect(handleSubmit).toHaveBeenCalled();
    }
  });

  it("shows loading state with spinner when isLoading is true", () => {
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      isLoading: true,
    });

    render(<ContactSection />);
    expect(screen.getByText(/Sending Message.../i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toBeDisabled();
    expect(screen.getByLabelText(/Email Address/i)).toBeDisabled();
  });

  it("displays success overlay when isSuccess is true", () => {
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      isSuccess: true,
    });

    render(<ContactSection />);
    expect(screen.getByText("Message Sent!")).toBeInTheDocument();
    expect(screen.getByText(/Thank you for reaching out/i)).toBeInTheDocument();
  });

  it("displays rate limit overlay when isRateLimited is true", () => {
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      isRateLimited: true,
    });

    render(<ContactSection />);
    expect(screen.getByText("Wow, you're awesome!")).toBeInTheDocument();
    expect(
      screen.getByText(/I see you've sent me 5 messages today!/i)
    ).toBeInTheDocument();
  });

  it("displays error message if error is returned from hook", () => {
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      error: "Failed to send message. Please try again.",
    });

    render(<ContactSection />);
    expect(
      screen.getByText("Failed to send message. Please try again.")
    ).toBeInTheDocument();
  });

  it("shows text-red-500 character counter when message reaches maximum length", () => {
    vi.spyOn(contactFormHook, "useContactForm").mockReturnValue({
      ...defaultHookState,
      messageText: "a".repeat(300),
    });

    render(<ContactSection />);
    const counter = screen.getByText("300/300");
    expect(counter).toHaveClass("text-red-500");
  });
});
