import { Component } from '@angular/core';
import {FooterLinkItemsComponent } from "./footer-link-items/footer-link-items.component";
import { FOOTER_MENU } from '../../data/footer-menu';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [
      FooterLinkItemsComponent,
    ]
})
export class FooterComponent {
  
  footerMenu = FOOTER_MENU;

}
