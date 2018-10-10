import { Component, Input } from '@angular/core';

/**
 * Generated class for the WaterProblem4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-problem4',
  templateUrl: 'water-problem4.html'
})
export class WaterProblem4Component {

  @Input('headline') public text: string;

  constructor() {
    console.log('Hello WaterProblem4Component Component');
    this.text = 'Hello World';
  }

}
