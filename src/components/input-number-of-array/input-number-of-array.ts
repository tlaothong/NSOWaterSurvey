import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the InputNumberOfArrayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-number-of-array',
  templateUrl: 'input-number-of-array.html'
})
export class InputNumberOfArrayComponent {

  @Input("headline") public text: string;
  @Input() public inputNumber :number;

  constructor(private modalCtrl: ModalController) {
    
  }

  showModal(){

  }

}
