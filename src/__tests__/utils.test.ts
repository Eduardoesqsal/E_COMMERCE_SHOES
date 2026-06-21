import { formatPrice, cn } from "@/lib/utils";

describe("formatPrice", () => {
  it("formats integer price correctly", () => {
    expect(formatPrice(100)).toBe("$100.00");
  });

  it("formats decimal price correctly", () => {
    expect(formatPrice(99.99)).toBe("$99.99");
  });

  it("formats zero correctly", () => {
    expect(formatPrice(0)).toBe("$0.00");
  });

  it("formats large numbers with commas", () => {
    expect(formatPrice(1234.56)).toBe("$1,234.56");
  });

  it("handles very large prices", () => {
    expect(formatPrice(1000000)).toBe("$1,000,000.00");
  });
});

describe("cn", () => {
  it("joins multiple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters out falsy values", () => {
    expect(cn("foo", false, undefined, null, "bar")).toBe("foo bar");
  });

  it("returns empty string for no arguments", () => {
    expect(cn()).toBe("");
  });

  it("returns empty string for all falsy", () => {
    expect(cn(false, undefined, null)).toBe("");
  });

  it("handles single class name", () => {
    expect(cn("only-one")).toBe("only-one");
  });
});
