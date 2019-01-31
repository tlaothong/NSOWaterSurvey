import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ItemInHomeComponent } from '../../components/item-in-home/item-in-home';
import { LoggingState } from '../../states/logging/logging.reducer';
import { SetIdEaWorkHomes, LoadHomeBuilding, DeleteHomeBuilding, LoadDataBuildingForEdit, LoadDataBuildingForEditSuccess } from '../../states/logging/logging.actions';
import { getIdEsWorkHomes, getHomeBuilding, getStoreWorkEaOneRecord } from '../../states/logging';
import { SwithStateProvider } from '../../providers/swith-state/swith-state';


@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  // @ViewChildren(ItemInHomeComponent) private itemHome: ItemInHomeComponent[];
  data: any;
  formItem: FormGroup;
  office: string = "building";
  public dataEa: any;
  public dataWorkEARow: any;
  // private formDataHomeBuilding$ = this.store.select(getHomeBuilding).pipe(map(s => s));
  // private formDataCountHomeBuilding$ = this.store.select(getCountHomeBuilding).pipe(map(s => s));
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private dataBuilding$ = this.store.select(getHomeBuilding);
  
  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private store: Store<LoggingState>, private swith: SwithStateProvider) {
    this.formItem = fb.group({
      'countHomeBuilding': [null],
      'homeBuilding': this.fb.array([]),
    });
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireHomeComponent, { data: this.dataWorkEARow });
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidEnter() {
    this.DataStoreWorkEaOneRecord$.subscribe(data => {
      if (data != null) {
        this.dataWorkEARow = data
        console.log(this.dataWorkEARow);
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
    var str = id.substring(1, 7);
    this.store.dispatch(new SetIdEaWorkHomes(str));

    this.swith.updateBuildingState(null);
    this.navCtrl.push("BuildingTestPage", { id: id })

  }

  goEditBuildingInfo(id: any) {
    this.swith.updateBuildingState(id);
    this.navCtrl.push("BuildingTestPage")
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

  DeleteBuilding(id: string) {
    this.store.dispatch(new DeleteHomeBuilding(id));
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
