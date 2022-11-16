import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  products_field: boolean = true;
  orders_field: boolean = false;

  constructor() { }


  change_status(){
    this.products_field = !this.products_field;
    this.orders_field = !this.orders_field;
  }

  getClasses_1(): string {
    if (this.products_field){
      return "bg-teal-500 text-white";
    } else return "text-grey-600 hover:text-teal-600 border-teal-600";
  }
  getClasses_2(): string {
    if (this.orders_field){
      return "bg-teal-500 text-white";
    } else return "text-grey-600 hover:text-teal-600 border-teal-600";
  }

}
