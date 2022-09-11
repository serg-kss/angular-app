import { IProduct } from 'src/app/models/product';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry, tap, throwError, Observable} from "rxjs";
import { ErrorService } from './error.service';
import { Order } from '../models/order.model';
import { AuthToken } from '../models/token';



@Injectable({
   providedIn: 'root'
})
export class ProductService{

   constructor(
      private http: HttpClient,
      private errorService: ErrorService
   ){}

   products: IProduct[]=[]
   product: IProduct
   auth_token: string
   is_admin: boolean


   authenticate(user: string, pass: string):Observable<AuthToken>{
      return this.http.post<AuthToken>('https://fakestoreapi.com/auth/login', {
         username:user,
         password:pass
      }).pipe(
         tap(response => {
            console.log(response)            
            if(response.token !=null){
               this.is_admin = true              
               this.auth_token = response.token               
            }else{
               this.is_admin = false             
            }        
         }),
         catchError(this.errorHandlerAuth.bind(this))
      )
   }
   

   getOne(product_id:number): Observable<IProduct>{
      return this.http.get<IProduct>('https://fakestoreapi.com/products/'+product_id).pipe(
       retry(2),
       tap(product => this.product = product),
       catchError(this.errorHandler.bind(this))
      )
    }

   getAll(): Observable<IProduct[]>{
     return this.http.get<IProduct[]>('https://fakestoreapi.com/products',{
      params: new HttpParams({
         fromObject: {limit: 10}
      })
     }).pipe(
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
     )
   }

   create(product: IProduct): Observable<IProduct>{
      return this.http.post<IProduct>('https://fakestoreapi.com/products',product).pipe(
         tap(response => this.products.push(response))
      )
   }

   update(id:number, data: { title: string; price: string; description: string; image: string; category: string; }){
      fetch('https://fakestoreapi.com/products/'+id,{
            method:"PUT",
            body:JSON.stringify(
               data
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
   }

   delete(product_id:number){
      fetch('https://fakestoreapi.com/products/'+ product_id, {
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
   }


   saveOrder(order: Order): Observable<Order> {
      //return Observable.from([order]);
      console.log(JSON.stringify(order));
      return new Observable(observer => {
         observer.next(order);
      })
   }

   private errorHandler(error: HttpErrorResponse){
      this.errorService.handle(error.message)
      return throwError(() => error.message)
      
   }

   private errorHandlerAuth(error: HttpErrorResponse){
      if (error.status === 401) {
            this.is_admin = false 
            this.errorService.handle('No-no-noooo, ' + error.error + '!')
       } else {
         // The backend returned an unsuccessful response code.
         // The response body may contain clues as to what went wrong.
         console.error(
           `Backend returned code ${error.status}, body was: `, error.error);
       }
       // Return an observable with a user-facing error message.
       return throwError(() => {error.error;});      
   }


   

}