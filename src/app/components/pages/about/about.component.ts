import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideupTil', [
      state('first',style({
        opacity:0
      })),
      transition('first=>*',animate('500ms ease-in',keyframes([
        style({opacity:0,transform: 'translate(-75px,75px)',offset: 0}),
        style({opacity:1,transform: 'translate(20px,20px)',offset: 0.7}),
        style({opacity:1,transform: 'translate(0,0)',offset: 1})
      ]))),
    ]),
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



export class AboutComponent implements OnInit {
  mode:string='what';
  state:string='first';

  constructor() { }

  ngOnInit() {
  }
  changeMode(valueChanged){
    this.state=(this.state==='first')?'end':'first';
    this.mode=valueChanged;

  }
  handleStartSlideup(){
    var buttons=document.getElementsByClassName('effect');
    for(let i =0;i<buttons.length;i++){
      buttons[i].classList.add('disabled');
    }
  }
  handleDoneSlideup(){
    var buttons=document.getElementsByClassName('effect');
    for(let i =0;i<buttons.length;i++){
      if(!buttons[i].innerHTML.toLocaleLowerCase().includes(this.mode.toLocaleLowerCase()))
      buttons[i].classList.remove('disabled');
    }
    this.state='end';
  }
}
