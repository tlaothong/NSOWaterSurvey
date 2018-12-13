import { Component, Input } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../questionnaire-menu-popover/questionnaire-menu-popover';

@Component({
  selector: 'questionnaire-menu',
  templateUrl: 'questionnaire-menu.html'
})
export class QuestionnaireMenuComponent {

  @Input('title') public text: string;

  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) {
    this.text = 'Hello World';
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent, { nav: this.navCtrl });
    popover.present({
      ev: myEvent
    });
  }

}