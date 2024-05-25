import { Component, OnDestroy, inject } from '@angular/core';
import { AuthHeadComponent } from "../../auth/auth-head/auth-head.component";
import { KeyValueComponent } from "../../../components/key-value/key-value.component";
import { CartFacade } from "../../../facades/cart.facade";
import { Subject, map, take, takeUntil } from "rxjs";
import { AsyncPipe, CurrencyPipe } from "@angular/common";
import { ButtonComponent } from "../../../ui/button/button.component";
import { Router, RouterLink } from "@angular/router";
import { CartItemComponent } from "../../../components/cart-item/cart-item.component";
import { Product } from "../../../core/interfaces/product";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    AuthHeadComponent,
    KeyValueComponent,
    AsyncPipe,
    CurrencyPipe,
    ButtonComponent,
    RouterLink,
    CartItemComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnDestroy {

  cartFacade = inject(CartFacade);
  router = inject(Router);

  carts$ = this.cartFacade.cart$;

  sub$ = new Subject;

  sum$ = this.cartFacade.cart$.pipe(
    map((cart) => cart.filter(
      (item) => item?.quantity && item.quantity > 0
    ).reduce((acc, item: any) => acc + (+item?.quantity * +item.price), 0))
  );

  tax$ = this.sum$.pipe(
    map(sum => sum * this.cartFacade.feePercentage)
  );

  total$ = this.sum$.pipe(
    map(sum => sum + (sum * this.cartFacade.feePercentage))
  );

  checkout() {
    this.sum$.pipe(
      takeUntil(this.sub$),
      take(1),
    ).subscribe(sum => {
      if (sum === 0) {
        return;
      }

      this.router.navigate(['/profile/checkout']);
    });
  }

  removeFromCart(product: Product) {
    this.cartFacade.removeFromCart(product);
  }

  updateToCart($event: { product: Product; quantity: number }) {
    this.cartFacade.updateCart($event.product, $event.quantity);
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
