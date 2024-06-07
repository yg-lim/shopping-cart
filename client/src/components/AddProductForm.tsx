import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { addNewProduct } from "../services/axios-services";
import { Product as ProductType } from "../types/index";

interface AddProductFormProps {
  setFormVisible: Dispatch<SetStateAction<boolean>>;
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}

export default function AddProductForm({
  setFormVisible,
  setProducts,
}: AddProductFormProps) {
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formQuantity, setFormQuantity] = useState("");

  async function handleSubmitForm(callback?: () => void) {
    try {
      const newProduct = await addNewProduct(
        formName,
        parseFloat(formPrice),
        parseInt(formQuantity),
      );
      setProducts((prev) => [...prev, newProduct]);
      if (callback) callback();
    } catch (err) {
      console.log(err);
    }
  }

  function resetForm() {
    setFormName("");
    setFormPrice("");
    setFormQuantity("");
  }

  return (
    <div className="add-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitForm(resetForm);
        }}
      >
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
          <button type="submit">Add</button>
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
