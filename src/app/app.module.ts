import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductComponent } from './components/product/product.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDescriptionComponent } from './components/productInfo/product-description/product-description.component';
import { ProductCompositionComponent } from './components/productInfo/product-composition/product-composition.component';
import { ManufacturingComponent } from './components/productInfo/manufacturing/manufacturing.component';
import { ProductTabsDescriptionComponent } from './components/productInfo/product-tabs-description/product-tabs-description.component';
import { CategoryComponent } from './components/category/category.component';
import { FormatImageUrlPipe } from './pipes/format-image-url.pipe';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    NotFoundComponent,
    ListProductComponent,
    ProductComponent,
    ContainerComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ModalProductComponent,
    LoaderComponent,
    BreadcrumbComponent,
    PaymentComponent,
    ProductDescriptionComponent,
    ProductCompositionComponent,
    ManufacturingComponent,
    ProductTabsDescriptionComponent,
    CategoryComponent,
    FormatImageUrlPipe,
    FormatPricePipe,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
