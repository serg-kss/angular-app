import { Component, EventEmitter, Output } from '@angular/core';
import { appearance } from 'src/app/animations/appearance';
import { links_classes } from 'src/app/data/styles-data';
import { Cart } from 'src/app/models/cart.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [appearance]
})
export class NavigationComponent {
  links: string[] = ['Home', 'Goods', 'About Us', 'Blog', 'Contacts', 'Our Team'];
  links_routes: string[] = ['/', '/goods', '/about', 'blog', '/contact-us', '/team'];
  sub_munu: boolean;
  links_classes: string = links_classes;
  buttons_class: string = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
  @Output() addEvent = new EventEmitter();

  constructor(public cart: Cart, public productService: ProductService) {}

  logOut() {
    this.productService.is_admin = false;
  }

  getClasses(){
     return this.links_classes;
  }

  getSubMenuClasses(){

    if(this.sub_munu == undefined){
      this.sub_munu == false;
      return "invisible";
    }

    if(!this.sub_munu){
      return "animate__animated animate__fadeOutUp ";
    }else{
      return "animate__animated animate__fadeInUp";
    }
  }

  subMenu(){  
      this.sub_munu = !this.sub_munu;
      this.getSubMenuClasses();   
  }

  switchDark(){
    this.addEvent.emit();
  }
}
