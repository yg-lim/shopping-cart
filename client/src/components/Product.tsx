import { Dispatch, SetStateAction } from "react";
import { Product as ProductType } from "../types/index";
import { deleteProduct } from "../services/axios-services";

interface ProductProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}

export default function Product({
  id,
  title,
  price,
  quantity,
  setProducts,
}: ProductProps) {
  async function handleDeleteProduct(event: React.SyntheticEvent) {
    event.preventDefault();
    try {
      const deleted = await deleteProduct(id);
      if (!deleted) throw new Error("Bad request");

      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" disabled={quantity === 0}>
            Add to Cart
          </button>
          <button className="edit">Edit</button>
          <button className="delete-button" onClick={handleDeleteProduct}>
            <span>X</span>
          </button>
        </div>
      </div>
    </li>
  );
}
