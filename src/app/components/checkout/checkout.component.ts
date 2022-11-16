import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';
import { OrderRepository } from 'src/app/models/order.repository';
import { DeliveryService } from 'src/app/services/delivery.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  delivery: string[] = ['From shop', 'New Post delivery'];
  payment_type: string[] = ['In shop', 'By card now'];
  payment_type_post: string = 'On post';
  chosen_payment: string;
  payment_method: boolean = false;
  name: string;
  phone: string;
  deliveries: string;
  city_form: string;
  endpoint:string;
  post_data: string = '';
  goods: string = '';
  order_num: number = 1;
  new_post: boolean = false;
  city_chosen: boolean = false;
  endpoint_choosen: boolean = false;

  constructor(
    public repository: OrderRepository,
    public order: Order,
    public cart: Cart,
    public productService: ProductService,
    public delivery_data: DeliveryService
  ) {
    this.productService.getAllOrders().subscribe((response)=>{ 
      this.order_num = response.length;
    })
    //this.delivery_data.get_all_cities()
  }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
    phone: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });

  formCity = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });
  formPost = new FormGroup({
    endpoint: new FormControl('', [Validators.required]),
  });
  formPayment = new FormGroup({
    payment: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.name = this.form.value.name as string;
    this.phone = this.form.value.phone as string;
    this.deliveries = this.form.value.state as string;

    for (let i = 0; i < this.cart.lines.length; i++) {
      this.goods =
        this.goods +
        this.cart.lines[i].product.title +
        '  Units:' +
        this.cart.lines[i].quantity +
        ';' +
        this.cart.lines[i].lineTotal;
    }
    this.goods = this.goods + this.cart.cartPrice + '; ';

    if (this.deliveries == this.delivery[0]) {
      this.payment_method = true;
    } else if (this.deliveries == this.delivery[1]) {
      this.new_post = true;
    }
  }

  onSubmitCity() {
    this.city_chosen = true;
    this.city_form = this.formCity.value.city as string;
  }
  onSubmitPost() {
    this.endpoint_choosen = true;
    this.payment_method = true;
    this.endpoint = this.formPost.value.endpoint as string;
  }
  onSubmitCreateOrder() {
    this.chosen_payment = this.formPayment.value.payment as string;
    this.productService
      .saveOrder({
        order_num: this.order_num,
        name: this.name,
        phone: this.phone,
        method: this.deliveries,
        post_data: this.post_data + ' ' + this.city_form + ' ' + this.endpoint + ' ' + this.chosen_payment,
        goods: this.goods,
        amount: this.cart.cartPrice.toString()
      }) 
      .subscribe(() => {     
        this.orderSent = true;
        this.submitted = false;
        this.cart.clear();
      });
  }
}
