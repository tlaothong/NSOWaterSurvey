import { Component } from '@angular/core';
import { SetNextPageDirection } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { getNextPageDirection, getArrayIsCheck } from '../../states/household';
import { map } from 'rxjs/operators';

@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  public text: string;
  private frontNum: any = 0;
  private backNum: any = 23;
  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
  }

  ionViewDidLoad() {
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {
      if (data != null) {
        arrayNextPage = data;
        this.frontNum = arrayNextPage.length;
      }
    });

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data
        this.backNum = arrayIsCheck.length;
      }
    });
  }

  backToHome() {
    // this.store.dispatch(new SetNextPageDirection(99));
    this.navCtrl.setRoot("CheckListPage", { i: 99 });
  }

  previouPage() {
    this.navCtrl.setRoot("CheckListPage", { iBack: 88 });
  }
}
