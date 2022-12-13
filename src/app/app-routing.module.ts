import { TeamComponent } from './pages/team/team.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuard } from './admin/auth. guard';
import { AuthComponent } from './admin/auth/auth.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from './pages/about/about.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProductFirstGuard } from './productFirst.guard';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'goods', component: ProductPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'single_product', component: SingleProductComponent, canActivate: [ProductFirstGuard]},
  {path: 'cart', component: CartDetailComponent, canActivate: [ProductFirstGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [ProductFirstGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: ''} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
