import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'questionnaire-menu-popover',
  templateUrl: 'questionnaire-menu-popover.html'
})
export class QuestionnaireMenuPopoverComponent {

  public text: string;
  private navCtrl: NavController;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    console.log('Hello QuestionnaireMenuPopoverComponent Component');
    this.text = 'Hello World';

    this.navCtrl = navParams.get('nav');
  }

  public goHome() {
    this.navCtrl.popToRoot();
    this.viewCtrl.dismiss();
  }

}