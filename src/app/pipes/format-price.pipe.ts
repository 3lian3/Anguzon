import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(price?: number, product?: Product): any {
      price = price ? price : 0
      const currency = product?.currency || "EUR"
      return new Intl.NumberFormat('fr-Fr',{style: "currency", currency: currency}).format(price)
  }

}
