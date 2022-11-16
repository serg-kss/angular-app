import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  cities: string[] = ['London', 'Dublin', 'Amsterdam', 'Odessa'];
  endpoints: string[] = ['#21', '#15', '#33'];

  constructor() { }

  get_all_cities(){
    // get cities from API and add to cities
   }

   get_all_endpoints(){
    // get endpoints of delivery for special city from API and add to endpoints
   }
}
