import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'header-scroll',
  templateUrl: './header-scroll.component.html',
  styleUrls: ['./header-scroll.component.css']
})
export class HeaderScrollComponent implements OnInit {
  @Input('totalCarts') totalCarts:number;
  constructor() { }

  ngOnInit() {
  }

}
