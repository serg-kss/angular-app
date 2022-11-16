import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private modalService: ModalService
    ){

  }

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50)
    ])
  })

 

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value)
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating:{
        rate: 2,
        count: 3
     }
    }).subscribe(()=>{
      this.modalService.showToast();
      this.modalService.close();   
    })
  }

  get title (){
    return this.form.controls.title as FormControl
  }
}
