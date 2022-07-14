import {Component, OnInit} from '@angular/core';
import {Utility} from "./service/utility";

@Component({
  selector: 'lb-fundamentals-injection',
  template: `
    <h1>Hello World</h1>
  `,
  styles: []
})
export class FundamentalsInjectionComponent implements OnInit {

  constructor(utils: Utility) {
    const response = utils.add(1, 4)
    console.log(response)
  }

  ngOnInit(): void {
  }

}
