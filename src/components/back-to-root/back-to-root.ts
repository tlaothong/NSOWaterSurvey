import { BuildingState } from './../../states/building/building.reducer';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { SetBackToRoot, SetSelectorIndex } from '../../states/household/household.actions';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../questionnaire-menu-popover/questionnaire-menu-popover';
import { getUnitNo } from '../../states/household';
import { getRecieveDataFromBuilding } from '../../states/building';

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
  @Input('isWaterAct') public isWaterAct: boolean;

  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  public unitCount: number;
  private unitNo$ = this.store.select(getUnitNo);
  public No: string;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, private popoverCtrl: PopoverController) {
    console.log('Hello BackToRootComponent Component');
    this.unitNo$.subscribe(data => this.No = data);
  }

  backToRoot() {
    this.GetDataFromBuilding$.subscribe(data => this.unitCount = data);
    if (this.unitCount == 1 && this.isWaterAct) {
      this.navCtrl.popTo(this.navCtrl.getByIndex(2));
    }
    else {
      this.store.dispatch(new SetSelectorIndex(-1));
      this.store.dispatch(new SetBackToRoot(true));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent, { nav: this.navCtrl, No: this.No });
    popover.present({
      ev: myEvent
    });
  }
}
