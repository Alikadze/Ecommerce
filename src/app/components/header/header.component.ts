import {Component, DoCheck, inject} from '@angular/core';
import {ButtonComponent} from "../../ui/button/button.component";
import {RouterLink} from "@angular/router";
import {AuthFacade} from "../../facades";
import {CategoryFacade} from "../../facades/category.facade";
import {CdkMenuTrigger} from "@angular/cdk/menu";
import {AsyncPipe, CurrencyPipe, JsonPipe} from "@angular/common";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { log } from 'node:console';
import { CartFacade } from '../../facades/cart.facade';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    CdkMenuTrigger,
    AsyncPipe,
    JsonPipe,
    CurrencyPipe,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authFacade = inject(AuthFacade);
  categoryFacade = inject(CategoryFacade);
  cartFacade = inject(CartFacade);

  categories$ = this.categoryFacade.getCategories();

  cartCount$ = this.cartFacade.cart$.pipe(
    map((cart) => cart.filter(
      (item) => item?.quantity && item.quantity > 0
    ).reduce((acc, item: any) => acc + (+item?.quantity), 0))
  )


  get user() {
    return this.authFacade.user
  }

  get isAuthenticated() {
    return this.authFacade.isAuthenticated
  }

  logout() {
    this.authFacade.logOut()
  }
}