import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card";

describe("Card components", () => {
  it("renders all card subcomponents correctly", () => {
    render(
      <Card className="custom-card">
        <CardHeader className="custom-header">
          <CardTitle className="custom-title">Card Heading</CardTitle>
          <CardDescription className="custom-desc">
            Card subtitle
          </CardDescription>
        </CardHeader>
        <CardContent className="custom-content">
          <p>Body text</p>
        </CardContent>
        <CardFooter className="custom-footer">
          <button type="button">Action</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Card Heading")).toBeInTheDocument();
    expect(screen.getByText("Card subtitle")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });
});
