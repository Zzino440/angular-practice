import {Component} from '@angular/core';


@Component({
  selector: 'lb-form-input',
  template: `

    <input type="text"
           placeholder="Add Username"
           #inputRef>

    <input type="text"
           placeholder="Add age"
           #ageRef>


    <button (click)="add(inputRef,ageRef)">Add User</button>
    <li *ngFor="let user of users">
      {{user.label}} {{user.age}}
    </li>

  `,
  styles: []
})
export class FormInputComponent {
  users = [];

  add(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.users.push({
      label: inputName.value,
      age: inputAge.value
    });

    inputName.value = '';
    inputAge.value = '';

    inputName.focus();

  }


}
