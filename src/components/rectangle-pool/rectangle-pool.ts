import { Component } from '@angular/core';

/**
 * Generated class for the RectanglePoolComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rectangle-pool',
  templateUrl: 'rectangle-pool.html'
})
export class RectanglePoolComponent {

  text: string;

  constructor() {
    console.log('Hello RectanglePoolComponent Component');
    this.text = 'Hello World';
  }

}
