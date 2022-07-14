import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lb-fundamentals-directives',
  template: `
    <button (click)="toggle()">Toggle</button>
    <h1 *ngIf="visible">Hello World</h1>

    <li
      [hidden]="!visible"
      *ngFor="let user of users">
      {{user}}
    </li>
  `,
  styles: []
})
export class FundamentalsDirectivesComponent implements OnInit {
  users = [
    'Fabio',
    'Lorenzo',
    'Marco'
  ]
  visible = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(){
    this.visible=!this.visible;
  }

}
