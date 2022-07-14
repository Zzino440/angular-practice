import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../fundamentals-custom-types/model/user";

@Component({
  selector: 'lb-fundamentals-http-rest-api',
  template: `
    <!--<pre>{{users | json}}</pre>-->
    <li *ngFor="let user of users">
      {{user.name}}
    </li>
  `,
  styles: []
})
export class FundamentalsHttpRESTAPIComponent {
  /*Importata l interfaccia User da una altro componente*/
  users: User[];

  constructor(http: HttpClient) {
    http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(response =>
        this.users = response);
  }
}
