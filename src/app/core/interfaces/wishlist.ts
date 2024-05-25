import { Product } from "./product";

export interface Wishlist {
  id?: string;
  product: Product;
  userId: string;
}