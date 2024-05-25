import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {StockPipe} from "../../core/pipes/stock.pipe";

@Component({
  selector: 'app-stock-check',
  standalone: true,
    imports: [
        NgIf,
        StockPipe
    ],
  templateUrl: './stock-check.component.html',
  styleUrl: './stock-check.component.scss'
})
export class StockCheckComponent {
  @Input() inStock?: boolean = false
}