import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
export const fadeInOut = (name = 'fadeInOut', duration = 0.1) =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0}),
      animate(`${duration}s ease-in-out`)
    ]),
    transition(':leave', [animate(`${duration}s ease-in-out`, style({ opacity: 0 }))])
  ])

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    fadeInOut('fadeInOut-1', 0.1)
  ]
})
export class AppComponent implements OnInit  {
  show = false;
  datas:any
  
  constructor(){}

  text = "";

ngOnInit(){
  this.datas = [{id:1, text:"test1"}, {id:2, text:"test2"}]
}
  showTooltip(event){
    console.log(event)
    this.show = !this.show;
  }
}
