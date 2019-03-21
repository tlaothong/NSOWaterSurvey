import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

declare var AzureStorage;

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  /**
   * Upload ข้อมูลขึ้นไปเก็บไว้บน cloud server
   */
  public uploadToCloud() {
    const blobUri = "https://nsomap.blob.core.windows.net"; // Or should have '/' ?
    let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, '?sv=2018-03-28&ss=b&srt=co&sp=wlac&se=2019-03-21T00:52:06Z&st=2019-03-20T16:52:06Z&spr=https&sig=SAaSeJcSNy18mRMuDIacqAgtd%2FZMpfqoxcFKY%2FDL9Z0%3D');

    this.storage.keys().then(keys => {
      for (const k of keys) {
        this.storage.get(k).then(txt => {
          blob.createBlockBlobFromText("uptest", k + ".txt", JSON.stringify(txt), (err, result, resp) => {
            if (!resp.isSuccessful) {
              // err != null?
            }
          });  
        });
      }
    });
  }
  
  goBack() {
    this.navCtrl.pop();
  }

}
