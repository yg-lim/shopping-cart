import Product from "./Product";
import { Product as ProductType } from "../types/index";

interface ProductListingProps {
  products: ProductType[];
}

export default function ProductListing({ products }: ProductListingProps) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </div>
  );
}
