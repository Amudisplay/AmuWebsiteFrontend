import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  products:Product[];
  constructor() { }

  ngOnInit() {
    this.products=[
      {
        name:'Black AMU',
        src:'assets/images/preorder-blackHD.png',
        price:4999.95
      },
      {
        name:'White AMU',
        src:'assets/images/preorder-whiteHD.png',
        price:4999.95
      }];
  }


}
