import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { join } from 'path';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myCart = {}

  constructor(private http: HttpClient) {
      this.getOldItem();
   }

  addItem(id:string, quantity:number) {
    this.myCart[id] = quantity;
    this.setCartItem();
  }

  getOldItem() {
    this.myCart = this.getCartItem();
  }

  setCartItem() {
    localStorage.setItem(environment.cartStorage, JSON.stringify(this.myCart));
  }

  getCartItem() {
    return JSON.parse(localStorage.getItem(environment.cartStorage));
  }

  deleteCartItem(id) {
    console.log(id);
    //delete this.myCart[id];
    //this.setCartItem();
  }
}
