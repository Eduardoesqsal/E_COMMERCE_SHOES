import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders with primary variant by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  it("renders with different variants without crashing", () => {
    const { rerender } = render(<Button variant="primary">Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Button variant="secondary">Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Button variant="outline">Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Button variant="ghost">Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Button variant="danger">Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<Button variant="info">Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders with different sizes without crashing", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText("Small")).toBeInTheDocument();

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText("Medium")).toBeInTheDocument();

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText("Large")).toBeInTheDocument();
  });

  it("disables the button when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByText("Click").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
