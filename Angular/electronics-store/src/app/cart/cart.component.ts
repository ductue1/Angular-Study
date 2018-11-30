import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart = {}
  myArr = []
  myCartItem = []

  constructor(private cartService: CartService) {

   }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.myCart = this.cartService.getCartItem();
    this.DictionaryToArray();
  }

  DictionaryToArray() {
    for(var item in this.myCart) {
      this.myArr.push(item);
    }
  }

  getCartItem() {
    
  }
}
