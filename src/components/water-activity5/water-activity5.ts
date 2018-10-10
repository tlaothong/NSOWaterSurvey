import { Component, Input } from '@angular/core';

/**
 * Generated class for the WaterActivity5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-activity5',
  templateUrl: 'water-activity5.html'
})
export class WaterActivity5Component {

  @Input('headline') public text: string;

  constructor() {
    console.log('Hello WaterActivity5Component Component');
    this.text = 'Hello World';
  }

}
