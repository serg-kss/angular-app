import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductIdService {

  productId:number = 0

  setProductId(id:any) { 
    this.productId = id
  }
}
