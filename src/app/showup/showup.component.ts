import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
export const fadeInOut = (name = 'fadeInOut', duration = 0.1) =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`${duration}s ease-in-out`)
    ]),
    transition(':leave', [animate(`${duration}s ease-in-out`, style({ opacity: 0 }))])
  ])

@Component({
  selector : 'tooltip',
  templateUrl: './showup.component.html',
  styleUrls: ['./showup.component.css'],
  animations: [
    fadeInOut('fadeInOut-1', 0.3)
  ]
})

export class ShowupComponent implements OnInit{

  @Input('text') text: string;
  @Input('show') show: boolean;
  @Output() reverseShow = new EventEmitter<boolean>()

 constructor(){
  }

 ngOnInit() {

 }

 showTooltip(){
   this.show = !this.show;
   this.reverseShow.emit(this.show);
    
  }
}