import { Component, Input } from '@angular/core';

/**
 * Generated class for the WaterProblem6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-problem6',
  templateUrl: 'water-problem6.html'
})
export class WaterProblem6Component {

  @Input('headline') public text: string;

  constructor() {
    console.log('Hello WaterProblem6Component Component');
    this.text = 'Hello World';
  }

}
