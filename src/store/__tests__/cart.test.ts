import { useCart } from "@/store/cart";
import { products } from "@/lib/constants";

const testProduct = products[0];

describe("cart store", () => {
  beforeEach(() => {
    const { clearCart } = useCart.getState();
    clearCart();
  });

  it("starts with an empty cart", () => {
    expect(useCart.getState().items).toEqual([]);
    expect(useCart.getState().getItemCount()).toBe(0);
    expect(useCart.getState().getSubtotal()).toBe(0);
  });

  it("adds an item to the cart", () => {
    useCart.getState().addItem(testProduct);
    expect(useCart.getState().items).toHaveLength(1);
    expect(useCart.getState().items[0].product.id).toBe(testProduct.id);
    expect(useCart.getState().items[0].quantity).toBe(1);
  });

  it("increments quantity when adding the same product", () => {
    useCart.getState().addItem(testProduct);
    useCart.getState().addItem(testProduct);
    expect(useCart.getState().items).toHaveLength(1);
    expect(useCart.getState().items[0].quantity).toBe(2);
  });

  it("adds items with different colors as separate entries", () => {
    useCart.getState().addItem(testProduct, 1, "#000");
    useCart.getState().addItem(testProduct, 1, "#fff");
    expect(useCart.getState().items).toHaveLength(2);
  });

  it("removes an item from the cart", () => {
    useCart.getState().addItem(testProduct);
    useCart.getState().removeItem(testProduct.id);
    expect(useCart.getState().items).toHaveLength(0);
  });

  it("updates item quantity", () => {
    useCart.getState().addItem(testProduct);
    useCart.getState().updateQuantity(testProduct.id, 5);
    expect(useCart.getState().items[0].quantity).toBe(5);
  });

  it("does not set quantity below 1", () => {
    useCart.getState().addItem(testProduct);
    useCart.getState().updateQuantity(testProduct.id, 0);
    expect(useCart.getState().items[0].quantity).toBe(1);
  });

  it("calculates item count correctly", () => {
    useCart.getState().addItem(testProduct, 3);
    useCart.getState().addItem(products[1], 2);
    expect(useCart.getState().getItemCount()).toBe(5);
  });

  it("calculates subtotal correctly", () => {
    const price1 = testProduct.price;
    const product2 = products[1];
    const price2 = product2.price;
    useCart.getState().addItem(testProduct, 2);
    useCart.getState().addItem(product2, 1);
    expect(useCart.getState().getSubtotal()).toBeCloseTo(price1 * 2 + price2);
  });

  it("clears the cart", () => {
    useCart.getState().addItem(testProduct);
    useCart.getState().addItem(products[1]);
    useCart.getState().clearCart();
    expect(useCart.getState().items).toHaveLength(0);
    expect(useCart.getState().getItemCount()).toBe(0);
  });
});
