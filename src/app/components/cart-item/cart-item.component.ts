import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../core/interfaces/product";
import {CurrencyPipe, DatePipe, NgOptimizedImage} from "@angular/common";
import {QuantityInputComponent} from "../quantity-input/quantity-input.component";
import {ButtonComponent} from "../../ui/button/button.component";
import { Order } from '../../core/interfaces/order';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    
    QuantityInputComponent,
    ButtonComponent,
    NgOptimizedImage,
    CurrencyPipe,
    QuantityInputComponent,
    ButtonComponent
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() product: Product = {} as Product

  @Output() remove = new EventEmitter<Product>()
  @Output() update = new EventEmitter<{
    product: Product,
    quantity: number
  }>()
}