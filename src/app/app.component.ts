import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzDropDownModule,
    NzMenuModule  
  ],
  template: '<router-outlet>',
})
export class AppComponent {
  title = 'ecomerce';
}
