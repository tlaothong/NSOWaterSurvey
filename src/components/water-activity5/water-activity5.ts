import { UpdaterHouseHoldSample } from '../../states/household/household.actions';
import { HouseHoldState } from '../../states/household/household.reducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getHouseHoldSample } from '../../states/household';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'water-activity5',
  templateUrl: 'water-activity5.html'
})
export class WaterActivity5Component {

  private submitRequested: boolean;

  @Input() public FormItem: FormGroup;
  @Input('tag') public tag: string;
  @Input('use') public gardeningUse: boolean;
  @Input('factory') public factoryUse: boolean;
  @Input('headline') public text: string;
  @Input('commerce') public commerceUse: boolean;
  @Input('residence') public residenceUse: boolean;
  @Input('agriculture') public agricultureUse: boolean;

  public resultSum: number;
  public household: any;
  public waterActivitiesWhichToUse: { 'plant': boolean; 'service': boolean; 'product': boolean; 'drink': boolean; 'agriculture': boolean; };
  private formDataHouseHold$ = this.store.select(getHouseHoldSample).pipe(map(s => s));

  constructor(private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.FormItem = WaterActivity5Component.CreateFormGroup(fb);
    this.waterActivitiesWhichToUse = {
      'plant': false,
      'service': false,
      'product': false,
      'drink': false,
      'agriculture': false,
    }
    this.resultSum = 0;
  }

  ngOnInit() {
    this.formDataHouseHold$.subscribe(data => this.household = data);
    this.waterActivitiesWhichToUse = {
      'plant': this.gardeningUse,
      'service': this.commerceUse,
      'product': this.factoryUse,
      'drink': this.residenceUse,
      'agriculture': this.agricultureUse,
    }
    this.sum();
  }

  submitRequest() {
    this.submitRequested = true;
  }

  takeAllToInt() {
    for (let key in this.FormItem.value)
      this.FormItem.value[key] = Number(this.FormItem.value[key]);
  }

  sum() {
    this.resultSum = 0;
    for (let key in this.FormItem.value)
      if (this.waterActivitiesWhichToUse[key])
        this.resultSum += this.FormItem.value[key];
  }

  onChangeValue() {
    this.takeAllToInt();
    this.sum();
    this.uploadToStore()
  }

  uploadToStore() {
    switch (this.tag) {
      case 'mwa':
        this.household.waterUsage.plumbing['waterActivityMWA'] = this.FormItem.value;
        break;
      case 'pwa':
        this.household.waterUsage.plumbing['waterActivityPWA'] = this.FormItem.value;
        break;
      case 'other':
        this.household.waterUsage.plumbing['waterActivityOther'] = this.FormItem.value;
    }
    this.store.dispatch(new UpdaterHouseHoldSample(this.household));
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'drink': [null, Validators.required],
      'plant': [null, Validators.required],
      'farm': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'product': [null, Validators.required],
      'service': [null, Validators.required]
    });
  }

}