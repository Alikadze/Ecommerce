import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
    selector: 'app-best-selling-items',
    standalone: true,
    templateUrl: './best-selling-items.component.html',
    styleUrl: './best-selling-items.component.scss',
    imports: [ButtonComponent]
})
export class BestSellingItemsComponent {
  @Input() cloth: string = '';
  
  @Input() name: string = '';

  @Input() stock: string = '';

  @Input() price: number | string = 0;
}
