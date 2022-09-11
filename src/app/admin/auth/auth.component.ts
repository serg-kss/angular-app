import { ErrorService } from './../../services/error.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public username: string;
  public password: string;
  public errorMessage: any = null

  constructor(
    private router: Router, 
    private auth: AuthService, 
    public productService:ProductService,
    public errorService: ErrorService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password).subscribe(
        () => {
          console.log(this.productService.is_admin)
          if (this.productService.is_admin) {
            this.router.navigateByUrl("/admin");
          }
        }
      )    
    } 
  }
}
