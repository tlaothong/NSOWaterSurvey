import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { SetIsHouseHold, SetIsAgriculture, SetIsFactorial, SetIsCommercial } from '../../states/household/household.actions';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-water-activity-unit',
  templateUrl: 'water-activity-unit.html',
})
export class WaterActivityUnitPage {

  public f: FormGroup;
  private submitRequested: boolean;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.f = WaterActivityUnitPage.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      '_id': [null, Validators.required],
      'ea': [null, Validators.required],
      'buildingId': [null, Validators.required],
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'accessCount': [0],
        'accesses': fb.array([{
          'access': [null],
        }, {
          'access': [null],
        }, {
          'access': [null],
        }]),
        'hasPlumbing': [null, Validators.required],
        'hasPlumbingMeter': [false, Validators.required],
        'isPlumbingMeterXWA': [false, Validators.required],
        'hasGroundWater': [null, Validators.required],
        'hasGroundWaterMeter': [false, Validators.required],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.array([{
        'at': [null],
        'text': [''],
      }, {
        'at': [null],
        'text': [''],
      }, {
        'at': [null],
        'text': [''],
      }]),
      'residence': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'factory': [null, Validators.required],
      'commerce': [null, Validators.required],
      'waterUsage': [null, Validators.required],
      'disaster': [null, Validators.required],
      'closing': [null, Validators.required],
      'recCtrl': [null, Validators.required],
      'population': fb.group({
        'personCount': [null],
        'persons': fb.array([{
          'nameTitle': [null],
          'otherTitle': [null],
          'firstName': [null],
          'lastName': [null],
          'relationship': [null],
          'sex': [null],
          'age': [null],
          'nationality': [null],
          'registration': [null],
          'otherProvince': [null],
        },
        {
          "nameTitle": [null],
          "otherTitle": [null],
          "firstName": [null],
          "lastName": [null],
          "relationship": [null],
          "sex": [null],
          "age": [null],
          "nationality": [null],
          "registration": [null],
          "otherProvince": [null],
        }])
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterActivityUnitPage');
    this.formData$.subscribe(data => this.f.setValue(data));
    console.log('dasdsadsad');
    console.log(this.f);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.store.dispatch(new SetIsHouseHold(this.f.get('isHouseHold').value));
    this.store.dispatch(new SetIsAgriculture(this.f.get('isAgriculture').value));
    this.store.dispatch(new SetIsFactorial(this.f.get('isFactorial').value));
    this.store.dispatch(new SetIsCommercial(this.f.get('isCommercial').value));
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
