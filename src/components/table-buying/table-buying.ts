import { Component, Input } from '@angular/core';

/**
 * Generated class for the TableBuyingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-buying',
  templateUrl: 'table-buying.html'
})
export class TableBuyingComponent {

  @Input("headline") text: string;
  @Input() size: string;

  constructor() {
    console.log('Hello TableBuyingComponent Component');
    this.text = '5. อื่นๆ';
    this.size = 'ลิตร';
  }

}
