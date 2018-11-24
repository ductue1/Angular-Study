import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electronics-store';
  products: Array<{id: number, title: string, price: number, thumbnails: string}> = [];

  constructor(private http: HttpClient){
    this.getProducts();
    this.getProductById(1);
  }

  //Get products
  getProducts(){
    this.http.get("https://apps.stdio.vn/vn.stdio.electronics/products")
             .subscribe((response: any) => {
                this.products = response;
             })
  }

  getProductById(id: number){
    this.http.get(`https://apps.stdio.vn/vn.stdio.electronics/products/product?id=${id}`)
             .subscribe((response : any) => {
               //console.log(response);
             })
  }
}
