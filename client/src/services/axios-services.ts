import axios from "axios";
import { CartItem } from '../types/index';
const baseUrl = 'http://localhost:5001/api';

export async function getCartItems(): Promise<CartItem[]> {
  const { data } = await axios.get(baseUrl + '/cart');
  return data;
}