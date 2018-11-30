import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myCart = {}

  constructor(private http: HttpClient) { }

  addItem(id:string, quantity:number) {
    this.myCart[id] = quantity;
    this.setCartItem(id, quantity);
  }

  setCartItem(id:string, quantity:number) {
    localStorage.setItem(environment.cartStorage, JSON.stringify(this.myCart));
  }

  getCartItem() {
    return JSON.parse(localStorage.getItem(environment.cartStorage));
  }
}
