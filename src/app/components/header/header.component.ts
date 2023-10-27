import { Category } from './../../models/category';
import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  categoey?: Category;
  cart?: Cart;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  async ngOnInit() {
    this.cartService.cart$.subscribe({
      next: (cart: Cart) => {
        this.cart = cart;
      }
     });
  }

  navigateToCategory(category: string): void {
    this.router.navigate(['/category', category]);
    console.log(this.router.url);  // Dans votre fonction navigateToCategory par exemple

   }

}
