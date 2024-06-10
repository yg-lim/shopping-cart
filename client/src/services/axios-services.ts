import axios from "axios";
import { z } from "zod";
import { CartItem, Product } from "../types/index";
const baseUrl = "http://localhost:5001/api";

const cartItemSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const deleteProductResponseSchema = z.string();
const getCartItemsResponseSchema = z.array(cartItemSchema);
const getProductsResponseSchema = z.array(productSchema);

export async function getCartItems(): Promise<CartItem[]> {
  const { data } = await axios.get(baseUrl + "/cart");
  return getCartItemsResponseSchema.parse(data);
}

export async function getProducts(): Promise<Product[]> {
  const { data } = await axios.get(baseUrl + "/products");
  return getProductsResponseSchema.parse(data);
}

export async function addNewProduct(
  title: string,
  price: number,
  quantity: number,
): Promise<Product> {
  const { data } = await axios.post(baseUrl + "/products", {
    title,
    price,
    quantity,
  });

  return productSchema.parse(data);
}

export async function deleteProduct(productId: string): Promise<boolean> {
  const { data } = await axios.delete(baseUrl + `/products/${productId}`);
  return !deleteProductResponseSchema.parse(data);
}
