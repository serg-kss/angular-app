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

  constructor(public productService: ProductService) {
    this.productService.getAllOrders().subscribe((response) => {
      this.orders = response;
    });
  }

}
