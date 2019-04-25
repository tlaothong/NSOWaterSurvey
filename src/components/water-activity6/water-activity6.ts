import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ValidationErrors, AbstractControl, Validators } from '@angular/forms';

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

  private static activeRes: boolean;
  private static activeWateringRes: boolean;
  private static activRice: boolean;
  private static activeAgi: boolean;
  private static activeFac: boolean;
  private static activeCom: boolean;

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity6Component.CreateFormGroup(fb);
    // this.totalSum = 0;
  }

  submitRequest() {
    this.submitRequested = true;
  }

  ngOnInit() {
    this.onChangeValue();
    this.checkTotalActive();
    WaterActivity6Component.activeRes = this.activeRes;
    WaterActivity6Component.activeWateringRes = this.activeWateringRes;
    WaterActivity6Component.activRice = this.activRice;
    WaterActivity6Component.activeAgi = this.activeAgi;
    WaterActivity6Component.activeFac = this.activeFac;
    WaterActivity6Component.activeCom = this.activeCom;
  }

  checkTotalActive() {
    if (!this.activeRes && !this.activRice && !this.activeWateringRes && !this.activeAgi && !this.activeFac && !this.activeCom) {
      this.totalSum = 100;
    }
  }

  onChangeValue() {
    this.totalSum = Number(this.FormItem.get('plant').value) + Number(this.FormItem.get('service').value) + Number(this.FormItem.get('product').value) + Number(this.FormItem.get('drink').value) + Number(this.FormItem.get('agriculture').value) + Number(this.FormItem.get('farm').value);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anyCheck') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.anyCheck && (ctrls.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'drink': [null, Validators],
      'plant': [null, Validators],
      'farm': [null, Validators],
      'agriculture': [null, Validators],
      'product': [null, Validators],
      'service': [null, Validators],
    }, {
        validator: WaterActivity6Component.checkAnyOrOther()
      });
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const drink = c.get('drink');
      const plant = c.get('plant');
      const farm = c.get('farm');
      const agriculture = c.get('agriculture');
      const product = c.get('product');
      const service = c.get('service');
      const activeRes = WaterActivity6Component.activeRes;
      const activeWateringRes = WaterActivity6Component.activeWateringRes;
      const activRice = WaterActivity6Component.activRice;
      const activeAgi = WaterActivity6Component.activeAgi;
      const activeFac = WaterActivity6Component.activeFac;
      const activeCom = WaterActivity6Component.activeCom;

      if ((activeRes && (drink.value == null || (drink.value.trim() == '')) ||
        (activeWateringRes && (plant.value == null || (plant.value.trim() == ''))) ||
        (activRice && (farm.value == null || (farm.value.trim() == ''))) ||
        (activeAgi && (agriculture.value == null || (agriculture.value.trim() == ''))) ||
        (activeFac && (product.value == null || (product.value.trim() == ''))) ||
        (activeCom && (service.value == null || (service.value.trim() == ''))))) {
        return { 'anyCheck': true };
      }
      if ((+drink.value) + (+plant.value) + (+farm.value) + (+agriculture.value) + (+product.value) + (+service.value) != 100) {
        return { 'checkActivitySum': true };
      }
      return null;
    }
  }

}