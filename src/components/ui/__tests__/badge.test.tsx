import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/badge";

describe("Badge", () => {
  it("renders children text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders with default variant", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  it("renders with all variants without crashing", () => {
    const { rerender } = render(<Badge variant="default">Test</Badge>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Badge variant="success">Test</Badge>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Badge variant="warning">Test</Badge>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Badge variant="danger">Test</Badge>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Badge variant="info">Test</Badge>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge.className).toContain("custom-class");
  });
});
