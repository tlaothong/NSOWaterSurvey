import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the RainStorageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rain-storage',
  templateUrl: 'rain-storage.html'
})
export class RainStorageComponent {

  @Input("order") private order: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello RainStorageComponent Component');
  }

  presentModal() {
    const modal = this.modalCtrl.create("DlgRainStoragePage");
    modal.present();
  }

}
