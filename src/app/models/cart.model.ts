import { Injectable } from "@angular/core";
import {IProduct} from "./product"


@Injectable()
export class Cart {

   public lines: CartLine[] = [];
   public itemCount: number = 0;
   public cartPrice: number = 0;

   addLine(product:IProduct, quantity: number = 1){
      let line = this.lines.find(line => line.product.id == product.id);
         if (line != undefined) {
            line.quantity += quantity;
         } else {
            this.lines.push(new CartLine(product, quantity));
         }
      this.recalculate(); 
   }

   updateQuantity(product: IProduct, quantity: Event) {
      
      let line = this.lines.find(line => line.product.id == product.id);
      if (line != undefined) {
         line.quantity = Number((quantity.target as HTMLInputElement).value);
      }
      this.recalculate();
   } 

   removeLine(id: any) {
      let index = this.lines.findIndex(line => line.product.id == id);
      this.lines.splice(index);
      this.recalculate();
   } 

   private recalculate() {
      this.itemCount = 0;
      this.cartPrice = 0;
      
      this.lines.forEach(l => {
         this.itemCount += l.quantity;
         this.cartPrice += (l.quantity * l.product.price);
      })
     
   } 
   clear(){
      this.lines = []
   }
}

export class CartLine {

   constructor(
      public product: IProduct,
      public quantity: number
   ) {}

   get lineTotal() {
      return this.quantity * this.product.price;
   }
} 