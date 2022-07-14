import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lb-fundamentals-native-elem',
  template: `
    <h1 (click)="clickHandler($event)">Hello World</h1>

    <input type="text" (keydown)="inputHandler($event)">
  `,
  styles: []
})
export class FundamentalsNativeElemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  clickHandler(event: MouseEvent) {
    console.log('click', event);
  }

  inputHandler(event: KeyboardEvent) {
    const target = event.target;
    console.log('press', target);
  }

}
