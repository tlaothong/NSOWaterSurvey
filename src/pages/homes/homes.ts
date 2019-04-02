import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController, LoadingController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getHomeBuilding, getStoreWorkEaOneRecord, getLoadCommunity, getLoadCommunityForEdit } from '../../states/logging';
import { BuildingState } from '../../states/building/building.reducer';
import { SetRecieveDataFromBuilding, SaveBuilding, NewBuilding, DeleteBuilding, SetCurrentWorkingBuilding } from '../../states/building/building.actions';
import { Storage } from '@ionic/storage';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { getCurrentWorkingEA } from '../../states/bootup';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { getBuildingList } from '../../states/building';
import { BuildingInList, CommunityInList } from '../../models/mobile/MobileModels';
import { CommunityState } from '../../states/community/community.reducer';
import { SetCurrentWorkingCommunity, NewCommunity, DeleteCommunity } from '../../states/community/community.actions';
import { getCommunityList } from '../../states/community';



@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  data: any;
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
  // private dataCommunity: any;
  public statusEa: any = 1;

  public currentEA$ = this.store.select(getCurrentWorkingEA);
  public buildings$ = this.storeBuild.select(getBuildingList);
  public buildingList$ = this.buildings$;
  public buildingListAll$;
  public buildingListRecentlyUse$;
  public buidlingListPaused$;
  public buildingListRevisit$;

  public listMode: string = "recent";

  constructor(public loadingCtrl: LoadingController, private fb: FormBuilder, private storage: Storage,
    public alertController: AlertController, public navCtrl: NavController,
    public navParams: NavParams, private popoverCtrl: PopoverController,
    private store: Store<BootupState>, private storeLogging: Store<LoggingState>,
    private storeCom: Store<CommunityState>, private storeBuild: Store<BuildingState>,
    private appState: AppStateProvider) {
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
    // this.store.dispatch(new LoadUnitByIdBuildingSuccess(null));
    // this.DataStoreWorkEaOneRecord$.subscribe(data => {
    //   if (data != null) {
    //     this.dataWorkEARow = data
    // this.statusEa = data.properties.ea_type;
    // console.log(this.dataWorkEARow);
    // console.log(this.statusEa);

    // this.str = data._id.substring(1, 7);
    // console.log(this.str);

    // this.store.dispatch(new SetIdEaWorkHomes(this.str));
    //   }
    // });

    let eaCode = this.appState.eaCode;

    // this.storage.get("CL" + eaCode).then((val) => {
    //   if (val != null) {
    //     this.dataCommunity = val
    //     console.log(this.dataCommunity);
    //   }
    // })
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
    console.log(this.statusEa);
  }

  // TODO: Will be handled this
  initializeItems() {
    // this.listFilter = this.dataEa;
    this.buildingListAll$ = this.buildings$;
    this.buildingListRecentlyUse$ = this.buildings$.map(lst => lst.sort(it => -it.lastUpdate));
    this.buildingListRevisit$ = this.buildings$.map(lst => lst.filter(it => it.status == "refresh"));
    this.buidlingListPaused$ = this.buildings$.map(lst => lst.filter(it => it.status == "pause"));
  }

  switchListMode() {
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
    if (this.office == 'building') {
      this.store.dispatch(new SetCurrentWorkingBuilding(item.buildingId));
      this.navCtrl.push('BuildingInformation1Page', { ea: this.appState.eaCode, id: item.buildingId });

      // //this.swith.updateBuildingState(item._id);
      // this.storage.get(item.buildingId).then((val) => {
      //   console.log(val);
      //   this.storeBuild.dispatch(new SaveBuilding(val));
      //   this.navCtrl.push('BuildingInformation1Page', { ea: this.appState.eaCode, id: val._id });
      //   // switch (val.status) {
      //   //   case 'refresh':
      //   //     this.navCtrl.push('BuildingInformation1Page', { ea: this.appState.eaCode, id: val._id });
      //   //     break;
      //   //   case 'pause':
      //   //     this.navCtrl.push("UnitPage");
      //   //     break;
      //   //   default:
      //   //     break;
      //   // }
      // })
    }
    else if (this.office == 'areayoi') {
      console.log(item);
      // this.storage.get(item).then((val) => {
      //   console.log(val);
      //   this.storeLogging.dispatch(new LoadCommunityForEditSuccess(val));
      //   this.navCtrl.push("CommunityTestPage", { no: no.toString() })
      // });
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
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [
        {
          text: 'ยืนยัน',
          handler: data => {
            this.store.dispatch(new DeleteBuilding(item))
          }
        },
        {
          text: 'ยกเลิก',
          handler: data => {

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
          text: 'ยืนยัน',
          handler: data => {
            this.storeCom.dispatch(new DeleteCommunity(item))
          }
        },
        {
          text: 'ยกเลิก',
          handler: data => {

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
