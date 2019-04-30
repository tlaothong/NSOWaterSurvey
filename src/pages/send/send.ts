import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { AppStateProvider } from '../../providers/app-state/app-state';

declare var AzureStorage;

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage, private cloudSync: CloudSyncProvider,
    private appState: AppStateProvider, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  /**
   * Upload ข้อมูลขึ้นไปเก็บไว้บน cloud server
   */
  public uploadToCloud() {

    const blobUri = "https://nsomap.blob.core.windows.net"; // Or should have '/' ?
    const loading = this.loadingCtrl.create({
      content: '',
      enableBackdropDismiss: false,
    });
    loading.present();

    let hasError = false;
    this.cloudSync.getUploadToCloud(this.appState.userId).take(1).subscribe(async d2c => {
      let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, d2c.complementary);

      const keys = await this.storage.keys();

      for (const k of keys) {
        let txt = await this.storage.get(k);
        blob.createBlockBlobFromText(d2c.containerName, k + ".txt", JSON.stringify(txt), (err, result, resp) => {
          if (!resp.isSuccessful) {
            // err != null?
            hasError = true;
          }
        });
      }

      loading.dismiss();

      if (hasError) {
        const showError = this.alertCtrl.create({
          'title': 'มีข้อผิดพลาด',
          'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
          'buttons': ["ตกลง"],
        });
        showError.present();
      } else {
        const showSuccess = this.alertCtrl.create({
          'title': 'ส่งข้อมูลเรียบร้อย',
          'message': 'ข้อมูลทั้งหมดในเครื่องของท่าน ได้ถูกส่งไปสำรองไว้ (ส่งงาน) บนระบบคลาวด์ของสำนักงานสถิติฯ เรียบร้อยแล้ว',
          'buttons': ["ตกลง"],
        });
        showSuccess.present();
      }
    }, error => {
      const showError = this.alertCtrl.create({
        'title': 'มีข้อผิดพลาด',
        'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
        'buttons': ["ตกลง"],
      });
      showError.present();
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
