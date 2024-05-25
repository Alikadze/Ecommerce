import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../core/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {

  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  feePercentage = 0.18;

  constructor () {
    if (this.isLocalStorageAvailable) {
      this.cart.next(this.getFromLocalStorage());      
    }
  }

  get allProducts() {
    return this.cart.getValue()
  }


  setToLocalStorage(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart.next(cart)
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: Product, quantity: number = 1) {
    console.log('Product added to cart:', product as Product)
    const cart = this.getFromLocalStorage()

    if (cart.find((item: any) => item.id === product.id)) {
      this.updateCart(product as Product, quantity)
      return
    }
    this.setToLocalStorage([...cart, product as Product]);
  }


  removeFromCart(product: Product) {
    console.log('product removed from cart', product);

    const cart = this.getFromLocalStorage();

    this.setToLocalStorage(cart.filter((item: any) => item.id !== product.id));
  }

  updateCart(product: Product, quantity: number = 1) {
    console.log('product Updated', product);

    const cart = this.getFromLocalStorage();

    const updateCart = cart.map((item: any) => {
      if(item.id === product.id) {
        return {
          ...item,
          quantity: quantity
        }
      }
      return item
    })

    this.setToLocalStorage(updateCart);
  }
}