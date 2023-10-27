import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  slug: string | undefined;
  imageMin: string | undefined;
  product: Product | undefined;
  productSubscription: Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.productSubscription = this.ProductService.getProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.product = products.filter(p => p.slug === this.slug)[0];
          this.isLoading = false;
          this.imageMin = this.product.imageUrl[0];
        },
        error: (error: any) => {
          console.log("Error: ", error);
          this.isLoading = false;
        }
      })
    // console.log(this.slug);
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

  handleChangeImage(url: string): void {
    this.imageMin = url;
  }

  addToCart(event: any): void{
    if (this.product) {
      this.cartService.addProduct(this.product);
    }
   }
}

