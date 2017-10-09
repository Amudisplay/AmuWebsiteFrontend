import { CartsService } from './../../services/carts/carts.service';
import { Cart } from './../../models/cart';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  @Input('cartViews') cartViews:Cart[];
  @Input('totalCarts') totalCarts:number;
  constructor(
    private cartsService: CartsService
  ) { }

  ngOnInit() {
  }
  decrease(name){
    console.log(name);
    this.cartsService.decreaseCarts(name);
  }
  increase(name){
    console.log(name);
    this.cartsService.increaseCarts(name);
  }
}
