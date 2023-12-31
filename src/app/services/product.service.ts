import { environment } from './../../environments/environment';
import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private api: string = 'http://localhost:4200/assets/api/products.json';

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(): void {

    this.http.get<any[]>(this.api).subscribe(data => {
      this.products = data;
    });
  }

  public searchByCategory(category: string): Observable<Product[]> {
    return new Observable(observer => {
      const filtered = this.products.filter(product => product.category === category);
      observer.next(filtered);
      observer.complete();
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  addProduct(product: Product): void { }

  editProduct(id: string, product: Product): void { }

  deleteProduct(id: string, product: Product): void { }

}


