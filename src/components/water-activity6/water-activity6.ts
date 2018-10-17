import { Component, Input } from '@angular/core';

/**
 * Generated class for the WaterActivity6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-activity6',
  templateUrl: 'water-activity6.html'
})
export class WaterActivity6Component {

  @Input('headline') public text: string;
  @Input('headline2') public text2: string;

  constructor() {
    console.log('Hello WaterActivity6Component Component');
    this.text = 'Hello World';
  }

}
