import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getUserData, getLogin } from '../../states/logging';
import { map } from 'rxjs/operators';
import { } from '../../states/bootup';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { LoginUser } from '../../states/bootup/bootup.actions';
import { DataStoreProvider } from '../../providers/data-store/data-store';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private formDataUser$ = this.storeLogging.select(getUserData);

  formData$ = this.storeLogging.select(getUserData).pipe(map(s => s));
  private getDataLogin$ = this.storeLogging.select(getLogin);
  private getDataLogin: any;
  private userData: any;

  public dataEa: any;
  public userObj: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams, private store: Store<BootupState>, private storeLogging: Store<LoggingState>,
    private dataStore: DataStoreProvider, private alertCtrl: AlertController) {
    this.userData = null;
  }

  // onkey(id: string) {
  //   this.store.dispatch(new LoadUserDataById(id));
  //   this.formData$.subscribe(it => this.userData = it);
  // }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่...",
      duration: 1500
    });
    loader.present();
  }

  goConfirmloginPage(event: any) {
    /********************** */
    console.log('Login and LoadBootstrap!');
    let userId = event.idUser.value;
    let password = event.password._value

    let wrongPassword = this.alertCtrl.create({
      message: 'รหัสผ่านไม่ถูกต้อง',
      buttons: ['ตกลง']
    });


    // if(userId=="10400064" && password=="1234"){
    //   this.store.dispatch(new LoginUser(userId));
    //   this.dataStore.hasEasDownloaded(userId).take(1).subscribe(hasDownloaded => {
    //     if (hasDownloaded) {
    //       // this.store.dispatch(new DownloadUserToMobile());
    //       this.navCtrl.setRoot("SelectEaPage");
    //       //  this.presentLoading();
    //     } else {
    //       this.navCtrl.push("GetworkPage");
    //     }
    //   });

    // }
    this.dataStore.validateUser(userId, password).then(valid => {
      if (!valid) {
        wrongPassword.present();
      } else {
        this.store.dispatch(new LoginUser(userId));
        this.dataStore.hasEasDownloaded(userId).take(1).subscribe(hasDownloaded => {
          if (hasDownloaded) {
            // this.store.dispatch(new DownloadUserToMobile());
            this.navCtrl.setRoot("SelectEaPage");
            //  this.presentLoading();
          } else {
            this.navCtrl.push("GetworkPage");
          }
        });
      }
    });


    /********************** */
    // let data = {
    //   idUser: event.idUser._value,
    //   password: event.password._value
    // }
    // this.storeLogging.dispatch(new SetLogin(data));
    // this.getDataLogin$.subscribe(data => {
    //   if (data != null) {
    //     this.getDataLogin = data
    //     console.log(this.getDataLogin);
    //     if (this.getDataLogin == true) {
    //       this.storeLogging.dispatch(new LoadUserDataById(event.idUser._value));
    //       this.formDataUser$.subscribe(data => {
    //         if (data != null) {
    //           this.userObj = data
    //           console.log(this.userObj);
    //           this.storage.set('UserInfo',this.userObj);
    //         }

    //       });
    //       this.navCtrl.push("GetworkPage");
    //     }
    //     else {
    //       notFoundUser.present();
    //     }
    //   }

    // });

    // // let wrongPassword = this.alertCtrl.create({
    // //   message: 'รหัสผ่านไม่ถูกต้อง',
    // //   buttons: ['ตกลง']
    // // });
    // let notFoundUser = this.alertCtrl.create({
    //   message: 'ไม่พบผู้ใช่',
    //   buttons: ['ตกลง']
    // });



    // // if (typeof (this.userData) == 'undefined' || this.userData == null) {
    // //   notFoundUser.present();
    // // } else if (this.userData.password != event.password._value) {
    // //   wrongPassword.present();
    // // } else {
    // //   this.navCtrl.push("ConfirmloginPage");
    // // }
  }

}
