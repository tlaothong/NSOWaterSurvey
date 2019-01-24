import { Component, Input } from '@angular/core';
import { SetNextPageDirection, SetSelectorIndex } from '../../states/household/household.actions';
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

  private frontNum: any;
  private backNum: any;
  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
  }

  // ionViewDidEnter() {

  // }
  // onSubmit() {
  //   console.log("onSubmit ");
  //   let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
  //   let arrayNextPage: any[];
  //   arrayNextPage$.subscribe(data => {

  //     if (data != null) {
  //       arrayNextPage = data;
  //       this.backNum = arrayNextPage.length;
  //     }

  //   });

  //   let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
  //   let arrayIsCheck: any[];
  //   arrayIsCheck$.subscribe(data => {

  //     if (data != null) {
  //       arrayIsCheck = data
  //       this.frontNum = arrayIsCheck.length;
  //     }

  //   });
  // }

  backToHome() {
    this.store.dispatch(new SetSelectorIndex(99));
    // this.store.dispatch(new SetNextPageDirection(99));
    this.navCtrl.setRoot("CheckListPage");
  }

  previouPage() {
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
