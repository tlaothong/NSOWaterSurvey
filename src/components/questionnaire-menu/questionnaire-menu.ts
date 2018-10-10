import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../questionnaire-menu-popover/questionnaire-menu-popover';

/**
 * Generated class for the QuestionnaireMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'questionnaire-menu',
  templateUrl: 'questionnaire-menu.html'
})
export class QuestionnaireMenuComponent {

  @Input('title') text: string;

  constructor(private popoverCtrl: PopoverController) {
    console.log('Hello QuestionnaireMenuComponent Component');
    this.text = 'Hello World';
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

}
