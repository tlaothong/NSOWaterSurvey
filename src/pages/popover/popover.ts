import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
  template: `
    <ion-list class="popover-page">
      <ion-list-header>Title</ion-list-header>   
      <button ion-item >Home</button>
      <button ion-item >ดูแผนที่</button>
      <button ion-item >มาตราวัด</button>
      <button ion-item >หยุดชั่วคราว</button>
    </ion-list>
  `,
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
