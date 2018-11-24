import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products = null;

  constructor(private http: HttpClient) {
  }

  getProducts(){
    this.http.get("https://apps.stdio.vn/vn.stdio.electronics/products")
             .subscribe((response: any) => {
       this.products = response;
    })
  }

  ngOnInit() {
    this.getProducts();
  }

}
