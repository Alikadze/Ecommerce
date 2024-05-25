import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Color} from "../../core/interfaces/color";

@Component({
  selector: 'app-color-item',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './color-item.component.html',
  styleUrl: './color-item.component.scss'
})
export class ColorItemComponent {
  @Input() color: Color = {} as Color;

  @Input({
    transform: booleanAttribute
  }) active = false;

  @Output() selected: EventEmitter<Color> = new EventEmitter<Color>();

}