import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = null;
  
  constructor(private route: ActivatedRoute, private http : HttpClient) {
    route.params.subscribe(params => { 
      let id = params['id'];
      this.http.get(`https://apps.stdio.vn/vn.stdio.electronics/products/product?id=${id}`)
        .subscribe(response => {
          this.product = response;
        });
    });
  }

  ngOnInit() {
  }

}
