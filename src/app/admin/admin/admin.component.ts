import { Component } from '@angular/core';
import { UploadPic } from 'src/app/models/picture';
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
  pic: UploadPic;
  show_message: boolean = false;
  text_message: string;

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
      reader.readAsDataURL(file);
     
      reader.onload = () => {    
        this.imageSrc = reader.result as string;   
      };

    }
  }

  upload(){
    console.log(this.imageSrc)
    this.sendPic
      .uploadPic({pic:this.imageSrc})
      .subscribe((response)=>{
        if(response.pic == 'Ok'){
          this.text_message = 'Pic Uploaded to DB';
          this.show_message = true;
          setTimeout(() => this.show_message = false, 3000);
        }else{
          this.text_message = 'Error';
          this.show_message = true;
          setTimeout(() => this.show_message = false, 3000);

        }
      })
  }

}
