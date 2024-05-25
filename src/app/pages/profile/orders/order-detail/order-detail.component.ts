import { Component, inject } from '@angular/core';
import { OrderFacade } from '../../../../facades/order.facade';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { ProductItemComponent } from "../../../../components/product-item/product-item.component";
import { OrderItemComponent } from "../../../../components/order-item/order-item.component";
import { KeyValueComponent } from "../../../../components/key-value/key-value.component";
import { OrderStatusPipe } from '../../../../core/pipes/order-status.pipe';

@Component({
    selector: 'app-order-detail',
    standalone: true,
    templateUrl: './order-detail.component.html',
    styleUrl: './order-detail.component.scss',
    imports: [
        AsyncPipe,
        JsonPipe,
        ProductItemComponent,
        OrderItemComponent,
        KeyValueComponent,
        DatePipe,
        CurrencyPipe,
        OrderStatusPipe
    ]
})
export class OrderDetailComponent {
  orderFacade = inject(OrderFacade);
  route = inject(ActivatedRoute);

  order$ = this.route.params.pipe(
    map(params => params['id']),
    switchMap(id => this.orderFacade.getOrderById(id))
  )

}
