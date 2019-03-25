import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private cloudSync: CloudSyncProvider, private appState: AppStateProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  /**
   * Upload ข้อมูลขึ้นไปเก็บไว้บน cloud server
   */
  public uploadToCloud() {
    const blobUri = "https://nsomap.blob.core.windows.net"; // Or should have '/' ?

    this.cloudSync.getUploadToCloud(this.appState.userId).take(1).subscribe(d2c => {
      let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, d2c.complementary);

      this.storage.keys().then(keys => {
        for (const k of keys) {
          this.storage.get(k).then(txt => {
            blob.createBlockBlobFromText(d2c.containerName, k + ".txt", JSON.stringify(txt), (err, result, resp) => {
              if (!resp.isSuccessful) {
                // err != null?
              }
            });  
          });
        }
      });
    });
  }
  
  goBack() {
    this.navCtrl.pop();
  }

}
