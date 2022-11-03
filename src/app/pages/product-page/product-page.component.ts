import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

 
  title = 'Searching by name of the product:'
  loading = false
  //products$: Observable<IProduct[]>
  term = ''
  

  constructor(
    public productService:ProductService,
    public modalService: ModalService,
    ){}

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() =>{
      this.loading = false
      
    })
   
  }

}
