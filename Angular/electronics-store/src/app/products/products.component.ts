import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = null;

  constructor(private route: ActivatedRoute, 
              private productService : ProductsService,
              private cartService: CartService) {
    route.params.subscribe(params => { 
      let id = params['id'];
      this.productService.getProductById(id).subscribe(response => {
        this.product = response;
      });
    });
  }

  AddToCart(id:string, quantity:number) {
    this.cartService.addItem(id, quantity);
  }

  ngOnInit() {
  }

}
