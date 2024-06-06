interface ProductProps {
  title: string;
  price: number;
  quantity: number;
}

// maybe take out product actions into separate component
// maybe even separate product details into its own component too lol
export default function Product({ title, price, quantity }: ProductProps) {
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
          <button className="delete-button">
            <span>X</span>
          </button>
        </div>
      </div>
    </li>
  );
}
