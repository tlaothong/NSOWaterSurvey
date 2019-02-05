import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetIdEaWorkHomes, LoadHomeBuilding, DeleteHomeBuilding, LoadCommunity, LoadCommunityForEdit } from '../../states/logging/logging.actions';
import { getHomeBuilding, getStoreWorkEaOneRecord, getLoadCommunity, getLoadCommunityForEdit } from '../../states/logging';
import { SwithStateProvider } from '../../providers/swith-state/swith-state';



@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  data: any;
  formItem: FormGroup;
  office: string = "building";
  public dataEa: any;
  public dataWorkEARow: any;
  public str: string;
  public comunity: any;
  public num: string = "1";

 
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private dataBuilding$ = this.store.select(getHomeBuilding);
  private dataCommunity$ = this.store.select(getLoadCommunity);
  private dataCommunity: any;

  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private store: Store<LoggingState>, private swith: SwithStateProvider) {

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

  // setFilteredItems(name) {
  //   this.dataEa = this.dataEa.filter((data) => {
  //     let temp = '';
  //     return temp.toLowerCase().indexOf(name.toLowerCase()) > -1;
  //   });
  // }

  ionViewDidEnter() {
    
    
    this.DataStoreWorkEaOneRecord$.subscribe(data => {
      if (data != null) {
        this.dataWorkEARow = data
        console.log(this.dataWorkEARow);

        this.str = data._id.substring(1, 7);
        this.store.dispatch(new SetIdEaWorkHomes(this.str));
      }
    });
    this.store.dispatch(new LoadHomeBuilding(this.dataWorkEARow._id));
    this.store.dispatch(new LoadCommunity(this.dataWorkEARow._id));
    this.dataBuilding$.subscribe(data => {
      if (data != null) {
        this.dataEa = data
      }
    });

    this.dataCommunity$.subscribe(data => {
      if (data != null) {
        this.dataCommunity = data
      }
    });

  }

  changeNum(num: string) {
    this.num = num;
  }

  goBuildingInfo() {
    if (this.num == '1') {
      this.swith.updateBuildingState(null);
      this.navCtrl.push("BuildingTestPage", { id: null })
    } else if (this.num == '2') {
      this.store.dispatch(new LoadCommunityForEdit(null));
      this.navCtrl.push("CommunityTestPage", { id: null })
    }
  }

  goEditBuildingInfo(id: any) {
    if (this.num == '1') {
      this.swith.updateBuildingState(id);
      this.navCtrl.push("BuildingTestPage")
    } else if (this.num == '2') {
      this.store.dispatch(new LoadCommunityForEdit(id));
      this.navCtrl.push("CommunityTestPage")
    }

  }

  DeleteBuilding(id: string) {
    this.store.dispatch(new DeleteHomeBuilding(id));
    this.store.dispatch(new LoadHomeBuilding(this.dataWorkEARow._id));
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
