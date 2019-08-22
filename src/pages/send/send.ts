import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { SetCurrentStatusState } from '../../states/bootup/bootup.actions';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { getCurrentWorkingEA } from '../../states/bootup';
import { upload1, downloadFile, donwloadBlob, Building, UnitInList, ItemInSendPage, resolutionsEA, HouseHoldUnit } from '../../models/mobile/MobileModels';
import { HttpClient } from '@angular/common/http';
import { BuildingState } from '../../states/building/building.reducer';
import { BuildingInList, SetArrResol } from '../../states/building/building.actions';
import { Storage } from '@ionic/storage';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { BuildingEffects } from '../../states/building/building.effects';
import { HouseHoldEffects } from '../../states/household/household.effects';

declare var AzureStorage;

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
  [x: string]: any;
  public checkDownload: boolean = false;
  public currentEA$ = this.store.select(getCurrentWorkingEA);

  public getUpload1: upload1;
  public getDownload1: downloadFile;
  public delayTime: any;

  public buildingList: BuildingInList[];
  public hh: UnitInList[];
  public counttest: number = 0;

  public bldList: any[] = [];
  public untList: any[] = [];
  public cmnList: any[] = [];
  private uploadShow: boolean = false;
  private downloadShow: boolean = false;
  private countUpload: number = 0;
  private countItemUpload: number = 0;
  private countUploadAll: number = 0;
  private countItem: number = 0;
  private totalItem: number = 0;
  private countItemTotal: number = 0;
  public item: any = [];
  public bldcomplete: any;
  private count: number = 0;
  public bld: any[] = [];
  public unt: any[] = [];
  private arrResol: resolutionsEA[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cloudSync: CloudSyncProvider,
    private appState: AppStateProvider, private loadingCtrl: LoadingController, private storage: Storage,
    private alertCtrl: AlertController, private store: Store<BootupState>,
    private http: HttpClient, private dataStore: DataStoreProvider, private storeBuilding: Store<BuildingState>) {

  }

  ionViewDidLoad() {
    this.store.dispatch(new SetCurrentStatusState("Sync"));
    this.storage.keys().then(val => {
      let keys = val;
      const firstLoading = this.loadingCtrl.create({
        content: '',
        enableBackdropDismiss: false,
      });
      firstLoading.present();
      for (let k of keys) {

        if (k.startsWith('bldlst1v')) {
          this.storage.get(k).then(val => {
            let txt = val;
            console.log(txt);
            txt && txt.forEach(item => {
              this.storage.get(item.buildingId).then(val => {
                this.bldList.push(val);
                console.log(this.bldList);
                console.log(this.bldList.length);
              });
            });

          });
        } else if (k.startsWith('unt4b1v')) {
          this.storage.get(k).then(val => {
            let txt = val
            txt && txt.forEach(item => {
              this.storage.get(item.houseHoldId).then(val => {
                this.untList.push(val);
                console.log(this.untList);
              });
            });
          });
        } else if (k.startsWith('comlst1v')) {
          this.storage.get(k).then(val => {
            let txt = val
            txt && txt.forEach(item => {
              this.storage.get(item.communityId).then(val => {
                this.cmnList.push(val);
                console.log(this.cmnList);

              });
            });
          });
        }
      }

      setTimeout(() => {
        const item2: ItemInSendPage = {
          allbld: this.bldList.length,
          allunt: this.untList.length,
          allcmn: this.cmnList.length,

          bldComplete: this.bldList.filter(it => it.status == "done-all").length,
          untComplete: this.untList.filter(it => it.status == "complete").length,
          cmnComplete: this.cmnList.filter(it => it.status == "done-all").length,

          bldAbandonedCount: this.bldList.filter(it => it.abandonedCount != null).length,
          bldVacancyCount: this.bldList.filter(it => it.vacancyCount != null).length,

          untAbandonedCount: this.untList.filter(it => it.subUnit.accesses == 5).length,
          untVacancyCount: this.untList.filter(it => it.subUnit.accesses == 4).length,
        }
        this.item = item2;
        console.log(item2);
        firstLoading.dismiss();
      }, 5000);
    });
  }

  /**
   * Upload ข้อมูลขึ้นไปเก็บไว้บน cloud server
   */
  public uploadToCloud() {

    const showError = this.alertCtrl.create({
      'title': 'มีข้อผิดพลาด',
      'message': 'ไม่อนุญาตให้ FS แก้ไขและส่งข้อมูลโดยตรง',
      'buttons': ["ตกลง"],
    });
    showError.present();

    // const blobUri = "https://nsodev.blob.core.windows.net"; // Or should have '/' ?
    // const loading = this.loadingCtrl.create({
    //   content: '',
    //   enableBackdropDismiss: false,
    // });
    // loading.present();

    // let hasError = false;
    // this.cloudSync.getUploadToCloud(this.appState.userId).take(1).subscribe(async d2c => {
    //   let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, d2c.complementary);

    //   const keys = await this.storage.keys();

    //   for (const k of keys) {
    //     if (k.startsWith('ulogin1v')) {
    //       continue; // ignore login file
    //     }
    //     let txt = await this.storage.get(k);
    //     blob.createBlockBlobFromText(d2c.containerName, k + ".txt", JSON.stringify(txt), (err, result, resp) => {
    //       if (!resp.isSuccessful) {
    //         // err != null?
    //         hasError = true;
    //       }
    //     });
    //   }

    //   loading.dismiss();

    //   if (hasError) {
    //     const showError = this.alertCtrl.create({
    //       'title': 'มีข้อผิดพลาด',
    //       'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
    //       'buttons': ["ตกลง"],
    //     });
    //     showError.present();
    //   } else {
    //     const showSuccess = this.alertCtrl.create({
    //       'title': 'ส่งข้อมูลเรียบร้อย',
    //       'message': 'ข้อมูลทั้งหมดในเครื่องของท่าน ได้ถูกส่งไปสำรองไว้ (ส่งงาน) บนระบบคลาวด์ของสำนักงานสถิติฯ เรียบร้อยแล้ว',
    //       'buttons': ["ตกลง"],
    //     });
    //     showSuccess.present();
    //   }
    // }, error => {
    //   const showError = this.alertCtrl.create({
    //     'title': 'มีข้อผิดพลาด',
    //     'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
    //     'buttons': ["ตกลง"],
    //   });
    //   showError.present();
    // });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
