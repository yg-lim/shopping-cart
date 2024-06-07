import Product from "./Product";
import { Product as ProductType } from "../types/index";
import { Dispatch, SetStateAction } from "react";

interface ProductListingProps {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}

export default function ProductListing({
  products,
  setProducts,
}: ProductListingProps) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            setProducts={setProducts}
          />
        ))}
      </ul>
    </div>
  );
}
