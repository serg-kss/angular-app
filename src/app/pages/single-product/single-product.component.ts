import { IProduct } from './../../models/product';
import { Cart } from './../../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { ProductIdService } from 'src/app/services/product-id.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  loading = false

  constructor(
    public productService:ProductService,
    public productIdService: ProductIdService,
    public cart: Cart) { }

  ngOnInit(): void {
    this.loading = true
    this.productService.getOne(this.productIdService.productId).subscribe(() =>{
      this.loading = false
    })
  }

  addProductToCart(product:IProduct) {
    this.cart.addLine(product);
  }

}
