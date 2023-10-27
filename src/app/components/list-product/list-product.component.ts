import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  isDisplayProductView: boolean = false;
  selectedProduct: Product | undefined;
  productsSubscription: Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productsSubscription = this.productService.getProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.products = products;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log('Error');
          this.isLoading = true;
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }

  ngOnDestroy() {
    this.productsSubscription?.unsubscribe();
  }

  handleDeleteProduct(product: Product) {
    this.products = this.products.filter((p) => p.id !== product.id);
  }

  handleDisplayProductView(product: Product) {
    if (product) {
      this.selectedProduct = product;
    }
  }

}
