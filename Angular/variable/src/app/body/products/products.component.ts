import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<{title: string, price: number, thumbnails: string}>;
  students: Array<{id: string, name: string}>;
  products2: Array<{name: string, price: number, url: string}> = [];
  mode: string = 'view';
  constructor() { 
    this.products = [
      { title: 'Arduino Uno R3', price: 300000, thumbnails: 'arduinor3.jpg'},
      { title: 'Arduino Uno R2', price: 200000, thumbnails: 'arduinor3.jpg'},
      { title: 'Arduino Uno R1', price: 100000, thumbnails: 'arduinor3.jpg'}
    ]

    this.students = [
      { id: '1', name: 'Vinh' },
      { id: '2', name: 'Huy' },
      { id: '3', name: 'Hien' }
    ]

  }

  ngOnInit() {
  }

  OnClick(txtName, txtPrice, txtUrl){
    this.products2.push({name: txtName, price: txtPrice, url: 'txtUrl'});
  }

}
