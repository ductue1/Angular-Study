import { Component, OnInit, Input } from '@angular/core';
import { CartComponent } from '../cart.component';
import { CartService } from 'src/app/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  totalPrice = 0;
  quantity = 0;
  localStorage = {};
  @Input() item;
  
  constructor(private cartComponent: CartComponent, private cartService: CartService) { }

  ngOnInit() {
    this.localStorage = this.cartService.getCartItem();
    this.getFirstQuantity();
    this.totalPrice = this.getFirstPrice(this.item.price, this.quantity);
    //console.log(this.getToTalPrice());
    this.cartComponent.getToTalPrice(this.getToTalPrice());
  }

  getToTalPrice() {
    return this.totalPrice;
  }

  getFirstPrice(price, quantity) {
    return price * quantity;
  }

  getFirstQuantity() {
    this.quantity = this.localStorage[this.item.id];
  }

  txtInputChange(price, quantity) {
    this.totalPrice = price * quantity;
    this.cartComponent.getToTalPrice(price * (quantity - this.quantity));
    this.quantity = quantity;
  }

  deleteCartItem(id) {
    this.cartService.deleteCartItem(id);
  }
}
