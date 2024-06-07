import { useState, useEffect } from "react";
import "./assets/index.css";
import { Product as ProductType } from "./types/index";

import Cart from "./components/Cart";
import ProductListing from "./components/ProductListing";
import AddProductButton from "./components/AddProductButton";
import AddProductForm from "./components/AddProductForm";

import { getProducts } from "./services/axios-services";

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing products={products} />
        {formVisible ? (
          <AddProductForm
            setFormVisible={setFormVisible}
            setProducts={setProducts}
          />
        ) : (
          <AddProductButton setFormVisible={setFormVisible} />
        )}
      </main>
    </div>
  );
}

export default App;
