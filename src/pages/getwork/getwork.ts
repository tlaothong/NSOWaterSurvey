import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getUserData, getDataWorkEA } from '../../states/logging';
import { LoadDataWorkEAByUserId, LoadCountOfWorks } from '../../states/logging/logging.actions';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-getwork',
  templateUrl: 'getwork.html',
})
export class GetworkPage {

  private formDataUser$ = this.store.select(getUserData);
  private formDataEa$ = this.store.select(getDataWorkEA);
  public dataEa: any;
  public userObj: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>, private storage: Storage) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad GetworkPage');

    this.formDataUser$.subscribe(data => {
      if (data != null) {
        this.userObj = data
        console.log(this.userObj);
        this.store.dispatch(new LoadDataWorkEAByUserId(this.userObj));
        this.store.dispatch(new LoadCountOfWorks(this.userObj));
        this.formDataEa$.subscribe(data => {
          if (data != null) {
            this.dataEa = data
            console.log(this.dataEa);
            this.storage.set(this.userObj.idUser, this.dataEa);
          }
        });
      }

    });
  }

  goConfirmDownLoadPage() {

    this.navCtrl.pop();
    this.navCtrl.push("SelectEaPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

}
