import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "./model/user";

@Component({
  selector: 'lb-ng-model-binding',
  template: `

    <form #f="ngForm" (submit)="add(f)"
          [ngClass]="{'error' : f.invalid && f.dirty}">

      <input type="text"
             placeholder="Add Username"
             [ngModel]="user?.label"
             name="label"
             required>

      <input type="number"
             placeholder="Add age"
             [ngModel]="user?.age"
             name="age">

      <input type="text"
             placeholder="Add city"
             [ngModel]="user?.city"
             name="city">

      <input type="text"
             placeholder="Add color"
             [ngModel]="user?.color"
             name="color">

      <button type="submit" [disabled]="f.invalid">
        {{user ? 'Edit' : 'Add'}}
      </button>
    </form>

    <li *ngFor="let user of users"
        (click)="setActive(user)"
        [style.background]="user.color">

      {{user.label}} - {{user.color}}
    </li>
  `,
  styles: [`
    .error {
      background-color: red;
      border-radius: 10px;
      padding: 10px;
    }

  `]
})
export class NgModelBindingComponent {
  user: User;
  users: User[] = [{label: 'mario', age: 18, city: 'Milan', color: 'blue'}]


  ;

  add(form: NgForm) {
    this.users.push(form.value)
    form.reset();
  };

  setActive(user: User) {
    this.user = user;
  }
}
