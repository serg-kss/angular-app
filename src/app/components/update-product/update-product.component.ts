import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  id:number

  constructor(
    public productService: ProductService,
    private modalService: ModalService
    ){

  }
  ngOnInit(): void {
    
  }

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50)
    ]),
    price: new FormControl('', [
      Validators.required   
    ]),
    description: new FormControl('', [
      Validators.required   
    ]),
    image: new FormControl('', [
      Validators.required   
    ]),
    category: new FormControl('', [
      Validators.required   
    ])
  })


  onSubmit(){
    console.log(this.form.value)
   
    this.productService.update(this.id, {
      title: this.form.value.title as string,
      price: this.form.value.price as string,
      description: this.form.value.description as string,
      image: this.form.value.image as string,
      category: this.form.value.category as string     
    })
    this.modalService.showToast()
    this.modalService.close()     
    
  }

  get title (){
    return this.form.controls.title as FormControl
  }

}
