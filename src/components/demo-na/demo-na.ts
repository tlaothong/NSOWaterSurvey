import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'demo-na',
  templateUrl: 'demo-na.html'
})
export class DemoNaComponent {
  text: string;

  constructor(public alertCtrl: AlertController) {
    this.text = 'Hello World';
  }

  public showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
