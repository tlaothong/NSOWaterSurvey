import { Component, Input } from '@angular/core';

/**
 * Generated class for the WaterSources9Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-sources9',
  templateUrl: 'water-sources9.html'
})
export class WaterSources9Component {

  @Input('headline') text: string;

  constructor() {
    console.log('Hello WaterSources9Component Component');
    this.text = 'Hello World';
  }

}
