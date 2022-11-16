import { IProduct } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ModalService } from 'src/app/services/modal.service';
import { UpdateProductComponent } from 'src/app/components/update-product/update-product.component';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  list_of_products: IProduct[] = [];
  loading: boolean = false;

  constructor(
    public productService: ProductService, 
    public modalService: ModalService,
    public updateProductComponent: UpdateProductComponent) { }

  ngOnInit(): void {
    this.loading = true;
    this.getProducts();
  }

  getProducts(){
    this.productService.getAll().subscribe(()=>{
      this.loading = false;
    })
    this.list_of_products = this.productService.products;
  }

  delete(id:any){
    this.productService.delete(id);
    this.loading = true;
    this.getProducts();
  }
    
}
