import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { SetCurrentStatusState } from '../../states/bootup/bootup.actions';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { getCurrentWorkingEA } from '../../states/bootup';
import { upload1, downloadFile, donwloadBlob, Building, UnitInList, ItemInSendPage } from '../../models/mobile/MobileModels';
import { HttpClient } from '@angular/common/http';
import { BuildingState } from '../../states/building/building.reducer';
import { SaveBuilding, LoadBuildingSample, LoadBuildingList, BuildingInList, SetCurrentWorkingBuilding } from '../../states/building/building.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SaveHouseHold, LoadUnitByIdBuilding, LoadHouseHoldList, SetCurrentWorkingHouseHold } from '../../states/household/household.actions';
import { getBuildingList, getBuildingSample } from '../../states/building';
import { getHouseHoldUnitList } from '../../states/household';
import { Storage } from '@ionic/storage';
import { SetCurrentWorkingEA } from '../../states/bootup/bootup.actions';
import { timeout } from 'rxjs/operator/timeout';
import { delay } from 'rxjs/operators';

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

  public checkTub: boolean = false;
  public buildingList: BuildingInList[];
  public hh: UnitInList[];
  public counttest: number = 0;

  public bldList: any[] = [];
  public untList: any[] = [];
  public cmnList: any[] = [];

  public item: any = [];
  public bldcomplete: any;
  private count: number = 0;
  public bld: any[] = [];
  public unt: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cloudSync: CloudSyncProvider,
    private appState: AppStateProvider, private loadingCtrl: LoadingController, private storage: Storage,
    private alertCtrl: AlertController, private store: Store<BootupState>,
    private http: HttpClient, private storeBuilding: Store<BuildingState>,
    private storeHousehold: Store<HouseHoldState>, private storeBoost: Store<BootupState>, private loadding: LoadingController) {

    //TODO: delete it when finsish
    this.appState.deviceID = "HGAFPPNZ";
  }

  ionViewDidLoad() {
    this.store.dispatch(new SetCurrentStatusState("Sycn"));
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
      // this.getUpload1.sessionId = this.getUpload1.sessionId + this.appState.deviceID;
      console.log(this.getUpload1);
      // console.log("d2c: " + d2c.sessionId);
      // console.log("get: " + this.getUpload1.sessionId);

      let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, d2c.complementary);
      const keys = await this.storage.keys();
      for (const k of keys) {
        if (k.startsWith('ulogin1v')) {
          continue; // ignore login file
        }
        let txt = await this.storage.get(k);
        blob.createBlockBlobFromText(d2c.containerName, k + ".txt", JSON.stringify(txt), (err, result, resp) => {
          if (!resp.isSuccessful) {
            // err != null?
            hasError = true;
          }
        });
      }
      loading.dismiss();
      this.checkDownload = false;

      if (hasError) {
        const showError = this.alertCtrl.create({
          'title': 'มีข้อผิดพลาด',
          'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
          'buttons': ["ตกลง"],
        });
        showError.present();
        loading.dismiss();
      } else {
        // this.cloudSync.uploadFinish(this.appState.userId, d2c.containerName).take(1).subscribe(done => {
        //   const showSuccess = this.alertCtrl.create({
        //     'title': 'ส่งข้อมูลเรียบร้อย',
        //     'message': 'ข้อมูลทั้งหมดในเครื่องของท่าน ได้ถูกส่งไปสำรองไว้ (ส่งงาน) บนระบบคลาวด์ของสำนักงานสถิติฯ เรียบร้อยแล้ว',
        //     'buttons': ["ตกลง"],
        //   });
        //   showSuccess.present();
        //   loading.dismiss();
        // });
        console.log(this.getUpload1.sessionId);
        this.cloudSync.uploadcloud2(this.getUpload1.sessionId).take(1).subscribe(data => {
          this.delayTime = data
          setTimeout(_ => {
            console.log("upload sucess");
          }, this.delayTime);
        });
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
    showDownload.setSubTitle('หากคุณต้องการให้ข้อมูลงานผู้อื่นรวมกับของคุณกรุณาเลือก ต้องการทับงานของตัวเอง')

    showDownload.addInput({
      type: 'checkbox',
      label: 'ต้องการทับงานของตัวเอง?',
      value: 'value2',
      checked: this.checkTub
    });
    showDownload.addButton('ยกเลิก');
    showDownload.addButton({
      text: 'ตกลง',
      handler: data => {
        // this.getUpload1.sessionId = this.getUpload1.sessionId + this.appState.deviceID
        console.log(this.getUpload1.sessionId);
        this.cloudSync.downloadFromCloud1(this.getUpload1.sessionId).take(1).subscribe(async (data: donwloadBlob) => {
          console.log(data);

          for (const it of data.data) {
            this.storeBoost.dispatch(new SetCurrentWorkingEA(it.ea));
            await new Promise((rsv, rjt) => setTimeout(() => {
              this.storeBoost.select(getCurrentWorkingEA).subscribe(async ea => {
                if (it.ea == ea.code) {
                  // console.log("=====>ea$$", ea);
                  for (const it2 of it.items) {
                    if (it2._id.startsWith("bld1v") || it2._id.startsWith("bld2v")) {
                      // setTimeout(async () => {
                      let downloadUrl = data.baseUrl + it2.url + data.complementary;
                      let cnt = await this.http.get<any>(downloadUrl).toPromise();
                      this.storeBuilding.dispatch(new SaveBuilding(cnt));
                      // this.storeBuilding.dispatch(new SetCurrentWorkingBuilding(cnt.buildingId));
                      // await new Promise((resvr, rjt) => setTimeout(resvr, 50));
                    }
                    if (it2._id.startsWith("unt1v") || it2._id.startsWith("unt2v")) {
                      let downloadUrl = data.baseUrl + it2.url + data.complementary;
                      let cnt = await this.http.get<any>(downloadUrl).toPromise();
                      // console.log("$$$$@@@@@", cnt);
                      this.storeHousehold.dispatch(new SaveHouseHold(cnt));
                      // await new Promise((rsv, rjt) => setTimeout(async () => {
                      // await new Promise((rsv, rjt) => setTimeout(() => {
                      // this.storeBuilding.select(getBuildingSample).subscribe(async bld => {
                      // if (bld && bld._id == cnt.buildingId && bld && bld.ea == ea.code) {
                      // this.storeHousehold.dispatch(new SetCurrentWorkingHouseHold(cnt._id));
                      // await new Promise((resvr, rjt) => setTimeout(resvr, 50));
                      // rsv({});
                      // }, 50));
                      // }
                      // });
                      // rsv({});
                      // }, 50));
                    }
                    await new Promise((resvr, rjt) => setTimeout(resvr, 50));
                  }
                  rsv({});
                }
              });
            }, 3000));
          }

          // data.data.forEach(it => {
          //   it.items.forEach(async it2 => {
          //     console.log(it.ea, ea.code);

          //     if (it2._id.startsWith("bld1v")) {
          //       // setTimeout(async () => {
          //       let downloadUrl = data.baseUrl + it2.url + data.complementary;
          //       let cnt = await this.http.get<any>(downloadUrl).toPromise();
          //       this.storeBuilding.dispatch(await new SaveBuilding(cnt));
          //       // }, 1000);
          //       // this.storeBoost.dispatch(new SetCurrentWorkingEA(it.ea));
          //       this.storeBuilding.dispatch(new SetCurrentWorkingBuilding(cnt._id));

          // setTimeout(() => {
          //   this.count++;
          //   console.log("Ea: ", this.count);

          // }, 2000);

          // await Promise
          // this.http.get<any>(downloadUrl).take(1).subscribe(async response => {
          //   var dataRes = response;
          //   console.log(dataRes);
          //   this.storeBuilding.dispatch(new SaveBuilding(await dataRes));
          // });
          // }
          // if (it2._id.startsWith("unt1v")) {
          //   let downloadUrl = data.baseUrl + it2.url + data.complementary;
          //   let cnt = await this.http.get<any>(downloadUrl).toPromise();
          //   console.log("unt", cnt);

          // this.storeHousehold.dispatch(new SaveHouseHold(cnt));
          // this.storeBoost.dispatch(new SetCurrentWorkingEA(it.ea));
          // this.storeBuilding.dispatch(new SetCurrentWorkingBuilding(cnt.buildingId));
          // this.storeHousehold.dispatch(new SetCurrentWorkingHouseHold(cnt._id));
          // }
          //       }
          //         });
          //   });
          // });
          // data.data.forEach(it => {
          //   var D1 = it;
          //   D1.items.forEach(it2 => {
          //     var D2 = it2;
          //     let downloadUrl = data.baseUrl + D2.url + data.complementary;
          //     console.log(downloadUrl);
          //     this.http.get<any>(downloadUrl).take(1).subscribe(response => {
          //       if (response != null) {
          //         var dataRes = response;
          //         console.log(dataRes);
          //         if (dataRes._id.startsWith("bld1v")) {
          //           this.storeBoost.dispatch(new SetCurrentWorkingEA(D1.ea));
          //           this.storeBoost.select(getCurrentWorkingEA).take(1).subscribe(ea => {
          //             console.log(ea);
          //             var eaRes = ea;
          //             if (eaRes && eaRes.code == D1.ea) {
          //               this.storeBuilding.dispatch(new SetCurrentWorkingBuilding(dataRes._id));

          //               this.storeBuilding.select(getBuildingSample).take(1).subscribe(data => {
          //                 var bld = data
          //                 console.log(bld);

          //                 if (bld && bld._id == dataRes._id) {
          //                 this.storeBuilding.dispatch(new SaveBuilding(dataRes));
          //                 }
          //               });
          //             }
          //           });
          //         }
          //       }
          //     });
          //   });
          // });
          // if (dataRes._id.startsWith("unt1v")) {
          //   this.unt.push(dataRes)
          //   console.log(this.unt);

          //   this.storeBoost.dispatch(new SetCurrentWorkingEA(dataRes.ea));
          //   this.storeBuilding.dispatch(new SetCurrentWorkingBuilding(dataRes.buildingId));
          //   this.storeHousehold.dispatch(new SetCurrentWorkingHouseHold(dataRes._id));
          //   this.storeHousehold.dispatch(new SaveHouseHold(dataRes));
          // }

          // if (this.checkTub == false && item._id.startsWith("bld1v")) {
          //   this.storeBuilding.dispatch(new LoadBuildingList(item.ea));
          //   let dataBuilding$ = this.storeBuilding.select(getBuildingList);
          //   dataBuilding$.take(1).subscribe(data => {
          //     this.buildingList = data;
          //     let bldList = this.buildingList.find(it => it.buildingId == item.buildingId);
          //     if (bldList == null) {
          //       this.storeBuilding.dispatch(new SaveBuilding(item));
          //     }
          //   });
          // } else if (this.checkTub == false && item._id.startsWith("unt1v")) {
          //   this.storeHousehold.dispatch(new LoadHouseHoldList(item.buildingId));
          //   let dataHousehold$ = this.storeHousehold.select(getHouseHoldUnitList);
          //   dataHousehold$.take(1).subscribe(data => {
          //     this.hh = data;
          //     let hhList = this.hh.find(it => it.houseHoldId == item.houseHoldId);
          //     if (hhList == null) {
          //       this.storeBuilding.dispatch(new SaveBuilding(item));
          //     }
          //   });
          // } else 


          // this.cloudSync.downloadFromCloud2(this.getUpload1.sessionId).take(1).subscribe(data => {
          //   console.log("download2");
          //   console.log(data);
          //   const showDownloadsucess = this.alertCtrl.create();
          //   showDownloadsucess.setTitle('ดาวน์โหลดไฟล์');
          //   showDownloadsucess.setSubTitle('คุณได้ทำการดาวน์โหลดสำเร็จแล้ว');
          //   showDownload.addButton('ตกลง');

          // });
        });
      }
    });

    showDownload.present();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
