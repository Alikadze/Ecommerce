import {inject, Injectable} from "@angular/core";
import {OrderService} from "../services/order.service";
import {Order} from "../core/interfaces/order";
import { AuthFacade } from "./auth.facade";
import { map, throwError } from "rxjs";
import { WishlistService } from "../services/wishlist.service";
import { Wishlist } from "../core/interfaces/wishlist";
import { Product } from "../core/interfaces/product";
import { error } from "console";

@Injectable({
  providedIn: 'root'
})
export class WishlistFacade {

  orderService = inject(WishlistService);
  authFacade = inject(AuthFacade);

  getWishlists() {
    return this.orderService.getWishlists(this.authFacade.user.id)
      .pipe(
        map((wishlists) => {
          return Object.keys(wishlists).map((key: any) => ({
            ...wishlists[key],
            id: key
          } as Wishlist))
        })
      )
  }

  getOrderById(id: string) {
    return this.orderService.getwishlistById(id)
      .pipe(
        map((wishlist) => ({
          ...wishlist,
          id
        } as Wishlist))
      )
  }

  addWishlist(product: Product) {

    if(!this.authFacade.isAuthenticated){
      return throwError(() => "")
    }

    const wishlist: Wishlist = {
      product,
      userId: this.authFacade.user.id
    }

    return this.orderService.addwishlist(wishlist)
  }

  removeWishlist(id: string) {
    return this.orderService.removeWishlist(id)
  }
}