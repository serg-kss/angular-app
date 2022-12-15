import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutComponent } from './pages/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LimitPipe } from './pipes/limit.pipe';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { Cart } from './models/cart.model';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductFirstGuard } from './productFirst.guard';
import { OrderRepository } from './models/order.repository';
import { Order } from './models/order.model';
import { AuthComponent } from './admin/auth/auth.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthService } from './services/auth.service';
import { GoodsComponent } from './admin/goods/goods.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubNavGoodsComponent } from './components/sub-nav-goods/sub-nav-goods.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ECarsComponent } from './pages/e-cars/e-cars.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TeamComponent } from './pages/team/team.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutComponent,
    NavigationComponent,
    FooterComponent,
    LimitPipe,
    SingleProductComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    AuthComponent,
    AdminComponent,
    GoodsComponent,
    OrdersComponent,
    UpdateProductComponent,
    SubNavGoodsComponent,
    MainPageComponent,
    ECarsComponent,
    CarouselComponent,
    ContactUsFormComponent,
    ContactUsComponent,
    TeamComponent,
    SearchInputComponent,
    BlogComponent,
    LoadingComponent,
    SignInComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule    
  ],
  providers: [Cart, ProductFirstGuard, OrderRepository, Order, AuthService,UpdateProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
