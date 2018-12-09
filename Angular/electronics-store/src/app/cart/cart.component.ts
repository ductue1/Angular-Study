import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart = {}
  myArr = []
  totalPrice = 0

  constructor(private cartService: CartService, private route: ActivatedRoute, private productService : ProductsService) {

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
      let id = item;
      this.productService.getProductById(id).subscribe(response => {
        this.myArr.push(response);
      });
    }
  }

  getToTalPrice(price) {
    this.totalPrice += price;
  }
}
