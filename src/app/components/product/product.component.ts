import { Component, Input } from "@angular/core";
import { IProduct } from 'src/app/models/product';
import { ProductIdService } from "src/app/services/product-id.service";

@Component({
   selector: 'app-product',
   templateUrl: './product.component.html'
})
export class ProductComponent{

   @Input() product: IProduct

   details = false;
   show_details = 'Show details';
   hide_details = 'Hide details';
   route = '/single_product';

   constructor(
      public productId: ProductIdService, 
      ){}
  
}