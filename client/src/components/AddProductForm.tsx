import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface AddProductFormProps {
  setFormVisible: Dispatch<SetStateAction<boolean>>;
}

export default function AddProductForm({
  setFormVisible,
}: AddProductFormProps) {
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formQuantity, setFormQuantity] = useState("");

  return (
    <div className="add-form">
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={formPrice}
            onChange={(e) => setFormPrice(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={formQuantity}
            onChange={(e) => setFormQuantity(e.target.value)}
            required
          />
        </div>
        <div className="actions form-actions">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setFormVisible(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
