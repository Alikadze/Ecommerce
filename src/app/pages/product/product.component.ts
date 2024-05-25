import { Component, OnDestroy, inject } from '@angular/core';
import { ProductFacade } from '../../facades/product.facade';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map, mergeMap, switchMap, takeUntil } from 'rxjs';
import { AsyncPipe, CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { CategoryFacade } from '../../facades/category.facade';
import { ColorFacade } from '../../facades/color.facade';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { ReviewComponent } from "../../components/review/review.component";
import { StockCheckComponent } from "../../components/stock-check/stock-check.component";
import { ColorItemComponent } from "../../components/color-item/color-item.component";
import { SizeItemComponent } from "../../components/size-item/size-item.component";
import { QuantityInputComponent } from "../../components/quantity-input/quantity-input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { DomSanitizer } from '@angular/platform-browser';
import { ProductItemComponent } from "../../components/product-item/product-item.component";
import { Product } from '../../core/interfaces/product';
import { CartFacade } from '../../facades/cart.facade';
import { WishlistFacade } from '../../facades/wishlist.facade';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [
        AsyncPipe,
        JsonPipe,
        BreadcrumbComponent,
        ReviewComponent,
        NgIf,
        StockCheckComponent,
        CurrencyPipe,
        ColorItemComponent,
        SizeItemComponent,
        QuantityInputComponent,
        ButtonComponent,
        ProductItemComponent,
        AsyncPipe,
    ]
})
export class ProductComponent implements OnDestroy{


  route = inject(ActivatedRoute);
  productFacade = inject(ProductFacade);
  categoryFacade = inject(CategoryFacade);
  colorFacade = inject(ColorFacade);
  domSazitizer = inject(DomSanitizer);
  cartFacade = inject(CartFacade);
  wishlistFacade = inject(WishlistFacade);

  selectedColor?: string;
  quantity: number = 1;

  firstCartClick = true;
  firstWishlistClick = true;

  sub$ = new Subject();

  product$ = this.route.params.pipe(
    switchMap((params: any) => this.productFacade.getProduct(params['id'])
      .pipe(
        map(product => {
          var cover
          if (product.images && product.images.length) {
            cover = product.images[0]
          }
          return {
            ...product,
            cover
          }
        }),
        mergeMap(product => this.categoryFacade.getCategoriresById(product.categoryId)
          .pipe(
            map(category => ({...product, category}))
          )
        ),
        mergeMap(productWithCategory => this.colorFacade.getColorById(productWithCategory.colorId)
          .pipe(
            map((color: any) => ({...productWithCategory, color}))
          )
        ),
      )
    )
  );

  relatedProducts$: Observable<Product[]> = this.product$.pipe(
    switchMap(product => this.productFacade.getRelatedProducts(product.categoryId, product.id))
  );

  addToCart(product: any) {
    this.cartFacade.addToCart(product, this.quantity);
    if (!this.firstCartClick) {
      alert("Product Added to the cart");
    } else {
      this.firstCartClick = false;
    }
  }

  addToWishlist(product: any) {
    this.wishlistFacade.addWishlist(product)
      .pipe(
        takeUntil(this.sub$)
      )
      .subscribe((res) => {
        console.log(res);
        if (!this.firstWishlistClick) {
          alert('Product added to wishlist');
        } else {
          this.firstWishlistClick = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete();
  }
  
}
