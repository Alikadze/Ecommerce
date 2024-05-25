import { Injectable } from '@angular/core';
import {ApiService} from "../core/services";
import {Order} from "../core/interfaces/order";
import { FirebaseDocument } from '../core/interfaces/firebase-document';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiService {

  getOrders(userId: string) {
    return this.get<FirebaseDocument<Order>[]>('orders.json', {
      orderBy: '"userId"',
      equalTo: `"${userId}"`
    })
  }

  getOrderById(id: string) {
    return this.get<FirebaseDocument<Order>>(`orders/${id}.json`)
  }

  createOrder(order: Order) {
    return this.post('orders.json', order)
  }


}