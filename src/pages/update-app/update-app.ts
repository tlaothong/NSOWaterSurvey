import { Component } from '@angular/core';
import { Pro } from '@ionic/pro';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the UpdateAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-app',
  templateUrl: 'update-app.html',
})
export class UpdateAppPage {

  public updateAvailable = false;
  public downloadProgress: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateAppPage');

    this.initPage();
  }

  /**
   * initPage
   */
  public async initPage() {
    const loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      dismissOnPageChange: true,
      content: 'กำลังตรวจสอบเวอร์ชันอัพเดทล่าสุดจากคลาวด์',
    })
    const update = await Pro.deploy.checkForUpdate();
    this.updateAvailable = update.available;
  }

  /**
   * performUpdate
   */
  public async performUpdate() {
    try {
      if (this.updateAvailable) {
        this.downloadProgress = 0;

        await Pro.deploy.downloadUpdate((progress) => {
          this.downloadProgress = progress;
        })
        await Pro.deploy.extractUpdate();
        await Pro.deploy.reloadApp();
      }
    } catch (error) {
      Pro.monitoring.exception(error);
      const showError = this.alertCtrl.create({
        title: 'เกิดข้อผิดพลาด',
        message: 'อัพเดทโปรแกรมไม่สำเร็จ เกิดข้อผิดพลาดระหว่างการอัพเดท กรุณาลองใหม่ภายหลัง',
        buttons: [ "ตกลง" ],
      });
      showError.present();
    }
  }

}
