import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  message:string;

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>('https://xxxxxxxxxxxxx', message)
  };
}
