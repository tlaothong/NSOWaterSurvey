import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getWorkEAbyIdEA, getCountHomeBuilding, getHomeBuilding } from '../../states/logging';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ItemInHomeComponent } from '../../components/item-in-home/item-in-home';
import { LoadHomeBuilding, LoadCountOfHomeBuilding } from '../../states/logging/logging.actions';


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
  private formDataWorkEA$ = this.store.select(getWorkEAbyIdEA).pipe(map(s => s));
  private formDataHomeBuilding$ = this.store.select(getHomeBuilding).pipe(map(s => s));
  private formDataCountHomeBuilding$ = this.store.select(getCountHomeBuilding).pipe(map(s => s));
  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private store: Store<LoggingState>) {
    this.f = this.fb.group({
      '_id': [null],
      'idUser': [null],
      'zone': [null],
      'province': [null],
      'district': [null],
      'subDistrict': [null],
      'region': fb.group({
        'insideMunicipality': [null],
        'outsideMunicipality': [null]
      }),
      'enumerationCode': [null],
      'villageNo': [null],
      'communityName': [null],
      'irrigatedArea': [null]
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
  ionViewDidEnter() {
    this.store.dispatch(new LoadHomeBuilding());
    this.store.dispatch(new LoadCountOfHomeBuilding());

    this.formDataCountHomeBuilding$.subscribe(
      data => {
        this.formItem.get('countHomeBuilding').setValue(data);
        if (data != null) {
          this.setupHomeBuilding();
          this.formDataHomeBuilding$.subscribe(data => this.formItem.get('homeBuilding').patchValue(data));
        }
      }
    );
  }

  ionViewDidLoad() {
    this.formDataWorkEA$.subscribe(data => {
      if (data != null) {
        this.f.patchValue(data);
      }
    });

  }

  goBuildingInfo() {
    this.navCtrl.push("BuildingInformation1Page")
  }

  private setupHomeBuilding() {
    const componentFormArray: string = "homeBuilding";
    const componentCount: string = "countHomeBuilding";


    var onComponentCountChanges = () => {
      var Ea = (this.formItem.get(componentFormArray) as FormArray).controls || [];
      var EaCount = this.formItem.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      EaCount = Math.max(0, EaCount);

      for (let i = 0; i < EaCount; i++) {
        var ctrl = null;
        if (i < Ea.length) {
          const fld = Ea[i];
          ctrl = fld;
        } else {
          ctrl = ItemInHomeComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.formItem.setControl(componentFormArray, farr);
    };

    this.formItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
