import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthToken } from "../models/token";
import { ProductService } from "./product.service";

@Injectable()
   export class AuthService {
      constructor(private datasource: ProductService) {}

      authenticate(username: string, password: string): Observable<AuthToken> {
         return this.datasource.authenticate(username, password);
      }

      get authenticated(): boolean {
         return this.datasource.auth_token != null;
      }
   clear() {
      this.datasource.auth_token = '';
      }
   }