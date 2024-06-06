import { useState, useEffect } from "react"
import CartItem from "./CartItem";

import { CartItem as CartItemType } from "../types/index";
import calculateTotal from "../utils/calculate-total";
import { getCartItems } from "../services/axios-services";

// may need a state from parent component so that
// useEffect callback here will run whenever product is added
// and re-fetch new cart-data
// then update cart and total
// a lot is happening, may need to deconstruct this Cart into further components
export default function Cart() {
  const [ cartItems, setCartItems ] = useState<CartItemType[]>([]);
  const [ total, setTotal ] = useState<string | null>(null);
  const emptyCart = cartItems.length === 0;

  useEffect(() => {
    async function loadCart() {
      const items = await getCartItems();
      const itemsTotal = calculateTotal(items);
      setCartItems(items);
      setTotal(itemsTotal);
    }
    loadCart();
  }, []);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {emptyCart ?
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </> :
        <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: CartItemType) => {
            return <CartItem
              key={item._id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
            />
        })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">
              Total: ${total}
            </td>
          </tr>
        </tfoot>
      </table>
      }
      <button className="checkout" disabled={emptyCart}>Checkout</button>
    </div>
  )
}