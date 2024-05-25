import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { QuantityInputComponent } from "../quantity-input/quantity-input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { CurrencyPipe, DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-order-item',
    standalone: true,
    templateUrl: './order-item.component.html',
    styleUrl: './order-item.component.scss',
    imports: [
      NgOptimizedImage,
      CurrencyPipe,
      QuantityInputComponent,
      ButtonComponent,
      DatePipe,
    ]
})
export class OrderItemComponent {
  @Input() product: Product = {} as Product
}
