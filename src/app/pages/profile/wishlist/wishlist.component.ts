import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { Wishlist } from '../../../core/interfaces/wishlist';
import { WishlistFacade } from '../../../facades/wishlist.facade';
import { ProductItemComponent } from "../../../components/product-item/product-item.component";
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.scss',
    imports: [
        AuthHeadComponent,
        ProductItemComponent,
        AsyncPipe,
        ButtonComponent
    ]
})
export class WishlistComponent {
  wishlistFacade = inject(WishlistFacade);
  wishlists$ = this.wishlistFacade.getWishlists();

  deleteWishlist(wishlist: Wishlist) {
    if (!wishlist.id) {
      return;
    }

    this.wishlistFacade.removeWishlist(wishlist.id).subscribe(() => {
      this.wishlists$ = this.wishlistFacade.getWishlists();
    });
  }
}
