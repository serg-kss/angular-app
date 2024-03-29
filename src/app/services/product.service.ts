import { IProduct } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, retry, tap, throwError, Observable } from 'rxjs';
import { ErrorService } from './error.service';
import { AuthToken } from '../models/token';
import { Delivery } from '../models/delivery';
import { UploadPic } from '../models/picture';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  dark_mode: boolean = false;

  products: IProduct[] = [];
  product: IProduct;
  auth_token: string;
  is_admin: boolean = false;
  order_number: string;

  authenticate(user: string, pass: string): Observable<AuthToken> {
    return this.http
      .post<AuthToken>('https://fakestoreapi.com/auth/login', {
        username: user,
        password: pass,
      })
      .pipe(
        tap((response) => {
          console.log(response);
          if (response.token != null) {
            this.is_admin = true;
            this.auth_token = response.token;
          } else {
            this.is_admin = false;
          }
        }),
        catchError(this.errorHandlerAuth.bind(this))
      );
  }

  getOne(product_id: number): Observable<IProduct> {
    return this.http
      .get<IProduct>('https://fakestoreapi.com/products/' + product_id)
      .pipe(
        retry(2),
        tap((product) => (this.product = product)),
        catchError(this.errorHandler.bind(this))
      );
  }

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 10 },
        }),
      })
      .pipe(
        retry(2),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(tap((response) => this.products.push(response)));
  }

  uploadPic(pic:UploadPic): Observable<UploadPic> {
    return this.http.post<UploadPic>('http://localhost:8080/api/upload_pic', pic);
  }

  getAllPictures(): Observable<UploadPic[]> {
    return this.http
      .get<UploadPic[]>('http://localhost:8080/api/get_pic', {
        params: new HttpParams({
          fromObject: { limit: 1000 },
        }),
      })
      .pipe(
        retry(2),
        catchError(this.errorHandler.bind(this))
      );
  } 

  update(
    id: number,
    data: {
      title: string;
      price: string;
      description: string;
      image: string;
      category: string;
    }
  ) {
    fetch('https://fakestoreapi.com/products/' + id, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  delete(product_id: number) {
    fetch('https://fakestoreapi.com/products/' + product_id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  getAllOrders(): Observable<Delivery[]> {
    return this.http
      .get<Delivery[]>('http://localhost:8080/api/orders', {
        params: new HttpParams({
          fromObject: { limit: 1000 },
        }),
      })
      .pipe(
        retry(2),
        catchError(this.errorHandler.bind(this))
      );
  } 

  saveOrder(order: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(
      'http://localhost:8080/api/create-order',
      order
    ).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    );   
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

  private errorHandlerAuth(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.is_admin = false;
      this.errorService.handle('No-no-noooo, ' + error.error + '!');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      error.error;
    });
  }
}
