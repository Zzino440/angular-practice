import { Component, OnInit } from '@angular/core';

/*Le pipes ci permettono di formattare i nostri dati */
@Component({
  selector: 'lb-fundamentals-pipes',
  template: `

<p>{{today | date: 'dd/MMMM/yyyy'}}</p>

<p>{{yourmoney | currency: '€'}}</p>

<p>{{yourbitcoins | number: '2.2-4'}}</p>

<pre>{{yourJSON | json}}</pre>
  `,
  styles: [
  ]
})
export class FundamentalsPipesComponent {

  today = Date.now();
  yourmoney = 1200;
  yourbitcoins = 0.123442341
  yourJSON = {id: 1, name: 'Fabio'}

}
