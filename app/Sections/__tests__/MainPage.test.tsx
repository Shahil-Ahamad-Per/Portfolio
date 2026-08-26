import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "../MainPage";

describe("HeroSection / MainPage", () => {
  it("renders name, title, and tagline correctly", () => {
    const scrollToSectionMock = vi.fn();
    render(<HeroSection scrollToSection={scrollToSectionMock} />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Shahil.*Ahamad/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Full-Stack Developer passionate about creating elegant digital experiences/i
      )
    ).toBeInTheDocument();
  });

  it("calls scrollToSection with 'projects' when clicking 'View My Work'", () => {
    const scrollToSectionMock = vi.fn();
    render(<HeroSection scrollToSection={scrollToSectionMock} />);

    const viewWorkBtn = screen.getByRole("button", { name: /View My Work/i });
    fireEvent.click(viewWorkBtn);

    expect(scrollToSectionMock).toHaveBeenCalledWith("projects");
  });

  it("calls scrollToSection with 'contact' when clicking 'Get In Touch'", () => {
    const scrollToSectionMock = vi.fn();
    render(<HeroSection scrollToSection={scrollToSectionMock} />);

    const contactBtn = screen.getByRole("button", { name: /Get In Touch/i });
    fireEvent.click(contactBtn);

    expect(scrollToSectionMock).toHaveBeenCalledWith("contact");
  });

  it("renders social links with appropriate href and target attributes", () => {
    const scrollToSectionMock = vi.fn();
    render(<HeroSection scrollToSection={scrollToSectionMock} />);

    const githubLink = screen.getByRole("link", { name: /GitHub Profile/i });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/Shahil-Ahamad-Per"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    const linkedinLink = screen.getByRole("link", {
      name: /LinkedIn Profile/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/shahil-ahamad/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");

    const emailLink = screen.getByRole("link", { name: /Send Email/i });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:contact@shahilahamad.com.np"
    );
  });
});
