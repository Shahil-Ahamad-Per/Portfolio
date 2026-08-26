import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SocialDock } from "../SocialDock";
import { FLOATING_SOCIAL_LINKS } from "@/lib/nav-config";

describe("SocialDock", () => {
  it("renders floating social links dock", () => {
    render(<SocialDock />);
    expect(
      screen.getByRole("complementary", { name: "Social profiles quick dock" })
    ).toBeInTheDocument();
  });

  it("renders all social links with appropriate hrefs", () => {
    render(<SocialDock />);
    FLOATING_SOCIAL_LINKS.forEach((social) => {
      const link = screen.getByRole("link", { name: social.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", social.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
