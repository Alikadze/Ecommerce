import {Component, Input} from '@angular/core';
import {Review} from "../../core/interfaces/product";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() review?: Review
}