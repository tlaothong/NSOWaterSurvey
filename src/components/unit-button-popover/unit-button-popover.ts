import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the UnitButtonPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'unit-button-popover',
  templateUrl: 'unit-button-popover.html'
})
export class UnitButtonPopoverComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello UnitButtonPopoverComponent Component');
    this.text = 'Hello World';
  }

  dissMissSetting(text:string) {
    this.viewCtrl.dismiss(text);

  }

}
