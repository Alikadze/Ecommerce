import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { FooterStyle2Component } from "../footer-style-2/footer-style-2.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [
        HeaderComponent,
        FooterComponent,
        RouterOutlet,
        FooterStyle2Component
    ]
})
export class LayoutComponent {

}
