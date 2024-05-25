import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Size} from "../../core/types/size.type";

@Component({
  selector: 'app-size-item',
  standalone: true,
  imports: [],
  templateUrl: './size-item.component.html',
  styleUrl: './size-item.component.scss'
})
export class SizeItemComponent {

  @Input() size: Size = 'm'
  @Input() selected: boolean = false

  @Output() select = new EventEmitter<Size>()
}