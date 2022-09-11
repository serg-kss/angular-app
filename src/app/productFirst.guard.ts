import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { ProductPageComponent } from "./pages/product-page/product-page.component";


@Injectable()
export class ProductFirstGuard {
   private firstNavigation = true;

   constructor(private router: Router) { }

   canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): boolean {
      if (this.firstNavigation) {
         this.firstNavigation = false;
         if (route.component != ProductPageComponent) {
            this.router.navigateByUrl("/");
            return false;
         }
      }
      return true;
   }
}