import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArrayIsCheck } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetNextPageDirection } from '../../states/household/household.actions';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getIdEsWorkHomes } from '../../states/logging';
import { provinceData, Province } from '../../models/ProvinceData';

@IonicPage()
@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {

  private submitRequested: boolean;
  public f: FormGroup;
  public whatever: any;
  private i: any;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.population));
  private getIdHomes$ = this.storeLog.select(getIdEsWorkHomes);
  public getIdHomes:any;
  public str:any;
  public pro:Province;
  public proName:any;
  public checkEnd :boolean;


  @ViewChildren(TablePopulationComponent) private persons: TablePopulationComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>, private storeLog: Store<LoggingState>) {
    this.f = this.fb.group({
      'personCount': [null, Validators.required],
      'persons': this.fb.array([])
    }),
      this.setupPersonCountChanges();
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
    this.getIdHomes$.subscribe(data=> this.str = data);
    
    this.getIdHomes = this.str.substring(0,2); //10
    this.pro = provinceData.find(it=>it.codeProvince == this.getIdHomes);
    this.proName = this.pro.name;
    this.i = this.navParams.get('i');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.persons.forEach(it => it.submitRequest());
    // this.store.dispatch(new SetNextPageDirection(23));

    if (this.f.valid && this.isCheckHaveHeadfamily()) {
      this.arrayIsCheckMethod();
      this.navCtrl.setRoot("UnitPage");
      // this.i++;
      // this.navCtrl.setRoot("CheckListPage", { i: this.i });
    }
  }

  arrayIsCheckMethod() {
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;
        arrayIsCheck.push(22);
        console.log(arrayIsCheck);
      }
    });
  }

  public isCheckHaveHeadfamily(): boolean {
    if (this.submitRequested == true) {
      let persons = this.f.get('persons') as FormArray;
      for (let i = 0; i < persons.length; i++) {
        if (persons.at(i).get('relationship').value == "1") return true;
      }
      return false;
    }
    return true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPersonCountChanges() {
    const componentFormArray: string = "persons";
    const componentCount: string = "personCount";

    var onComponentCountChanges = () => {
      var persons = (this.f.get(componentFormArray) as FormArray).controls || [];
      var personCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      personCount = Math.max(0, personCount);

      for (let i = 0; i < personCount; i++) {
        var ctrl = null;
        if (i < persons.length) {
          const fld = persons[i];
          ctrl = fld;
        } else {
          ctrl = TablePopulationComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
