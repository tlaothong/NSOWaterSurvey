import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController, LoadingController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getHomeBuilding, getStoreWorkEaOneRecord } from '../../states/logging';
import { BuildingState } from '../../states/building/building.reducer';
import { NewBuilding, DeleteBuilding, SetCurrentWorkingBuilding } from '../../states/building/building.actions';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { getCurrentWorkingEA } from '../../states/bootup';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { getBuildingList, getArrResol } from '../../states/building';
import { BuildingInList, CommunityInList } from '../../models/mobile/MobileModels';
import { CommunityState } from '../../states/community/community.reducer';
import { SetCurrentWorkingCommunity, NewCommunity, DeleteCommunity } from '../../states/community/community.actions';
import { getCommunityList } from '../../states/community';
import { DataStoreProvider, StatusEA } from '../../providers/data-store/data-store';
import { take } from 'rxjs/operator/take';



@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  // data: StatusEA ;
  formItem: FormGroup;
  office: string = "building";
  x: number = 0;
  // public dataEa: any;
  public datap: any[];
  // public dataWorkEARow: any;
  public str: string;
  public comunity: any;
  // public num: string = "1";
  public listFilter: any;
  private DataStoreWorkEaOneRecord$ = this.storeLogging.select(getStoreWorkEaOneRecord);
  private dataBuilding$ = this.storeBuild.select(getHomeBuilding);
  private dataCommunity$ = this.storeCom.select(getCommunityList);
  private dataArrayResolutions$ = this.storeBuild.select(getArrResol);
  private dataResolutions: any[] = [];
  private dataBuilding: any[] = [];
  // private dataCommunity: any;
  public statusEa: any;

  public currentEA$ = this.store.select(getCurrentWorkingEA);
  public buildings$ = this.storeBuild.select(getBuildingList);
  public buildingList$ = this.buildings$;
  public buildingListAll$;
  public buildingListRecentlyUse$;
  public buidlingListPaused$;
  public buildingListRevisit$;

  public listMode: string = "recent";

  constructor(public loadingCtrl: LoadingController, private fb: FormBuilder,
    public alertController: AlertController, public navCtrl: NavController,
    public navParams: NavParams, private popoverCtrl: PopoverController,
    private store: Store<BootupState>, private storeLogging: Store<LoggingState>,
    private storeCom: Store<CommunityState>, private storeBuild: Store<BuildingState>,
    private appState: AppStateProvider, private dataStore: DataStoreProvider) {
    this.initializeItems();
    this.switchListMode();
    console.log('User Id: ' + this.appState.userId);
    console.log('EA Code: ' + this.appState.eaCode);

  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireHomeComponent);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidEnter() {
    let eaCode = this.appState.eaCode;
    this.switchListMode();
    let statusEa$ = this.dataStore.loadStatusEA(eaCode);
    statusEa$.take(1).subscribe(data => {
      if (data == null) {
        this.statusEa = 1;
      } else {
        const data2: StatusEA = {
          status: data.status,
          date: data.date,
        }
        this.statusEa = data2.status;
      }
    });

    this.buildings$.take(1).subscribe(async data => {
      if (data != null) {
        this.dataBuilding = await data;
        console.log(this.dataBuilding);

      }
    });

    this.dataArrayResolutions$.take(1).subscribe(async it => {
      if (it != null) {
        var dataRes = await it;
        for (const it1 of this.dataBuilding) {
          for (const it2 of dataRes) {

            let check = await this.dataResolutions && this.dataResolutions.some(data => data.buildingId == it1.buildingId);

            if (check == false || this.dataResolutions.length == 0) {
              if (it1.buildingId == it2.buildingId) {
                await this.dataResolutions.push(it1);
              }
            }
          }
        }
      }
    });

    setTimeout(() => {
      console.log("dataResolutionsAll", this.dataResolutions);
    }, 50);
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่...",
      duration: 2000
    });
    loader.present();
  }

  changeEaStatus() {
    this.statusEa = 2
    const data: StatusEA = {
      status: this.statusEa,
      date: Date.now(),
    }
    console.log(data);

    // if (this.data.status == undefined || this.data.date == undefined) {
    //   this.data.status = this.statusEa;
    //   this.data.date = new Date();
    // }
    // console.log(this.data);

    this.dataStore.saveStatusEA(this.appState.eaCode, data);
  }

  // TODO: Will be handled this
  initializeItems() {
    // this.listFilter = this.dataEa;
    this.buildingListAll$ = this.buildings$.map(lst => lst.sort((l, r) => +l.buildingId.substring(3) - +r.buildingId.substring(3)));
    this.buildingListRecentlyUse$ = this.buildings$.map(lst => lst.sort((l, r) => r.lastUpdate - l.lastUpdate));
    this.buildingListRevisit$ = this.buildings$.map(lst => lst.filter(it => it.status == "refresh"));
    this.buidlingListPaused$ = this.buildings$.map(lst => lst.filter(it => it.status == "pause"));
  }

  switchListMode() {
    this.buildingList$ = this.buildings$;
    switch (this.listMode) {
      case "recent":
        this.buildingList$ = this.buildingListRecentlyUse$;
        break;
      case "paused":
        this.buildingList$ = this.buidlingListPaused$;
        break;
      case "revisit":
        this.buildingList$ = this.buildingListRevisit$;
        break;

      default: // all
        this.buildingList$ = this.buildingListAll$;
        break;
    }


  }

  // changeNum(num: string) {
  //   this.num = num;
  // }

  goBuildingInfo() {
    if (this.office == 'building') {
      // this.storeBuild.dispatch(new SetHomeBuilding(null));
      this.storeBuild.dispatch(new NewBuilding());
      this.navCtrl.push("BuildingInformation1Page", { ea: this.appState.eaCode, id: null })
    } else if (this.office == 'areayoi') {
      // let no = (this.dataCommunity) ? (this.dataCommunity.length + 1) : 1;
      this.storeCom.dispatch(new NewCommunity());
      this.navCtrl.push("CommunityTestPage", { ea: this.appState.eaCode, id: null })
    }
  }

  goEditBuildingInfo(item: BuildingInList, no: number) {
    if (this.office == 'building' || this.office == 'fsedit') {
      this.store.dispatch(new SetCurrentWorkingBuilding(item.buildingId));
      this.navCtrl.push('BuildingInformation1Page', { ea: this.appState.eaCode, id: item.buildingId });
    }
    else if (this.office == 'areayoi') {
    }
    // this.presentLoading();
  }

  goEditCommunityInfo(item: CommunityInList) {
    console.log(item.communityId);
    console.log(item);

    this.storeCom.dispatch(new SetCurrentWorkingCommunity(item.communityId));
    this.navCtrl.push("CommunityTestPage", { ea: this.appState.eaCode, id: item.communityId })
  }

  async presentAlertBD(item) {
    const alert = await this.alertController.create({
      title: 'ต้องการจะลบใช่หรือไม่<br><b style="font-size:25px">(โปรดระวัง ! การลบข้อมูลที่สมบูรณ์ในแท็บเล็ต จะมีผลต่อข้อมูลที่ส่งขึ้นระบบเว็บไปแล้ว จะถูกลบไปด้วย)</b>',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {

          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            this.store.dispatch(new DeleteBuilding(item))
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertCM(item) {
    const alert = await this.alertController.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {

          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            this.storeCom.dispatch(new DeleteCommunity(item))
          }
        }
      ]
    });
    await alert.present();
  }

  DeleteBuilding(item: any) {
    this.presentAlertBD(item)
  }

  deleteCommu(id: string) {
    this.presentAlertCM(id)
  }

  searchItem(ev) {
    this.initializeItems();

    let val = '';
    if (ev.target && ev.target.value) {
      val = ev.target.value.toLowerCase();
    }
    this.buildingList$ = this.buildingListAll$.map(lst => lst.filter(it =>
      it.name.toLowerCase().indexOf(val) > -1
      || it.houseNo.toLowerCase().indexOf(val) > -1
    ));
  }
}
