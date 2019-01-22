import { Component, ViewChildren, transition } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample, getArrayIsCheck } from '../../states/household';
import { map } from 'rxjs/operators';
import { SetNextPageDirection } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {

  private submitRequested: boolean;
  public f: FormGroup;
  public whatever: any;

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.population));


  @ViewChildren(TablePopulationComponent) private persons: TablePopulationComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = this.fb.group({
      'personCount': [null, Validators.required],
      'persons': this.fb.array([])
    }),
      this.setupPersonCountChanges();
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.persons.forEach(it => it.submitRequest());
    this.store.dispatch(new SetNextPageDirection(23));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck :Array<number>;
    arrayIsCheck$.subscribe(data => arrayIsCheck = data);
    arrayIsCheck.push(22);
    console.log(arrayIsCheck);
    if (this.f.valid && this.isCheckHaveHeadfamily()) {
      this.navCtrl.setRoot("UnitPage");
    }
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
