import { Component } from '@angular/core';

/**
 * Generated class for the CirclePoolComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'circle-pool',
  templateUrl: 'circle-pool.html'
})
export class CirclePoolComponent {

  text: string;

  constructor() {
    console.log('Hello CirclePoolComponent Component');
    this.text = 'Hello World';
  }

}
