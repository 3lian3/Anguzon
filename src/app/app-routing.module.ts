import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCompositionComponent } from './components/productInfo/product-composition/product-composition.component';
import { ManufacturingComponent } from './components/productInfo/manufacturing/manufacturing.component';
import { ProductTabsDescriptionComponent } from './components/productInfo/product-tabs-description/product-tabs-description.component';

export const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "list-product/product/:slug",
    component: ProductComponent,
    // pathMatch: "full"
    children: [
      {
        path: "",
        redirectTo: "product-tabs-description",
        pathMatch: "prefix"
      },
      {
        path: "product-tabs-description",
        component: ProductTabsDescriptionComponent
      },
      {
        path: "product-composition",
        component: ProductCompositionComponent
      },
      {
        path: "manufacturing",
        component: ManufacturingComponent
      }
    ]
  },
  { path: "categoey/:category", component: ListProductComponent, pathMatch: "full"},
  { path: "list-product/category/:category", component: ListProductComponent, pathMatch: "full"},
  { path: "list-product", component: ListProductComponent, pathMatch: "full" },
  { path: "product-detail", component: ProductDetailComponent, pathMatch: "full"},
  { path: "cart", component: CartComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
