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
  public checkDownload: boolean = true;

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

    const blobUri = "https://nsodev.blob.core.windows.net"; // Or should have '/' ?
    const loading = this.loadingCtrl.create({
      content: '',
      enableBackdropDismiss: false,
    });
    loading.present();

    let hasError = false;
    this.cloudSync.getUploadToCloud(this.appState.userId).take(1).subscribe(async d2c => {
      let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, d2c.complementary);

      const keys = await this.storage.keys();

      // for (const k of keys) {
      //   if (k.startsWith('ulogin1v')) {
      //     continue; // ignore login file
      //   }
      //   let txt = await this.storage.get(k);
      //   blob.createBlockBlobFromText(d2c.containerName, k + ".txt", JSON.stringify(txt), (err, result, resp) => {
      //     if (!resp.isSuccessful) {
      //       // err != null?
      //       hasError = true;
      //     }
      //   });
      // }

      loading.dismiss();

      if (hasError) {
        const showError = this.alertCtrl.create({
          'title': 'มีข้อผิดพลาด',
          'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
          'buttons': ["ตกลง"],
        });
        showError.present();
      } else {
        // this.cloudSync.uploadFinish(this.appState.userId, d2c.containerName).take(1).subscribe(done => {
        const showSuccess = this.alertCtrl.create({
          'title': 'ส่งข้อมูลเรียบร้อย',
          'message': 'ข้อมูลทั้งหมดในเครื่องของท่าน ได้ถูกส่งไปสำรองไว้ (ส่งงาน) บนระบบคลาวด์ของสำนักงานสถิติฯ เรียบร้อยแล้ว',
          'buttons': ["ตกลง"],
        });
        // showSuccess.present();
        // });
        showSuccess.present();
        this.checkDownload = false;

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

  downloadwork() {
    const showDownload = this.alertCtrl.create();
    showDownload.setTitle('กรุณาเลือกความต้องการ');
    showDownload.setSubTitle('หากคุณต้องการให้ข้อมูลงานผู้อื่นรวมกับของคุณกรุณาเลือก ต้องการทับงานของตัวเอง')
    
    showDownload.addInput({
      type: 'checkbox',
      label: 'ต้องการทับงานของตัวเอง?',
      value: 'value2',
      checked: false
    });
    showDownload.addButton('ยกเลิก');
    showDownload.addButton({
      text: 'ตกลง',
      handler: data => {
       
      }
    });

    showDownload.present();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
