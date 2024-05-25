import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-links-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './feature-links-item.component.html',
  styleUrl: './feature-links-item.component.scss'
})
export class FeatureLinksItemComponent {

  @Input() icon : string = '';

  @Input() title : string = '';

  @Input() text : string = '';

}
