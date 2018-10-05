import { Component, Input } from '@angular/core';

/**
 * Generated class for the FieldAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-area',
  templateUrl: 'field-area.html'
})
export class FieldAreaComponent {

  @Input('headline') text: string;

  constructor() {
    console.log('Hello FieldAreaComponent Component');
    this.text = 'Hello World';
  }

}
