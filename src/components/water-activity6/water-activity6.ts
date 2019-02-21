import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'water-activity6',
  templateUrl: 'water-activity6.html'
})
export class WaterActivity6Component {
  private submitRequested: boolean;
  @Input('headline') public text: string;
  @Input('headline2') public text2: string;
  @Input() public FormItem: FormGroup;
  @Input('activeRes') public activeRes: any;
  @Input('activeWateringRes') public activeWateringRes: any;
  @Input('activRice') public activRice: any;
  @Input('activeAgi') public activeAgi: any;
  @Input('activeFac') public activeFac: any;
  @Input('activeCom') public activeCom: any;

  public waterActivitiesWhichToUse: any;
  public totalSum: number
  public isCheck: boolean;

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity6Component.CreateFormGroup(fb);
    // this.totalSum = 0;
  }

  submitRequest() {
    this.submitRequested = true;
  }

  ngOnInit() {
    this.onChangeValue();
  }

  ngDoCheck() {
    this.isCheck = this.checkValid();
  }

  onChangeValue() {
    this.totalSum = Number(this.FormItem.get('plant').value) + Number(this.FormItem.get('service').value) + Number(this.FormItem.get('product').value) + Number(this.FormItem.get('drink').value) + Number(this.FormItem.get('agriculture').value) + Number(this.FormItem.get('farm').value);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);

    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'drink': 0,
      'plant': 0,
      'farm': 0,
      'agriculture': 0,
      'product': 0,
      'service': 0,
    });
  }

  checkValid(): boolean {
    let isDrink = true;
    let isPlant = true;
    let isFarm = true;
    let isAgriculture = true;
    let isProduct = true;
    let isService = true;

    isDrink = (this.FormItem.get('drink').value < 1 && this.activeRes) ? false : true;
    isPlant = (this.FormItem.get('plant').value < 1 && this.activeWateringRes) ? false : true;
    isFarm = (this.FormItem.get('farm').value < 1 && this.activRice) ? false : true;
    isAgriculture = (this.FormItem.get('agriculture').value < 1 && this.activeAgi) ? false : true;
    isProduct = (this.FormItem.get('product').value < 1 && this.activeFac) ? false : true;
    isProduct = (this.FormItem.get('service').value < 1 && this.activeCom) ? false : true;

    return this.totalSum == 100 && isDrink && isPlant && isFarm && isAgriculture && isProduct && isService
  }

}