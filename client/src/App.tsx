import { useState } from "react";
import "./assets/index.css";
import Cart from "./components/Cart";
import ProductListing from "./components/ProductListing";

import AddProductButton from "./components/AddProductButton";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing />
        {formVisible ? (
          <AddProductForm setFormVisible={setFormVisible} />
        ) : (
          <AddProductButton setFormVisible={setFormVisible} />
        )}
      </main>
    </div>
  );
}

export default App;
