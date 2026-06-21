import { render, screen } from "@testing-library/react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/constants";

const product = products[0];

describe("ProductCard", () => {
  it("renders product name", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  it("renders product category", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.category)).toBeInTheDocument();
  });

  it("renders product price", () => {
    render(<ProductCard product={product} />);
    const formattedPrice = `$${product.price.toFixed(2)}`;
    expect(screen.getByText(formattedPrice)).toBeInTheDocument();
  });

  it("renders original price with strikethrough when originalPrice exists", () => {
    render(<ProductCard product={product} />);
    if (product.originalPrice) {
      const origPrice = `$${product.originalPrice.toFixed(2)}`;
      expect(screen.getByText(origPrice)).toBeInTheDocument();
    }
  });

  it("renders rating and review count", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.rating.toFixed(1))).toBeInTheDocument();
    expect(
      screen.getByText(`(${product.reviews.toLocaleString()})`)
    ).toBeInTheDocument();
  });

  it("links to the product detail page", () => {
    render(<ProductCard product={product} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${product.id}`);
  });

  it("renders product image", () => {
    render(<ProductCard product={product} />);
    const img = screen.getByAltText(product.name);
    expect(img).toBeInTheDocument();
  });
});
