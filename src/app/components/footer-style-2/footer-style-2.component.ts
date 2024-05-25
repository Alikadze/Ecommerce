import { Component } from '@angular/core';
import {FooterLinkItemsComponent } from "./footer-link-items/footer-link-items.component";
import { FOOTER_MENU } from '../../data/footer-menu';
import { ButtonComponent } from "../../ui/button/button.component";

@Component({
    selector: 'app-footer-style-2',
    standalone: true,
    templateUrl: './footer-style-2.component.html',
    styleUrl: './footer-style-2.component.scss',
    imports: [
        FooterLinkItemsComponent,
        ButtonComponent
    ]
})
export class FooterStyle2Component {
  
  footerMenu = FOOTER_MENU;

}
