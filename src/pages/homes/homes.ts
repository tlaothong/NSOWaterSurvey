import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getWorkEAbyIdEA } from '../../states/logging';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ItemInHomeComponent } from '../../components/item-in-home/item-in-home';
import { LoadHomeBuilding, LoadCountOfHomeBuilding } from '../../states/building/building.actions';
import { getCountHomeBuilding, getHomeBuilding } from '../../states/building';
import { BuildingState } from '../../states/building/building.reducer';

@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  @ViewChildren(ItemInHomeComponent) private itemHome: ItemInHomeComponent[];
  f: FormGroup;
  formItem: FormGroup;
  office: string = "building";
  private formDataWorkEA$ = this.storeLog.select(getWorkEAbyIdEA).pipe(map(s => s));
  private formDataHomeBuilding$ = this.store.select(getHomeBuilding).pipe(map(s => s));
  private formDataCountHomeBuilding$ = this.store.select(getCountHomeBuilding).pipe(map(s => s));
  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private storeLog: Store<LoggingState>,private store: Store<BuildingState>) {
    this.f = this.fb.group({
      'idEA': [null],
      'idUser': [null],
      'province': [null],
      'district': [null],
      'subDistrict': [null],
      'administrative': [null],
      'municipalities': [null],
     
    });

    this.formItem = fb.group({
      'countHomeBuilding': [null],
      'homeBuilding': this.fb.array([]),
    });
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireHomeComponent, { nav: this.navCtrl });
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    this.store.dispatch(new LoadHomeBuilding());
    this.store.dispatch(new LoadCountOfHomeBuilding());
    
    this.formDataCountHomeBuilding$.subscribe(
      data => {
        this.formItem.get('countHomeBuilding').setValue(data);
        if (data != null) {
          this.setupHomeBuilding();
          this.formDataHomeBuilding$.subscribe(data => this.formItem.get('homeBuilding').setValue(data));
        }
      }
    );
    this.formDataWorkEA$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data);
      }
    });



  }

  goBuildingInfo() {
    this.navCtrl.push("BuildingInformation1Page")
  }

  private setupHomeBuilding() {
    const componentFormArray: string = "HomeBuilding";
    const componentCount: string = "CountHomeBuilding";

    var onComponentCountChanges = () => {
      var homeBuilding = (this.f.get(componentFormArray) as FormArray).controls || [];
      var countHomeBuilding = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      countHomeBuilding = Math.max(0, countHomeBuilding);

      for (let i = 0; i < countHomeBuilding; i++) {
        var ctrl = null;
        if (i < homeBuilding.length) {
          const fld = homeBuilding[i];
          ctrl = fld;
        } else {
          ctrl = ItemInHomeComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
