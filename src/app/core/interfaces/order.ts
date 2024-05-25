import {User} from "./user";
import {Product} from "./product";

export type OrderStatus =  'pending' | 'completed' | 'canceled';

export interface Order {
  id?: string;
  userId: string;
  user: User;
  products: Product[]
  total: number;
  status: OrderStatus;
  createdAt: Date;
  shipping: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    email: string;
    fullName: string;
  }
}