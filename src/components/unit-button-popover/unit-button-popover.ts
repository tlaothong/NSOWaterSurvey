import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

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

  constructor(private viewCtrl: ViewController, public alertController: AlertController) {
    console.log('Hello UnitButtonPopoverComponent Component');
    this.text = 'Hello World';
  }

  dissMissSetting(text: string) {
    this.viewCtrl.dismiss(text);

  }

  async alertDeleteUnit() {
    const alert = this.alertController.create({
      title: 'ฟังก์ชั่น Delete Unit ยังไม่พร้อมใช้งาน',
      buttons: ['OK']
    });
    await alert.present();

  }

}
