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
  
  constructor(){}

  text = "Les montants affichés sont obtenus à partir des dernières valeurs liquidatives connues. Ce montant ne tient pas compte des opérations en cours ou à venir et des prélèvements au titre de la garantie plancher en cas de décès. Pour l'épargne investie sur le support Sécurité libellé en euros, le montant indiqué prend en compte les taux de rendement des années précédentes (sauf pour les garanties souscrites depuis le 1er janvier 2019) et le taux technique pour l’année en cours. Le rendement 2019 vous sera communiqué sur les relevés de compte que vous recevrez en début d’année 2020.";

ngOnInit(){
}
  showTooltip(){
    this.show = !this.show;
  }
}
