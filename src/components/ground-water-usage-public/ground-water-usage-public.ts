import { Component, Input } from '@angular/core';

/**
 * Generated class for the GroundWaterUsagePublicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ground-water-usage-public',
  templateUrl: 'ground-water-usage-public.html'
})
export class GroundWaterUsagePublicComponent {

  @Input("headline") public text: string;

  constructor() {
    console.log('Hello GroundWaterUsagePublicComponent Component');
    this.text = '1';
  }

}
