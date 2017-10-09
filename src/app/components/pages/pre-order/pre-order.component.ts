import { CartsService } from './../../../services/carts/carts.service';
import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css'],
  animations: [
    trigger('slideup', [
      state('first',style({
        opacity:0
      })),
      transition('first=>*',animate('500ms ease-in',keyframes([
        style({opacity:0,transform: 'translateY(75px)',offset: 0}),
        style({opacity:1,transform: 'translateY(0)',offset: 1})
      ]))),
    ]),
  ]
})
export class PreOrderComponent implements OnInit {
  selectedValue:string='all';
  mode:string='add';
  state:string='first';
  imgSrc:string='assets/images/preorder-whiteHD.png';
  showImgMode:string='all';
  quantity:number=1;
  imgSrcViewLook:string="";
  constructor(
    private cartsService: CartsService,
    private flashMessages: FlashMessagesService
  ) { }

  sendCart(){
    if((this.selectedValue==='black' || this.selectedValue==='white') &&(this.quantity>0) ){
      this.cartsService.sendCarts({
        type:'add',
        name:this.selectedValue,
        quantity:this.quantity
      });
      this.flashMessages.show(`Added ${this.quantity} more ${this.selectedValue.toLocaleUpperCase()} AMU to your cart`, { cssClass: 'alert-success', timeout: 2000 });     
    }else{
      return false;
    }
  }

  changeImgViewLook(e){
    this.imgSrcViewLook=e.target.getAttribute('src');
    var images =document.getElementsByClassName('imageviewLook');
    for(let i=0;i<images.length;i++){
      if(!images[i].className.includes('unclicked'))
        images[i].classList.add('unclicked');
    }
    e.target.classList.remove('unclicked');
  }

  getQuantity(quantity){
    this.quantity=quantity.value;
  }

  ngOnInit() {  
    
  }


  openModal(){
    var modal=document.getElementById('imageModal');
    modal.style.display='block';
    var images =document.getElementsByClassName('imageviewLook');
    this.imgSrcViewLook=this.imgSrc;
    for(var i=0;i<images.length;i++){
        if(!images[i].className.includes('unclicked'))
        images[i].classList.add('unclicked');
    }
    for(var i=0;i<images.length;i++){
        if(this.imgSrc===images[i].getAttribute('src')){
        images[i].classList.remove('unclicked');
        }
    }
  }

  


  changeImg(e){
    this.imgSrc=e.target.getAttribute('src');
    let images =document.getElementsByClassName('image');
    for(let i=0;i<images.length;i++){
      if(!images[i].className.includes('unclicked'))
        images[i].classList.add('unclicked');
    }
    e.target.classList.remove('unclicked');
  }


  getSelectedValue(selected){
    this.selectedValue=selected.value;
    switch(this.selectedValue){
      case 'white': this.showImgMode='white';this.imgSrc='assets/images/preorder-whiteHD.png'; break;
      case 'black': this.showImgMode='black';this.imgSrc='assets/images/preorder-blackHD.png';break;
      default: this.showImgMode='all'; this.quantity=1; this.imgSrc='assets/images/preorder-whiteHD.png';
    }
  }

  changeMode(valueChanged){
    this.state=(this.state==='first')?'end':'first';
    this.mode=valueChanged;

  }
  handleStartSlideup(){
    let buttons=document.getElementsByClassName('effect');
    for(let i =0;i<buttons.length;i++){
      buttons[i].classList.add('disabled');
    }
  }
  handleDoneSlideup(){
    let buttons=document.getElementsByClassName('effect');
    for(let i =0;i<buttons.length;i++){
      if(!buttons[i].innerHTML.toLocaleLowerCase().includes(this.mode.toLocaleLowerCase()))
      buttons[i].classList.remove('disabled');
    }
    this.state='end';
  }


  
}
