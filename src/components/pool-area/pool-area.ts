import { Component } from '@angular/core';

/**
 * Generated class for the PoolAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-area',
  templateUrl: 'pool-area.html'
})
export class PoolAreaComponent {

  text: string;

  constructor() {
    console.log('Hello PoolAreaComponent Component');
    this.text = 'Hello World';
  }

}
