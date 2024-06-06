import axios from "axios";
import { CartItem, Product } from "../types/index";
const baseUrl = "http://localhost:5001/api";

export async function getCartItems(): Promise<CartItem[]> {
  const { data } = await axios.get(baseUrl + "/cart");
  return data;
}

export async function getProducts(): Promise<Product[]> {
  const { data } = await axios.get(baseUrl + "/products");
  return data;
}
