import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products = null;

  constructor(private productService : ProductsService) {
  }

  getProducts(){
    this.productService.getProducts().subscribe((response: any) => {
       this.products = response;
    });
  }

  ngOnInit() {
    this.getProducts();
  }

}
