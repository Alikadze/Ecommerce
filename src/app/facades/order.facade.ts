import {inject, Injectable} from "@angular/core";
import {OrderService} from "../services/order.service";
import {Order} from "../core/interfaces/order";
import { AuthFacade } from "./auth.facade";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderFacade {

  orderService = inject(OrderService);
  authFacade = inject(AuthFacade);

  getOrders() {
    return this.orderService.getOrders(this.authFacade.user.id)
      .pipe(
        map((orders) => {
          return Object.keys(orders).map((key: any) => ({
            ...orders[key],
            id: key
          } as Order))
        })
      )
  }

  getOrderById(id: string) {
    return this.orderService.getOrderById(id)
      .pipe(
        map((order) => ({
          ...order,
          id
        } as Order))
      )
  }

  createOrder(order: Order) {
    return this.orderService.createOrder(order)
  }
}