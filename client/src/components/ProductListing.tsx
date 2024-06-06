import { useState, useEffect } from 'react';
import { Product as ProductType } from '../types/index';
import { getProducts } from '../services/axios-services';
import Product from './Product';

export default function ProductListing() {
  const [ products, setProducts ] = useState<ProductType[]>([]);
  
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => <Product
                                  key={product._id}
                                  title={product.title}
                                  price={product.price}
                                  quantity={product.quantity}
                                  />)}
      </ul>
    </div>
  )
}