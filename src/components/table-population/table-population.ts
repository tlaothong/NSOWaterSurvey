import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DlgPopulationPage } from '../../pages/dlg-population/dlg-population';

@Component({
  selector: 'table-population',
  templateUrl: 'table-population.html'
})
export class TablePopulationComponent {

  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello TablePopulationComponent Component');
    this.text = '1';
  }

  presentModal() {
    const modal = this.modalCtrl.create("DlgPopulationPage");
    modal.present();
  }

}
