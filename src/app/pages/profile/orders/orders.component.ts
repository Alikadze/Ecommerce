import { Component, inject } from '@angular/core';
import { OrderItemComponent } from "../../../components/order-item/order-item.component";
import { OrderFacade } from '../../../facades/order.facade';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { Order } from '../../../core/interfaces/order';
import { RouterLink } from '@angular/router';
import { OrderStatusPipe } from '../../../core/pipes/order-status.pipe';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
    selector: 'app-orders',
    standalone: true,
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss',
    imports: [
        OrderItemComponent,
        AsyncPipe,
        CurrencyPipe,
        DatePipe,
        RouterLink,
        OrderStatusPipe,
        ButtonComponent,
        JsonPipe
    ]
})
export class OrdersComponent {
    orderFacade = inject(OrderFacade);

    orders$: Observable<Order[]> = this.orderFacade.getOrders();

}