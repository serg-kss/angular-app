import { Component, OnInit } from '@angular/core';
import { appearance } from 'src/app/animations/appearance';
import { Cart } from 'src/app/models/cart.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [appearance]
})
export class NavigationComponent implements OnInit {
  links: string[] = ['Home', 'Goods', 'About Us', 'Contacts'];

  constructor(public cart: Cart, public productService: ProductService) {}

  ngOnInit(): void {}

  logOut() {
    this.productService.is_admin = false;
  }
}
