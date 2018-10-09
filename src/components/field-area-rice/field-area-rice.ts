import { Component } from '@angular/core';

/**
 * Generated class for the FieldAreaRiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-area-rice',
  templateUrl: 'field-area-rice.html'
})
export class FieldAreaRiceComponent {

  text: string;

  constructor() {
    console.log('Hello FieldAreaRiceComponent Component');
    this.text = '';
  }

}
