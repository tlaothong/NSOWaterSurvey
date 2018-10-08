import { Component } from '@angular/core';

/**
 * Generated class for the MachineWaterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'machine-water',
  templateUrl: 'machine-water.html'
})
export class MachineWaterComponent {

  text: string;

  constructor() {
    console.log('Hello MachineWaterComponent Component');
    this.text = 'Hello World';
  }

}
