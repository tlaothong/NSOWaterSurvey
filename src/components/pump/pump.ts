import { Component, Input } from '@angular/core';

/**
 * Generated class for the PoolComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pump',
  templateUrl: 'pump.html'
})
export class PumpComponent {

  @Input('headline') text: string;

  constructor() {
    console.log('Hello PumpComponent Component');
    this.text = '1';
  }

}
