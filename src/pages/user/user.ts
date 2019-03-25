import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getFactorialCategory, getCommercialServiceType, getIsFactorial, getIsCommercial, getArrayIsCheck, getNextPageDirection, } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetSelectorIndex, LoadHouseHoldSample, SaveHouseHold, SetBackToRoot } from '../../states/household/household.actions';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { BuildingState } from '../../states/building/building.reducer';
import { getRecieveDataFromBuilding } from '../../states/building';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public userInfo: FormGroup;
  private submitRequested: boolean;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.closing));
  private formData$ = this.store.select(getHouseHoldSample);
  // private formData: any;
  private factorialCategory$ = this.store.select(getFactorialCategory);
  public facCategory: string;
  private commercialServiceType$ = this.store.select(getCommercialServiceType);
  public commercialServiceType: string;
  private facCategoryUse$ = this.store.select(getIsFactorial);
  public facCategoryUse: boolean;
  private commercialServiceUse$ = this.store.select(getIsCommercial);
  public commercialServiceUse: boolean;
  private GetDataFromBuilding$ = this.storeBuild.select(getRecieveDataFromBuilding);
  private GetDataFromBuilding: any;
  private frontNum: any;
  private backNum: any;
  private oldStatus: string;
  constructor(public navCtrl: NavController, private appState: AppStateProvider, private storage: Storage, private storeBuild: Store<BuildingState>, public local: LocalStorageProvider, public navParams: NavParams, public fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.userInfo = this.fb.group({
      "informer": [null, Validators.required],
      "factorialCategoryCode": [null, Validators],
      "serviceTypeCode": [null, Validators]
    });
  }

  ionViewDidLoad() {
    this.countNumberPage();
    // this.formData$.subscribe((data) => {
    //   if (data != null) {
    //     this.userInfo.setValue(data.closing)
    //     this.formData = data;
    //   }

    // })

    this.factorialCategory$.subscribe(data => this.facCategory = data);
    this.commercialServiceType$.subscribe(data => this.commercialServiceType = data);
    this.facCategoryUse$.subscribe(data => this.facCategoryUse = data);
    this.commercialServiceUse$.subscribe(data => this.commercialServiceUse = data);
  }

  public handleSubmit() {
    this.submitRequested = true;
    if (this.userInfo.valid) {
      this.arrayIsCheckMethod();
      let originalHouseHold = this.appState.houseHoldUnit;
      let newHouseHold = {
        ...originalHouseHold,
        closing: this.userInfo.value,
        status: "complete"
      };
      this.store.dispatch(new SaveHouseHold(newHouseHold));
      this.GetDataFromBuilding$.subscribe(data => this.GetDataFromBuilding = data);
      if (this.GetDataFromBuilding == 1) {
        this.store.dispatch(new SetBackToRoot(true));
        this.navCtrl.popToRoot();
      } else {
        // this.navCtrl.setRoot("UnitPage");
        this.store.dispatch(new SetBackToRoot(true));
        this.navCtrl.popTo(this.navCtrl.getByIndex(3))
      }
    }
  }

  // public updateUnitCountComplete() {
  //   this.storage.get(this.formData.buildingId).then((val) => {
  //     if (val != null) {
  //       let building = val;
  //       if (this.formData.status == "complete" && this.oldStatus != "complete") {
  //         building.unitCountComplete++;
  //         if (building.unitCountComplete == building.unitCount) {
  //           building.status = "done-all";
  //         }
  //       }
  //       else if (this.formData.status != "complete" && this.oldStatus == "complete") {
  //         building.unitCountComplete--;
  //         if (building.status == "done-all") {
  //           building.status = "pause";
  //         }
  //       }
  //       this.storage.set(this.formData.buildingId, building);
  //       this.storage.get(building.ea).then((val) => {
  //         let BDlist = val
  //         let index = BDlist.findIndex(it => it._id == building._id)
  //         BDlist.splice(index, 1, building);
  //         // BDlist.push(building)
  //         this.storage.set(building.ea, BDlist)
  //       })
  //     }
  //   });
  // }

  countNumberPage() {
    console.log("onSubmit ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        let arrLength = arrayNextPage.filter((it) => it == true);
        this.backNum = arrLength.length;
      }

    });
    console.log("back", this.backNum);

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
        this.frontNum = arrayIsCheck.length;
      }

    });
    console.log("frontNum", this.frontNum);
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(22));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        if (arrayIsCheck.every(it => it != 22)) {
          arrayIsCheck.push(22);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.userInfo.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}