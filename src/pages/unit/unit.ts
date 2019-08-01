import { take } from 'rxjs/operator/take';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ActionSheetController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { HouseHoldState } from '../../states/household/household.reducer';
import { NewHouseHoldWithSubUnit, SetCurrentWorkingHouseHold, SaveHouseHoldSubUnit, DeleteHouseHold } from '../../states/household/household.actions';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { getHouseHoldUnitList } from '../../states/household';
import { Observable } from 'rxjs';
import { UnitInList, resolutionsEA } from '../../models/mobile/MobileModels';
import { getUnitCount, getArrResol } from '../../states/building';
import { DataStoreProvider } from '../../providers/data-store/data-store';

@IonicPage()
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
})
export class UnitPage {
  public unitList$ = this.store.select(getHouseHoldUnitList);
  public unitCount$ = this.storeBuild.select(getUnitCount);
  private dataArrayResolutions$ = this.storeBuild.select(getArrResol);
  private dataArrayResolutions: resolutionsEA[] = [];
  public emptyUnits$ = Observable.of([]);
  private isShowWarning: boolean;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController,
    private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>,
    private dataStore: DataStoreProvider, private appState: AppStateProvider) {
    this.unitList$.subscribe(data => console.log(data));
  }

  ionViewDidLoad() {
    this.dataArrayResolutions$.take(1).subscribe(data => {
      if (data != null) {
        this.dataArrayResolutions = data;
      }
    })
  }
  private showIconWaring(unitId: string): boolean {
    var checkShow = false;
    for (const it1 of this.dataArrayResolutions) {
      for (const it2 of it1.unitResolutions) {

        if (it2.unitId == unitId) {
          checkShow = !(it2.isApproved);
        }
      }
    }

    return checkShow;
  }

  public showSuggestionUnit(unitId: string) {

    var suggestionMessage = "";
    for (const it1 of this.dataArrayResolutions) {
      for (const it2 of it1.unitResolutions) {
        if (it2.unitId == unitId) {
          suggestionMessage = it2.suggestion;
        }
      }
    }
    let showSuggestion = this.modalCtrl.create("DlgShowSuggestionUnitPage", { suggestions: suggestionMessage });
    showSuggestion.present();
  }

  public updateTheEmptyList() {
    this.emptyUnits$ = Observable.combineLatest(
      this.unitList$, this.unitCount$)
      .map(([it, untCnt]) => {
        const start = it.length + 1;
        const len = untCnt - it.length;
        if (len > 0) {
          let arr: number[] = [];
          for (let idx = 0; idx < len; ++idx) {
            arr.push(idx + start);
          }
          return arr;
        }
        else return [];
      });
  }

  public showUnitButtonPopover(unit: UnitInList) {
    const actionSheet = this.actionSheetCtrl.create({
      title: "ดำเนินการกับข้อมูลห้องที่ / เลขที่ " + unit.roomNumber,
      buttons: [
        {
          text: "แก้ไขการเข้าพบ/เลขที่",
          handler: () => {
            this.updateUnit(unit);
          }
        },
        {
          text: "ลบ",
          role: "destructive",
          handler: () => {
            this.deleteUnit(unit);
          }
        }
      ],
    });
    actionSheet.present();
  }

  private updateUnit(unit: UnitInList) {
    this.dataStore.getHouseHold(unit.houseHoldId)
      .take(1).subscribe(sample => {

        const modal = this.modalCtrl.create("DlgUnitPage", {
          replaceMode: true, unitInfo: {
            subUnit: sample.subUnit,
            access: unit.lastAccess,
          }
        });
        modal.onDidDismiss(data => {
          if (data) {
            this.store.dispatch(new SaveHouseHoldSubUnit(sample, data.subUnit, data.comment));
          }
        });
        modal.present();

      });
  }

  private deleteUnit(unit: UnitInList) {
    const showConfirmation = this.alertCtrl.create({
      title: "ยืนยันการลบข้อมูล",
      message: "ท่านต้องการลบข้อมูลหน่วยย่อยหรือไม่ หากต้องการกรุณากดยืนยัน",
      buttons: [
        "ยกเลิก",
        {
          text: "ยืนยัน",
          handler: () => {
            this.store.dispatch(new DeleteHouseHold(unit))
          }
        }
      ]
    });
    showConfirmation.present();
  }

  public newUnit() {
    const modal = this.modalCtrl.create("DlgUnitPage", {
      unitInfo: {
        subUnit: {
          roomNumber: null,
          accessCount: 0,
          accesses: [],
          hasPlumbing: null,
          hasPlumbingMeter: null,
          isPlumbingMeterXWA: null,
          hasGroundWater: null,
          hasGroundWaterMeter: null,
        }
      }
    });
    modal.onDidDismiss(data => {
      if (data) {
        this.store.dispatch(new NewHouseHoldWithSubUnit(data.subUnit, data.comment));
        let cnt = data.subUnit.accessCount;
        let lastIndex = Math.max(0, cnt - 1);
        if (data.subUnit.accesses && data.subUnit.accesses.length > 0 && data.subUnit.accesses[lastIndex] == 1) {
          this.navCtrl.push('WaterActivityUnitPage');
        }
      }
    });
    modal.present();
  }

  public continueUnit(unt: UnitInList) {
    if (unt.lastAccess == 1) {
      this.store.dispatch(new SetCurrentWorkingHouseHold(unt.houseHoldId));
      this.navCtrl.push('WaterActivityUnitPage');
      return;
    } else if (unt.lastAccess == 2 || unt.lastAccess == 3) {
      if (unt.accessCount < 3) {
        this.dataStore.getHouseHold(unt.houseHoldId)
          .take(1).subscribe(sample => {
            const modal = this.modalCtrl.create("DlgUnitPage", {
              unitInfo: {
                subUnit: sample.subUnit
              }
            });
            modal.onDidDismiss(data => {
              if (data) {
                this.store.dispatch(new SaveHouseHoldSubUnit(sample, data.subUnit, data.comment));
                let cnt = data.subUnit.accessCount;
                let lastIndex = Math.max(0, cnt - 1);
                if (data.subUnit.accesses && data.subUnit.accesses.length > 0 && data.subUnit.accesses[lastIndex] == 1) {
                  this.navCtrl.push('WaterActivityUnitPage');
                }
              }
            });
            modal.present();

          });

        return;
      }
    }

    let alert = this.alertCtrl.create({
      title: "ไม่สามารถดำเนินการ",
      message: "ลักษณะการเข้าครัวเรือนไม่เหมาะสมกับการดำเนินการต่อ หากต้องการดำเนินการต่อ กรุณาแก้ไขการเข้าพบ",
      buttons: ["ตกลง"],
    });
    alert.present();
  }

  public showComments(unit: UnitInList) {
    let showComments = this.modalCtrl.create("DlgCommentListPage", { comments: unit.comments });
    showComments.present();
  }
}
