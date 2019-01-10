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
  @Input('activeRes') public activeRes:any;
  @Input('activeWateringRes') public activeWateringRes:any;
  @Input('activeAgi') public activeAgi:any;
  @Input('activeFac') public activeFac:any;
  @Input('activeCom') public activeCom:any;

  public resultSum: number;
  public a: number;
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
  }

  
  submitRequest() {
    this.submitRequested = true;
  }

  resetResult(){
    this.resultSum = 0
  }

  onChangeValue() {
    this.resetResult()
    this.resultSum = Number(this.FormItem.get('plant').value) + Number(this.FormItem.get('service').value) + Number(this.FormItem.get('product').value) + Number(this.FormItem.get('drink').value) + Number(this.FormItem.get('agriculture').value);
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
      'drink': [0, Validators.required],
      'plant': [0, Validators.required],
      'farm': [0, Validators.required],
      'agriculture': [0, Validators.required],
      'product': [0, Validators.required],
      'service': [0, Validators.required]
    });
  }

}