import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { LoadUserDataById } from '../../states/logging/logging.actions';
import { getUserData } from '../../states/logging';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formData$ = this.store.select(getUserData).pipe(map(s => s));
  private userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<LoggingState>, private alertCtrl: AlertController) {
    this.userData = null;
  }

  onkey(id: string) {
    this.store.dispatch(new LoadUserDataById(id));
    this.formData$.subscribe(it => this.userData = it);
  }

  goConfirmloginPage(event: any) {
    let wrongPassword = this.alertCtrl.create({
      message: 'รหัสผ่านไม่ถูกต้อง',
      buttons: ['ตกลง']
    });
    let notFoundUser = this.alertCtrl.create({
      message: 'ไม่พบผู้ใช่',
      buttons: ['ตกลง']
    });

    if (typeof (this.userData) == 'undefined' || this.userData == null) {
      notFoundUser.present();
    } else if (this.userData.password != event.password._value) {
      wrongPassword.present();
    } else {
      this.navCtrl.push("ConfirmloginPage");
    }
  }

  goBack() {
    this.navCtrl.pop();
    this.navCtrl.push("ConfirmloginPage");

  }
}
