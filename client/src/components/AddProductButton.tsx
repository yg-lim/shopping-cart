import { SetStateAction } from "react";

interface AddProductButtonProps {
  setFormVisible: React.Dispatch<SetStateAction<boolean>>;
}

export default function AddProductButton({
  setFormVisible,
}: AddProductButtonProps) {
  function handleAddProductButtonClick(event: React.SyntheticEvent) {
    event.preventDefault();
    setFormVisible(true);
  }

  return (
    <button
      className="add-product-button"
      onClick={handleAddProductButtonClick}
    >
      Add A Product
    </button>
  );
}
