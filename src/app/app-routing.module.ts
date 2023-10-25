import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "list-product/product/:slug", component: ProductComponent, pathMatch: "full" },
  { path: "list-product/category/:category", component: ListProductComponent, pathMatch: "full"},
  { path: "list-product", component: ListProductComponent, pathMatch: "full" },
  { path: "product-detail", component: ProductDetailComponent, pathMatch: "full"},
  { path: "cart", component: CartComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
