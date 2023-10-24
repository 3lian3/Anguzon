import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product | undefined;
  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() displayProductView: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

  deleteProduct(product: Product | undefined) {
    // this.deleteProductItem.emit(product);
  }

  handleClickProduct(product: Product | undefined){
    this.displayProductView.emit(product);
  }


}
