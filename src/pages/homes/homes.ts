import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';

@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {

  office: string = "building";

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {

  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireHomeComponent, { nav: this.navCtrl });
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {

  }

  goBuildingInfo() {
    this.navCtrl.push("BuildingInformation1Page")
  }
}
