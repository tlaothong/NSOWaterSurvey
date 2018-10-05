import { Component, Input } from '@angular/core';

/**
 * Generated class for the PoolComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool',
  templateUrl: 'pool.html'
})
export class PoolComponent {

  @Input('headline') text: string;

  constructor() {
    console.log('Hello PoolComponent Component');
    this.text = 'ddd';
  }

}
