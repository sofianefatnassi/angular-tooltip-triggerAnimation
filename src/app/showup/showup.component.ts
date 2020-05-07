import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {RootScopeService} from '../rootScope.service.ts';
import {IRoot} from '../IRoot.interface'
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
  rootScope: IRoot;

 constructor(private rootScopeService: RootScopeService){
    this.rootScopeService.getRootScope().subscribe(res => {
      if(res){
        this.rootScope.show = res.show;
      } else {
        this.rootScope.show = true;
      }
    })
  }

 ngOnInit() {

 }

 showTooltip(){
    this.rootScope.show = !this.rootScope.show;
  }
}