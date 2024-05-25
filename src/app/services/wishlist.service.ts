import { Injectable } from '@angular/core';
import {ApiService} from "../core/services";
import {Order} from "../core/interfaces/order";
import { FirebaseDocument } from '../core/interfaces/firebase-document';
import { Wishlist } from '../core/interfaces/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService extends ApiService {

  getWishlists(userId: string) {
    return this.get<FirebaseDocument<Wishlist>[]>('wishlists.json', {
      orderBy: '"userId"',
      equalTo: `"${userId}"`
    })
  }

  getwishlistById(id: string) {
    return this.get<FirebaseDocument<Wishlist>>(`wishlists/${id}.json`)
  }

  addwishlist(wishlist: Wishlist) {
    return this.post<FirebaseDocument<any>>('wishlists.json', wishlist)
  }

  removeWishlist(id: string) {
    return this.delete('wishlists.json', id)

  }


}