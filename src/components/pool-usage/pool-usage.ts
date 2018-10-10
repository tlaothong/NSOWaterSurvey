import { Component, Input } from '@angular/core';

/**
 * Generated class for the PoolUsageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-usage',
  templateUrl: 'pool-usage.html'
})
export class PoolUsageComponent {

  @Input("headline") public text: string;

  constructor() {
    console.log('Hello PoolUsageComponent Component');
    this.text = '1';
  }

}
