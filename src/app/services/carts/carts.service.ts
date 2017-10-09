import { Cart } from './../../models/cart';
import { Injectable } from '@angular/core';
import  {Subject} from 'rxjs/Subject';
import  { Observable } from 'rxjs/Observable';
@Injectable()
export class CartsService {
  private subject= new Subject<any>();
  constructor() { }

  sendCarts(cart:Cart) {
    this.subject.next({ 
      type:cart.type,
      name: cart.name,
      quantity: cart.quantity
    });
  }

  increaseCarts(name:string) {
    this.subject.next({
      type:'increase',
      name: name,
      quantity:1
    });
  }

  decreaseCarts(name:string) {
    this.subject.next({ 
      type:'decrease',
      name: name,
      quantity:-1
    });
  }

  clearCarts() {
      this.subject.next();
  }

  getCarts(): Observable<any> {
      return this.subject.asObservable();
  }
}
