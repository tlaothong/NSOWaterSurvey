import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getUserData, getDataWorkEA } from '../../states/logging';
import { LoadDataWorkEAByUserId, LoadCountOfWorks } from '../../states/logging/logging.actions';
import { Storage } from '@ionic/storage';
import { DownloadUserToMobile } from '../../states/bootup/bootup.actions';
import { BootupState } from '../../states/bootup/bootup.reducer';


@IonicPage()
@Component({
  selector: 'page-getwork',
  templateUrl: 'getwork.html',
})
export class GetworkPage {


  private formDataEa$ = this.store.select(getDataWorkEA);
  public dataEa: any;
  public userInfo: any;
  public eaList:any[];
  public isWork: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<BootupState>, private storage: Storage, public alertController: AlertController) {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      title: 'โหลดงานสำเร็จ',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'ตกลง',
          handler: data => {
            this.navCtrl.setRoot("SelectEaPage");
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewDidEnter() {
    // console.log('ionViewDidLoad GetworkPage');
    // this.storage.get('UserInfo').then((val) => {
    //   if(val != null){
    //     this.userInfo = val;
    //     this.eaList = this.userInfo.eaList;
    //     console.log(this.userInfo);
        
    //     this.storage.get(val.idUser).then((val) => {
    //       if (val != null) {
    //         this.isWork = true;
    //         this.presentAlert();
    //       }
    //     });
    //   }
    // });
  }

  goConfirmDownLoadPage() {
    this.store.dispatch(new DownloadUserToMobile());
    this.navCtrl.setRoot("SelectEaPage");
    // this.store.dispatch(new LoadDataWorkEAByUserId(this.userInfo));
    // this.store.dispatch(new LoadCountOfWorks(this.userInfo));
    // this.formDataEa$.subscribe(data => {
    //   console.log(data);
      
    //   if (data != null) {
    //     this.dataEa = data
    //     console.log(this.dataEa);
    //     this.storage.set(this.userInfo.idUser, this.dataEa);
    //     this.navCtrl.setRoot("SelectEaPage");
    //   }
    // });
  }

  goBack() {
    this.navCtrl.pop();
  }



}
