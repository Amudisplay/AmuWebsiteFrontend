import { CartView } from './models/cartView';
import { Cart } from './models/cart';
import { CartsService } from './services/carts/carts.service';
import { Component , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  totalCarts:number=0;
  subscription:Subscription;
  cartViews:CartView[]=[
    {
      name:'white',
      quantity:0,
      src:'assets/images/preorder-whitetilHD.png',
      price:4999.95
    },
    {
      name:'black',
      quantity:0,
      src:'assets/images/preorder-blacktilHD.png',
      price: 4999.95
    }
  ];

  constructor(private cartsService:CartsService){
    this.subscription=this.cartsService.getCarts()
      .subscribe((cart:Cart)=>{
        console.log(cart);
        switch (cart.type) {
          case 'add': this.totalCarts+=Number(cart.quantity);
              (cart.name==='white')?this.cartViews[0].quantity+=Number(cart.quantity)
              :this.cartViews[1].quantity+=Number(cart.quantity); 
              break;
          case 'increase': this.totalCarts+=1;
              (cart.name==='white')?this.cartViews[0].quantity+=cart.quantity
              :this.cartViews[1].quantity+=cart.quantity;
              break;
          case 'decrease': this.totalCarts-=1;
              (cart.name==='white')?this.cartViews[0].quantity+=cart.quantity
              :this.cartViews[1].quantity+=cart.quantity;
              break;    
        }
        
        localStorage.setItem('amuCart', JSON.stringify(this.cartViews));
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
