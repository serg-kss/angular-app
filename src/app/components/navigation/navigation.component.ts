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
  links_routes: string[] = ['/', '/goods', '/about-us', '/contacts'];
  links_classes: string = "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-red-700 bg-gray-50 lg:hover:text-red-700 bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
  buttons_class: string = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"

  constructor(public cart: Cart, public productService: ProductService) {}

  ngOnInit(): void {}

  logOut() {
    this.productService.is_admin = false;
  }
  getClasses(){
     return this.links_classes
  }
  
}
