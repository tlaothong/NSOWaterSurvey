import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { SetBackToRoot, SetSelectorIndex } from '../../states/household/household.actions';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../questionnaire-menu-popover/questionnaire-menu-popover';

/**
 * Generated class for the BackToRootComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-to-root',
  templateUrl: 'back-to-root.html'
})
export class BackToRootComponent {

  @Input('title') public text: string;
  @Input('Pop') public Pop: boolean;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, private popoverCtrl: PopoverController) {
    console.log('Hello BackToRootComponent Component');
  }

  backToRoot() {
    this.store.dispatch(new SetSelectorIndex(-1));
    this.store.dispatch(new SetBackToRoot(true));
    this.navCtrl.popTo("CheckListPage");
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent, { nav: this.navCtrl });
    popover.present({
      ev: myEvent
    });
  }
}
