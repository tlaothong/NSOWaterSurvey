import { Component, Input } from '@angular/core';

/**
 * Generated class for the TableDisasterousComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-disasterous',
  templateUrl: 'table-disasterous.html'
})
export class TableDisasterousComponent {

  @Input("headline") year: string;

  constructor() {
    console.log('Hello TableDisasterousComponent Component');
    this.year = 'Hello World';
  }

}
