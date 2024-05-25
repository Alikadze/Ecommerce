import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";
import { FeatureLinksItemComponent } from './feature-links-item/feature-links-item/feature-links-item.component';
import { FEATURE_LINKS } from '../../data/feature-links';
import { BEST_SELLER } from '../../data/best-seller';
import { BestSellingItemsComponent } from "./best-selling-items/best-selling-items.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { PRODUCT_LIST } from '../../data/product-list';
import { AsyncPipe, JsonPipe } from '@angular/common';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeroBannerComponent,
        FeatureLinksItemComponent,
        BestSellingItemsComponent,
        ButtonComponent,
        AsyncPipe,
        JsonPipe
    ]
})
export class HomeComponent {

    featuesMenu = FEATURE_LINKS;

    bestSeller = BEST_SELLER;

    productList = PRODUCT_LIST;
    
}
