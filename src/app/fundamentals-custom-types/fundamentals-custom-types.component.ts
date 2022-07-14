import { Component, OnInit } from '@angular/core';
import {User} from "./model/user";


@Component({
  selector: 'lb-fundamentals-custom-types',
  template: `
    <li *ngFor="let user of users">
      {{user.name}}
    </li>

  `,
  styles: [
  ]
})
export class FundamentalsCustomTypesComponent implements OnInit {

  users: User[];

  constructor() {
    this.users =[
      {id: 1, name: 'Fabio'},
      {id: 2, name: 'Marco'},
      {id: 3, name: 'Lorenzo'}
    ];

    this.users.push({id:4, name:'Francesco'})
  }

  ngOnInit(): void {
  }

}
