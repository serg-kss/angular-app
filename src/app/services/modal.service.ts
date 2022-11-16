import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);
  itemAdd$ = new BehaviorSubject<boolean>(false);

  open() { 
    this.isVisible$.next(true);
  }

  close() { 
    this.isVisible$.next(false);
  }

  showToast() { 
    this.itemAdd$.next(true);
  }

  hideToast() { 
    this.itemAdd$.next(false);
  }

}
