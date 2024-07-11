import { Component, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { StockPipe } from '../../core/pipes/stock.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';

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

  route = inject(ActivatedRoute);

}
