import { Component, OnInit } from '@angular/core';
import { links_classes } from 'src/app/data/styles-data';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

 
  title = 'Searching by name:';
  loading = false;
  str:string = '';
  link_classes:string = links_classes;

  types: string[] = [
    'Jackets & Coats',
    'Hoodies',
    'T-shirts & Vests',
    'Shirts',
    'Blazers & Suits',
    'Jeans',
    'Trousers',
    'Shorts',
    'Underwear'
  ]
  

  constructor(
    public productService:ProductService,
    public modalService: ModalService,
    ){}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() =>{
      this.loading = false;     
    });
   
  }

}
