import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ItemInHomeComponent } from '../../components/item-in-home/item-in-home';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetIdEaWorkHomes, LoadHomeBuilding, DeleteHomeBuilding } from '../../states/logging/logging.actions';
import { getHomeBuilding, getStoreWorkEaOneRecord } from '../../states/logging';
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
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private dataBuilding$ = this.store.select(getHomeBuilding);

  public str: string;

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
    this.dataBuilding$.subscribe(data => {
      if (data != null) {
        this.dataEa = data
      }
      console.log(this.dataEa);
    });
    console.log(this.data);

  }

  goBuildingInfo(id: any) {
    this.swith.updateBuildingState(null);
    this.navCtrl.push("BuildingTestPage", { id: id })
  }

  goEditBuildingInfo(id: any) {
    this.swith.updateBuildingState(id);
    this.navCtrl.push("BuildingTestPage")
  }

  DeleteBuilding(id: string) {
    this.store.dispatch(new DeleteHomeBuilding(id));
    this.store.dispatch(new LoadHomeBuilding(this.dataWorkEARow._id));
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
