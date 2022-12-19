import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/api/save-message', message).pipe(
      retry(2),
    );   
  }

  getAllMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>('http://localhost:8080/api/contacts', {
        params: new HttpParams({
          fromObject: { limit: 100 },
        }),
      })
      .pipe(
        retry(2),
      );
  } 
}
