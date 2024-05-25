import { Injectable, inject } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Observable, map } from "rxjs";
import { Product } from "../core/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
  productService: ProductService = inject(ProductService);

  getProducts(params: { categoryId: string[], colorId?: string, size?: string }): Observable<Product[]> {
    return this.productService.getProducts()
      .pipe(
        map((products) => {
          return Object.keys(products).map((key: any) => ({
            ...products[key],
            id: key
          } as Product));
        }),
        map((products) => products.filter((product) => {
          const categoryMatch = params.categoryId?.includes(product.categoryId);
          const colorMatch = !params.colorId || product.colorId === params.colorId;
          const sizeMatch = !params.size || product.size === params.size;
          return categoryMatch && colorMatch && sizeMatch;
        }))
      );
  }

  getProduct(id: string) {
    return this.productService.getProduct(id)
      .pipe(
        map((product) => {
          return {
            ...product,
            id,
          } as Product;
        })
      );
  }

  getRelatedProducts(categoryId: string, productId: string) {
    return this.productService.getRelatedProducts(categoryId)
      .pipe(
        map((products) => {
          return Object.keys(products).map((key: any) => ({
            ...products[key],
            id: key
          } as Product));
        }),
        map((products) => {
          return products.filter((product) => product.id !== productId).slice(0, 4);
        })
      );
  }
}
