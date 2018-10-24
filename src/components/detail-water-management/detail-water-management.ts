import { Component } from '@angular/core';

/**
 * Generated class for the DetailWaterManagementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-water-management',
  templateUrl: 'detail-water-management.html'
})
export class DetailWaterManagementComponent {

  text: string;

  constructor() {
    console.log('Hello DetailWaterManagementComponent Component');
    this.text = 'Hello World';
  }

}
