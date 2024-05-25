import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-link-items-2',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './footer-link-items.component.html',
  styleUrl: './footer-link-items.component.scss'
})
export class FooterLinkItemsComponent {
  @Input() title: string = '';

  @Input() links: {title: string, url: string}[] = [];
}
