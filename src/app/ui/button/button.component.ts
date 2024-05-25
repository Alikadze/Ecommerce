import { Component, Input, booleanAttribute} from '@angular/core';

@Component({
  selector: 'app-button',
  
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  host: {
    class: 'app-button',

    '[class.app-button--primary]': 'theme === "primary"',
    '[class.app-button--outline]': 'theme === "outline"', 
    '[class.app-button--white]': 'theme === "white"',
    '[class.app-button--outline-black]': 'theme === "outline-black"',
    '[class.alte-button--icon]': 'theme === "icon"',

    

    '[class.app-button--default]': 'size === "default"',
    '[class.app-button--small]': 'size === "small"',


    '[class.app-button--block]': 'block'
  
  }
})

export class ButtonComponent {
  @Input() size: 'default' | 'small' = 'default';
  @Input() theme: 'primary' | 'outline' | 'white' | 'outline-black' | 'icon' = 'primary';
  @Input() disabled: boolean = false;
  @Input({
    transform: booleanAttribute
  }) block: boolean = false;

}
