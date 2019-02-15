import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { SetBackToRoot } from '../../states/logging/logging.actions';

/**
 * Generated class for the BackToRootLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-to-root-login',
  templateUrl: 'back-to-root-login.html'
})
export class BackToRootLoginComponent {

  @Input('title') public text: string;

  constructor(public navCtrl: NavController, private store: Store<LoggingState>) {
    console.log('Hello BackToRootLoginComponent Component');
    this.text = 'Hello World';
  }

  backToRoot() {
    this.store.dispatch(new SetBackToRoot(true));
    this.navCtrl.popTo("LoggingTestPage");
  }

}
