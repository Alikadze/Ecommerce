import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { StockPipe } from '../../core/pipes/stock.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    StockPipe,
    RouterLink
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent{
  @Input() product!: Product | null;

    
}
