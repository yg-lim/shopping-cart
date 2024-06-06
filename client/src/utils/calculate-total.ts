import { CartItem } from "../types/index";

export default function calculateTotal(cartItems: CartItem[]): string {
  const sum = cartItems.reduce((total: number, item: CartItem) => {
    return total + item.price;
  }, 0);
  return sum.toFixed(2);
}
