import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{

  slug: string | undefined;
  product: Product | undefined;
  productSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.productSubscription = this.ProductService.getProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.product = products.filter(p => p.slug === this.slug)[0];
        },
        error: (error: any) => {
          console.log("Error: ", error);
        }
    })
    // console.log(this.slug);
  }

  ngOnDestroy(): void {
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }
}
