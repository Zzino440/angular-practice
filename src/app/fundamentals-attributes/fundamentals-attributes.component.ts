import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lb-fundamentals-attributes',
  template: `
    <button [disabled]="url" (click)="load()">Load</button>
    <button [disabled]="!url" (click)="unload()">Unload</button>
    <!--Con l'uso delle parentesi quadre su un qualsiasi elemento html
    è possibile valorizzare gli elementi in base al loro effettivo
    valore come in questo caso la varibaile url al cui interno
    c'è l'indirizzo di un immagine-->
    <img *ngIf="url" [src]=url>

  `,
  styles: []
})
export class FundamentalsAttributesComponent implements OnInit {

  url: string;

  /*url = 'https://angular.io/assets/images/logos/angular/angular.png';*/

  constructor() {
  }

  ngOnInit(): void {
  }

  load() {
    this.url = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  unload(){
    this.url = null;
  }

}
