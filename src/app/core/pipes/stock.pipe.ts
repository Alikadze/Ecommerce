import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
  standalone: true
})
export class StockPipe implements PipeTransform {

  transform(value?: boolean): 'IN STOCK' | 'OUT OF STOCK' {
   
    return value ? 'IN STOCK' : 'OUT OF STOCK';
  }

}
