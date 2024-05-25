
import {Category} from "./category";
import {Color} from "./color";
import {Size} from "../types/size.type";

export interface Product{
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  inStock: boolean;
  images: string[];
  colorId: string;
  size: Size;
  reviews: Review,
  categoryId: string;
  cover?: string;
  category: Category;
  color: Color;
  quantity?: number;

}

export interface Review{
  stars: number;
  count: number;
}
