import { SetHomeBuildingSuccess } from './../../states/building/building.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetIdEaWorkHomes, LoadHomeBuilding, DeleteHomeBuilding, LoadCommunity, LoadCommunityForEdit, LoadCommunityForEditSuccess } from '../../states/logging/logging.actions';
import { getHomeBuilding, getStoreWorkEaOneRecord, getLoadCommunity, getLoadCommunityForEdit } from '../../states/logging';
import { SwithStateProvider } from '../../providers/swith-state/swith-state';
import { BuildingState } from '../../states/building/building.reducer';
import { SetRecieveDataFromBuilding, SetHomeBuilding } from '../../states/building/building.actions';
import { Storage } from '@ionic/storage';
import { LoadUnitByIdBuildingSuccess } from '../../states/household/household.actions';
import { shiftInitState } from '@angular/core/src/view';



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
  public dataEa: any;
  public datap: any[];
  public dataWorkEARow: any;
  public str: string;
  public comunity: any;
  public num: string = "1";
  public listFilter: any;
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private dataBuilding$ = this.store.select(getHomeBuilding);
  private dataCommunity$ = this.store.select(getLoadCommunity);
  private dataCommunity: any;
  public statusEa: any;

  constructor(private fb: FormBuilder, private storage: Storage, public alertController: AlertController, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private store: Store<LoggingState>, private swith: SwithStateProvider, private storeBuild: Store<BuildingState>) {
    this.initializeItems();
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireHomeComponent, {
      data: this.dataWorkEARow,
      str: this.str
    });
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidEnter() {
    // this.store.dispatch(new LoadUnitByIdBuildingSuccess(null));
    // this.DataStoreWorkEaOneRecord$.subscribe(data => {
    //   if (data != null) {
    //     this.dataWorkEARow = data
    //     this.statusEa = data.properties.ea_type;
    //     console.log(this.dataWorkEARow);
    //     console.log(this.statusEa);

    //     this.str = data._id.substring(1, 7);
    //     console.log(this.str);

    //     this.store.dispatch(new SetIdEaWorkHomes(this.str));
    //   }
    // });

    // this.storage.get(this.dataWorkEARow._id).then((data) => {
    //   if (data != null) {
    //     this.dataEa = data
    //     this.listFilter = this.dataEa;
    //     console.log(this.dataEa)
    //   }
    // });

    // this.storage.get("CL" + this.dataWorkEARow._id).then((val) => {
    //   if (val != null) {
    //     this.dataCommunity = val
    //     console.log(this.dataCommunity);
    //   }
    // })
  }
  filterRefresh() {
    this.storage.get(this.dataWorkEARow._id).then((data) => {
      if (data != null) {
        this.dataEa = data
        this.datap = this.dataEa.filter(it => it.status == "refresh")
        console.log(this.datap);
        this.listFilter = this.datap;
      }
    });
  }

  filterLastUpdate() {
    this.storage.get(this.dataWorkEARow._id).then((data) => {
      if (data != null) {
        this.dataEa = data;
        this.datap = this.dataEa.sort(it => {
          return -it.lastUpdate;
        });
        this.listFilter = this.datap;
      }
    });
  }

  filterPause() {
    this.storage.get(this.dataWorkEARow._id).then((data) => {
      if (data != null) {
        this.dataEa = data
        this.datap = this.dataEa.filter(it => it.status == "pause")
        console.log(this.datap);
        this.listFilter = this.datap;
      }
    });
  }
  totalData() {
    this.storage.get(this.dataWorkEARow._id).then((data) => {
      if (data != null) {
        this.dataEa = data
        this.listFilter = this.dataEa;
        console.log(this.dataEa)
      }
    });
  }

  changeNum(num: string) {
    this.num = num;
  }

  goBuildingInfo() {
    if (this.num == '1') {
      this.storeBuild.dispatch(new SetHomeBuildingSuccess(null));
      this.navCtrl.push("BuildingInformation1Page", { ea: this.dataWorkEARow._id, id: null })
    } else if (this.num == '2') {
      let no = (this.dataCommunity) ? (this.dataCommunity.length + 1) : 1;
      this.store.dispatch(new LoadCommunityForEditSuccess(null));
      this.navCtrl.push("CommunityTestPage", { id: null, no: no.toString() })
    }
  }

  goEditBuildingInfo(item: any, no: number) {
    if (this.num == '1') {
      //this.swith.updateBuildingState(item._id);
      this.storage.get(item._id).then((val) => {
        console.log(val);
        this.storeBuild.dispatch(new SetHomeBuildingSuccess(val));
        this.navCtrl.push('BuildingInformation1Page', { ea: this.dataWorkEARow._id, id: val._id });
        // switch (val.status) {
        //   case 'refresh':
        //     this.navCtrl.push('BuildingInformation1Page', { ea: this.dataWorkEARow._id, id: val._id });
        //     break;
        //   case 'pause':
        //     this.navCtrl.push("UnitPage");
        //     break;
        //   default:
        //     break;
        // }
      })
    }
    else if (this.num == '2') {
      console.log(item);
      this.storage.get(item).then((val) => {
        console.log(val);
        this.store.dispatch(new LoadCommunityForEditSuccess(val));
        this.navCtrl.push("CommunityTestPage", { no: no.toString() })
      });
    }

  }

  async presentAlertBD(id) {
    const alert = await this.alertController.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [
        {
          text: 'ยืนยัน',
          handler: data => {
            this.storage.get(this.dataWorkEARow._id).then((data) => {
              if (data != null) {
                let list = data
                let index = list.findIndex(it => it._id == id)
                list.splice(index, 1)
                if (data == []) {
                  this.storage.remove(this.dataWorkEARow._id);
                }
                this.storage.set(this.dataWorkEARow._id, list)
              }
            });
            this.storage.remove(id);
            this.storage.get("BL" + id).then((val) => {
              if (val != null) {
                let listHH = val;
                listHH.forEach(it => {
                  this.storage.remove(it._id);
                  this.storage.remove("BL" + id);
                });
              }
            })
            // this.store.dispatch(new LoadHomeBuilding(this.dataWorkEARow._id));
            this.storage.get(this.dataWorkEARow._id).then((data) => {
              if (data != null) {
                this.dataEa = data
                this.listFilter = this.dataEa;
                console.log(this.dataEa)
              }
            });
            this.navCtrl.setRoot(this.navCtrl.getActive().component);

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

  async presentAlertCM(id) {
    const alert = await this.alertController.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [
        {
          text: 'ยืนยัน',
          handler: data => {
            console.log(id);
            console.log("CL" + this.dataWorkEARow._id);
            this.storage.get("CL" + this.dataWorkEARow._id).then((val) => {
              if (val != null) {
                let list = val
                let index = list.findIndex(it => it._id == id)
                list.splice(index, 1)
                if (val == []) {
                  this.storage.remove("CL" + this.dataWorkEARow._id);
                }
                this.storage.set("CL" + this.dataWorkEARow._id, list)
              }
            });
            this.storage.remove(id);
            this.storage.get("CL" + this.dataWorkEARow._id).then((val) => {
              if (val != null) {
                this.dataCommunity = val
              }
            })
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
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

  DeleteBuilding(id: string) {
    this.presentAlertBD(id)
  }

  deleteCommu(id: string) {
    this.presentAlertCM(id)
  }

  initializeItems() {
    this.listFilter = this.dataEa;
  }

  searchItem(ev) {
    this.initializeItems();
    // // set val to the value of the ev target
    var val = ev.target.value;
    // // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listFilter = this.dataEa.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1
          || item.houseNo.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }
}
