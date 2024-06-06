export interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem extends Omit<Product, "createdAt" | "updatedAt"> {}
