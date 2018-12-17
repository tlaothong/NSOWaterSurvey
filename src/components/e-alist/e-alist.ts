import { Component } from '@angular/core';

/**
 * Generated class for the EAlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'e-alist',
  templateUrl: 'e-alist.html'
})
export class EAlistComponent {

  text: string;

  constructor() {
    console.log('Hello EAlistComponent Component');
    this.text = 'Hello World';
  }

}
