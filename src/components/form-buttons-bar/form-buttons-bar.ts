import { Component, Input } from '@angular/core';
import { SetNextPageDirection } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { getNextPageDirection } from '../../states/household';
import { map } from 'rxjs/operators';

@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  public text: string;
  @Input("checkEnd") public checkEnd: boolean;

  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
  }

  backToHome(){
    this.store.dispatch(new SetNextPageDirection(99));
    this.navCtrl.setRoot("CheckListPage");
  }

  previouPage(){
    let getNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let i = 0;
    getNextPage$.subscribe(data => {
      if (data != null) {
        i = data;
      }
      else i = null;
      console.log("i: ", i);
    });
     i = i - 1;
    this.store.dispatch(new SetNextPageDirection(i));
    // this.navCtrl.setRoot("CheckListPage");
    this.navCtrl.pop();

    // if (index != 0) {
    //   let page = this.pages[index];
    //   console.log("index: ", index);
    //   console.log("page: ", page);
    //   this.navCtrl.push(page.component);
  }
}
