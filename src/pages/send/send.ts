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
import { SaveBuilding, LoadBuildingSample, LoadBuildingList, BuildingInList, SetCurrentWorkingBuilding, SetArrResol } from '../../states/building/building.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SaveHouseHold, LoadUnitByIdBuilding, LoadHouseHoldList, SetCurrentWorkingHouseHold } from '../../states/household/household.actions';
import { getBuildingList, getBuildingSample } from '../../states/building';
import { getHouseHoldUnitList } from '../../states/household';
import { Storage } from '@ionic/storage';
import { SetCurrentWorkingEA } from '../../states/bootup/bootup.actions';
import { timeout } from 'rxjs/operator/timeout';
import { delay } from 'rxjs/operators';
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

    //TODO: delete it when finsish
    this.appState.deviceID = "HGAFPPNZ";
  }

  ionViewDidLoad() {
    this.store.dispatch(new SetCurrentStatusState("Sync"));
    this.storage.keys().then(val => {
      let keys = val
      for (let k of keys) {
        if (k.startsWith('bldlst1v')) {

          this.storage.get(k).then(val => {
            let txt = val
            console.log(txt);
            this.bldcomplete = txt.filter(it => it.status == "done-all").length;
            txt.forEach(item => {
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
            txt.forEach(item => {
              this.storage.get(item.houseHoldId).then(val => {
                this.untList.push(val);
                console.log(this.untList);
                // console.log(this.untList.find(it => it.subUnit.accesses[0] == 3));

              });
            });
          });
        } else if (k.startsWith('comlst1v')) {
          this.storage.get(k).then(val => {
            let txt = val
            txt.forEach(item => {
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

      }, 1000);
    });
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

    // this.cloudSync.uploadTocloud1(this.appState.userId, this.appState.deviceID).take(1).subscribe(data => {
    //   this.getUpload1 = data
    //   console.log(this.getUpload1);
    //   this.getUpload1.sessionId = this.getUpload1.sessionId + this.appState.deviceID;

    let hasError = false;
    this.cloudSync.uploadTocloud1(this.appState.userId, this.appState.deviceID).take(1).subscribe(async d2c => {
      this.getUpload1 = d2c;
      console.log(this.getUpload1);

      let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, this.getUpload1.complementary);
      const keys = await this.storage.keys();
      for (const k of keys) {
        if (k.startsWith('ulogin1v')) {
          continue; // ignore login file
        }
        let txt = await this.storage.get(k);
        blob.createBlockBlobFromText(this.getUpload1.containerName, k + ".txt", JSON.stringify(txt), (err, result, resp) => {
          if (!resp.isSuccessful) {
            // err != null?
            hasError = true;
            // break
            return;
          }
        });
      }
      if (hasError) {
        const showError = this.alertCtrl.create({
          'title': 'มีข้อผิดพลาด',
          'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
          'buttons': ["ตกลง"],
        });
        showError.present();
      } else {
        this.cloudSync.uploadcloud2(this.getUpload1.sessionId).take(1).subscribe(data => {
          this.delayTime = data
          this.checkDownload = true;
          setTimeout(_ => {
            console.log("upload sucess");
            const showSuccess = this.alertCtrl.create({
              'title': 'ส่งข้อมูลเรียบร้อย',
              'message': 'ข้อมูลทั้งหมดในเครื่องของท่าน ได้ถูกส่งไปสำรองไว้ (ส่งงาน) บนระบบคลาวด์ของสำนักงานสถิติฯ เรียบร้อยแล้ว<br>รหัสผู้ใช้งาน :' + this.appState.userId + '<br>รหัสอ้างอิง :' + this.getUpload1.sessionId,
              'buttons': ["ตกลง"],
            });
            loading.dismiss();
            showSuccess.present();
            // showSuccess.present();
          }, this.delayTime);
          if (this.getUpload1.sessionId != null) {
            this.checkDownload = true;
          }
        });
        // });
      }
    }, error => {
      const showError = this.alertCtrl.create({
        'title': 'มีข้อผิดพลาด',
        'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
        'buttons': ["ตกลง"],
      });
      showError.present();
      loading.dismiss();
    });

  }

  downloadwork() {
    const showDownload = this.alertCtrl.create();
    showDownload.setTitle('กรุณาเลือกความต้องการ');
    showDownload.setSubTitle('หากคุณต้องการข้อมูลของคุณจากเครื่องอื่นกรุณาเลือก ต้องการทับงานของตัวเอง')

    showDownload.addInput({
      type: 'checkbox',
      label: 'ต้องการทับงานของตัวเอง?',
      value: 'checktub',
      checked: true,
    });
    showDownload.addButton('ยกเลิก');
    showDownload.addButton({
      text: 'ตกลง',
      handler: dataAlert => {
        console.log(dataAlert);
        console.log(this.getUpload1.sessionId);
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
        });
        loader.present();
        // if (dataAlert.length == 0) { //ไม่ทับ
        this.cloudSync.downloadFromCloud1(this.getUpload1.sessionId).take(1).subscribe(async (data: donwloadBlob) => {
          console.log(data);
          this.totalItem = Math.max(1, data.totalSurveys);
          for (const it of data.data) {
            let eaCode = it.ea;



            let bldlst = await this.dataStore.listBuildingsForEA(eaCode).toPromise();
            // console.log("bldlst in send ", bldlst);

            for (const sample of it.items) {
              let downloadUrl = data.baseUrl + sample.url + data.complementary;
              this.countItem++;
              this.countItemTotal = (this.countItem * 100) / this.totalItem;
              console.log(this.countItemTotal);
              if (dataAlert != 'checktub' && sample._id.search(this.appState.userId) >= 0) {
                // console.log("ก่อน");
                continue;
              }

              if (sample._id.startsWith("bld1v")) {

                var ulist = await this.dataStore.listHouseHoldInBuilding(sample._id).toPromise();
                let cnt = await this.http.get<Building>(downloadUrl).toPromise();
                var bld = cnt;

                if (ulist) {
                  // console.log("หลัง");
                  await this.dataStore.saveHouseHoldInBuildingList(sample._id, ulist).toPromise();
                }


                BuildingEffects.ComposeBuilding(bld, "Sync");
                BuildingEffects.ComposeBuildingList(bld, bldlst, ulist);
                // save building
                this.dataStore.saveBuilding(bld);
                console.log("-----------------------------------------------------------------------------------------------");

              }

              if (sample._id.startsWith("unt")) {
                let cnt = await this.http.get<HouseHoldUnit>(downloadUrl).toPromise();
                let unit = cnt;

                HouseHoldEffects.ComposeUnit(unit, "Sync");
                HouseHoldEffects.ComposeUnitList(unit, ulist);
                // save unit
                this.dataStore.saveHouseHold(unit);
                await this.dataStore.saveHouseHoldInBuildingList(unit.buildingId, ulist).toPromise();
                BuildingEffects.ComposeBuildingList(bld, bldlst, ulist);

                console.log("-----------------------------------------------------------------------------------------------");
              }
            }

            if (bldlst) {
              await this.dataStore.saveBuildingList(eaCode, bldlst).toPromise();
            }
            if (bld && ulist) {
              await this.dataStore.saveHouseHoldInBuildingList(bld._id, ulist).toPromise();
            }
            if (it.resolutions && it.resolutions.length > 0) {
              console.log("Pass if send arrResol", it.resolutions);
              this.storeBuilding.dispatch(new SetArrResol(it && it.resolutions));
            }
          }
          this.cloudSync.downloadFromCloud2(this.getUpload1.sessionId).take(1).subscribe(async data => {
            console.log("download2");
            console.log(data);
            const showDownloadsucess = this.alertCtrl.create({
              'title': 'ดาวน์โหลดไฟล์',
              'message': 'คุณได้ทำการดาวน์โหลดสำเร็จแล้ว',
              'buttons': ["ตกลง"],
            });
            loader.dismiss();
            showDownloadsucess.present();
          });
        });

      }
    });
    showDownload.present();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
