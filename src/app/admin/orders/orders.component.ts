import { Delivery } from './../../models/delivery';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders: Delivery[] = [];
  orders_amount: number;
  total_amount_EUR: number;

  constructor(public productService: ProductService) {
    this.productService.getAllOrders().subscribe((response) => {
      this.orders = response;
      this.orders_amount = response.length;

      let i = 0;
      for (let index = 0; index < response.length; index++) {
        const element = parseFloat(response[index].amount);
        i = i + element;        
      }

      this.total_amount_EUR = i;
    });
  }
}
