import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  categories: boolean = false
 


  constructor(public cart: Cart,
    public productService: ProductService) { }

  ngOnInit(): void {
  }

  logOut (){
    this.productService.is_admin = false
  }

  showCategories(){
    if(this.categories){
      this.categories = false
    } else if (!this.categories){
      this.categories = true
    }
  }
 

}
