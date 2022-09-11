import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "../services/product.service";
import { Order } from "./order.model";


@Injectable()
export class OrderRepository {
   private orders: Order[] = [];

   constructor(private dataSource: ProductService) {}

   getOrders(): Order[] {
      return this.orders;
   }

   saveOrder(order: Order): Observable<Order> {
      return this.dataSource.saveOrder(order);
   }
}