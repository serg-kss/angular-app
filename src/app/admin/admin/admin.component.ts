import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  products_field: boolean = true;
  orders_field: boolean = false;
  imageSrc: string;
  show_message: boolean = false;
  text_message: string;
  @ViewChild('someInput', {static: false}) someInput: ElementRef;
  counter: number = 0;

  constructor(public sendPic:ProductService) { }

  change_status(){
    this.products_field = !this.products_field;
    this.orders_field = !this.orders_field;
  }

  getClasses_1(): string {
    if (this.products_field){
      return "bg-zinc-900 text-white";
    } else return "text-zinc-900 hover:text-zinc-900 border-zinc-900";
  }

  getClasses_2(): string {
    if (this.orders_field){
      return "bg-zinc-900 text-white";
    } else return "text-zinc-900 hover:text-zinc-900 border-zinc-900";
  }

  onFileChange(event: any){

    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.counter = event.target.files.length;
      console.log(this.counter);
      reader.readAsDataURL(file);     
      reader.onload = () => {    
        this.imageSrc = reader.result as string;   
      };
    }
  }

  message(){
    this.show_message = true;
    this.counter == 0;
    this.someInput.nativeElement.value = null;
    setTimeout(() => this.show_message = false, 3000);
  }
  
  upload(){
    if(this.counter != 0){
      this.sendPic
      .uploadPic({pic:this.imageSrc})
      .subscribe((response)=>{
        if(response.pic == 'Ok'){
          this.text_message = 'Pic Uploaded to DB';
          this.message();
        }else{
          this.text_message = 'Error';
          this.message();
        }
      })
    }else if(this.counter == 0){
      this.text_message = 'Choose a file!';
      this.message();
    }   
  }
}
