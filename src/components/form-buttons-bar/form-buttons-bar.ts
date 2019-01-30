import { Component, Input } from '@angular/core';
import { SetSelectorIndex } from '../../states/household/household.actions';
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
    // this.countNumberPage();
  }

  ionViewDidEnter() {
    console.log(this.isBuilding);

  }

  countNumberPage() {
    console.log("onSubmit ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        this.backNum = arrayNextPage.length;
      }

    });

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
        this.frontNum = arrayIsCheck.length;
      }

    });
  }

  backToHome() {
    if (this.isBuilding == true) {
      this.navCtrl.popTo("HomesPage");
    } else {
      this.store.dispatch(new SetSelectorIndex(99));
      // this.store.dispatch(new SetNextPageDirection(99));
      this.navCtrl.setRoot("CheckListPage");
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
      this.navCtrl.setRoot("CheckListPage");
    }
  }
}
