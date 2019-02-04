import { Component, Input } from '@angular/core';
import { SetSelectorIndex, SetBackToRoot } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { getNextPageDirection, getArrayIsCheck, getSelectorIndex } from '../../states/household';
import { map } from 'rxjs/operators';

@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  public text: string;
  @Input("checkEnd") public checkEnd: boolean;
  @Input("isBuilding") public isBuilding: boolean;
  @Input("frontNum") public frontNum: any;
  @Input("backNum") public backNum: any;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
  }

  ionViewDidEnter() {
    console.log(this.isBuilding);
  }

  backToHome() {
    if (this.isBuilding == true) {
      this.navCtrl.popTo("HomesPage");
    } else {
      this.store.dispatch(new SetBackToRoot(true));
      this.navCtrl.popTo("CheckListPage");
    }
  }

  previouPage() {
    if (this.isBuilding == true) {
      this.navCtrl.popTo("HomesPage");
    } else {
      let selectorIndex$ = this.store.select(getSelectorIndex).pipe(map(s => s));
      let index: any;
      selectorIndex$.subscribe(data => {
        if (data != null) {
          index = data
          console.log("selectIndex: ", index);
        }
      });
      this.store.dispatch(new SetSelectorIndex(index - 1));
      this.navCtrl.popTo("CheckListPage");
    }
  }
}
