import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { LoadUserDataById, SetLogin } from '../../states/logging/logging.actions';
import { getUserData, getLogin } from '../../states/logging';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formData$ = this.store.select(getUserData).pipe(map(s => s));
  private getDataLogin$ = this.store.select(getLogin);
  private getDataLogin: any;
  private userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>, private alertCtrl: AlertController) {
    this.userData = null;
  }

  // onkey(id: string) {
  //   this.store.dispatch(new LoadUserDataById(id));
  //   this.formData$.subscribe(it => this.userData = it);
  // }

  goConfirmloginPage(event: any) {
    let data = {
      idUser: event.idUser._value,
      password: event.password._value
    }
    this.store.dispatch(new SetLogin(data));
    this.getDataLogin$.subscribe(data => {
      if (data != null) {
        this.getDataLogin = data
        console.log(this.getDataLogin);
        if (this.getDataLogin == true) {
          this.store.dispatch(new LoadUserDataById(event.idUser._value));
          this.navCtrl.push("GetworkPage");
        }
        else {
          notFoundUser.present();
        }
      }

    });

    // let wrongPassword = this.alertCtrl.create({
    //   message: 'รหัสผ่านไม่ถูกต้อง',
    //   buttons: ['ตกลง']
    // });
    let notFoundUser = this.alertCtrl.create({
      message: 'ไม่พบผู้ใช่',
      buttons: ['ตกลง']
    });



    // if (typeof (this.userData) == 'undefined' || this.userData == null) {
    //   notFoundUser.present();
    // } else if (this.userData.password != event.password._value) {
    //   wrongPassword.present();
    // } else {
    //   this.navCtrl.push("ConfirmloginPage");
    // }
  }
}
