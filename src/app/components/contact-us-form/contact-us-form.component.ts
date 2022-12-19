import { Message } from './../../models/message';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { appearance } from 'src/app/animations/appearance';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css'],
  animations: [appearance]
})
export class ContactUsFormComponent {

  messageSent: boolean = false;
  str: string = 'You have sent the message to us'
  str_1: string = 'Thank You! We will reply as soon as possible!'

  name: string;
  email: string;
  message: string;

  constructor(public contactUsService: ContactUsService, private router: Router ) { }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.name = this.form.value.name as string;
    this.email = this.form.value.email as string;
    this.message = this.form.value.message as string;

    const data: Message = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    
    this.contactUsService.sendMessage(data).subscribe((resp)=>{
      if(resp.new_message == 'Ok'){
        this.messageSent = true;
      }else{
        this.router.navigate(['/error500'])
      }      
    })  
  }



}
