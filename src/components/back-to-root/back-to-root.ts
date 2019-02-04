import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { SetBackToRoot } from '../../states/household/household.actions';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';

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

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>) {
    console.log('Hello BackToRootComponent Component');
  }

  backToRoot() {
    this.store.dispatch(new SetBackToRoot(true));
    this.navCtrl.pop();
  }

}
