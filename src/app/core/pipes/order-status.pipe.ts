import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../interfaces/order';

@Pipe({
  name: 'orderStatus',
  standalone: true
})
export class OrderStatusPipe implements PipeTransform {

  transform(value?: OrderStatus): string {
    switch(value){
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      case 'canceled':
        return 'Canceled';
      default:
        return '';
    }
  }

}
