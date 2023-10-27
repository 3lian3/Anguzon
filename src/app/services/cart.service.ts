import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { generateId } from '../helpers/utils';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = new Cart();

  cart$ = new BehaviorSubject<Cart>(this.cart);

  constructor(private localStorageService: LocalStorageService) {
    const cart = localStorageService.getItem('cart');
    if (cart) {
      this.cart$.next(cart);
    } else {
      this.cart.id = generateId();
    }
  }

  addProduct(product: Product, quantity: number = 1) {
    if (product) {
      const articleIndex = this.cart.articles.findIndex((article: Article) => article?.product?.id === product.id)
      if (articleIndex !== -1) {
        this.cart.articles[articleIndex].quantity++;
      } else {
        const newArticle = new Article();
        newArticle.product = product;
        newArticle.quantity = quantity;
        newArticle.total = product.price * quantity;
        this.cart.articles.push(newArticle);
      }
      this.updateCart();
    }
  }

  removeProduct(product: Product, quantity: number = 1) {
    if (product) {
      const articleIndex = this.cart.articles.findIndex((article: Article) => article?.product?.id === product.id)
      if (articleIndex !== -1) {
        if (this.cart.articles[articleIndex].quantity = 1) {
          this.cart.articles = this.cart.articles.filter((article: Article) => article?.product?.id !== product.id)
        } else {
          if (this.cart.articles[articleIndex].quantity > quantity) {
            this.cart.articles[articleIndex].quantity -= quantity;
          } else {
            this.cart.articles = this.cart.articles.filter((article: Article) => article?.product?.id !== product.id)
          }
        }
        this.updateCart();
      }
    }
  }
  updateCart() {
    this.cart.quantity = 0
    this.cart.total = 0

    this.cart.articles.forEach((article: Article) => {
      this.cart.quantity += article.quantity;
      if (article?.product) {
        this.cart.total += article?.product?.price * article.quantity;
      }
    })
    this.localStorageService.setItem('cart', this.cart);
    this.cart$.next(this.cart);
  }
}



