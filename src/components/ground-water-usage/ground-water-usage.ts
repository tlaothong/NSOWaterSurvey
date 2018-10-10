import { Component, Input } from '@angular/core';

/**
 * Generated class for the GroundWaterUsageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ground-water-usage',
  templateUrl: 'ground-water-usage.html'
})
export class GroundWaterUsageComponent {

  @Input("headline") public text: string;

  constructor() {
    console.log('Hello GroundWaterUsageComponent Component');
    this.text = '1';
  }

}
