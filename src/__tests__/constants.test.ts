import { products, categories } from "@/lib/constants";

describe("products data", () => {
  it("has at least 8 products", () => {
    expect(products.length).toBeGreaterThanOrEqual(8);
  });

  it("every product has required fields", () => {
    for (const product of products) {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.price).toBeGreaterThan(0);
      expect(product.images.length).toBeGreaterThan(0);
      expect(product.category).toBeDefined();
      expect(product.rating).toBeGreaterThanOrEqual(0);
      expect(product.rating).toBeLessThanOrEqual(5);
    }
  });

  it("has at least 2 featured products", () => {
    const featured = products.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(2);
  });

  it("all product IDs are unique", () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("categories data", () => {
  it("has at least 4 categories", () => {
    expect(categories.length).toBeGreaterThanOrEqual(4);
  });

  it("every category has required fields", () => {
    for (const category of categories) {
      expect(category.id).toBeDefined();
      expect(category.name).toBeDefined();
      expect(category.slug).toBeDefined();
      expect(category.image).toBeDefined();
    }
  });

  it("all category IDs are unique", () => {
    const ids = categories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
