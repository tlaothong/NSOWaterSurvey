import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'water-activity5',
  templateUrl: 'water-activity5.html'
})
export class WaterActivity5Component {

  private submitRequested: boolean;

  @Input() public FormItem: FormGroup;
  @Input('tag') public tag: string;
  @Input('headline') public text: string;
  @Input('activeRes') public activeRes: any;
  @Input('activeWateringRes') public activeWateringRes: any;
  @Input('activeAgi') public activeAgi: any;
  @Input('activeFac') public activeFac: any;
  @Input('activeCom') public activeCom: any;

  public resultSum: number;
  public isCheck: boolean;
  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity5Component.CreateFormGroup(fb);
  }

  submitRequest() {
    this.submitRequested = true;
  }

  ngOnInit() {
    this.onChangeValue();
    this.checkTotalActive();
  }

  checkTotalActive() {
    if (!this.activeRes && !this.activeWateringRes && !this.activeAgi && !this.activeFac && !this.activeCom) {
      this.resultSum = 100;
    }
  }

  ngDoCheck() {
    this.isCheck = this.checkValid();
  }

  onChangeValue() {
    this.resultSum = Number(this.FormItem.get('plant').value) + Number(this.FormItem.get('service').value) + Number(this.FormItem.get('product').value) + Number(this.FormItem.get('drink').value) + Number(this.FormItem.get('agriculture').value);
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
      'service': 0
    });
  }

  checkValid(): boolean {
    let isDrink = true;
    let isPlant = true;
    let isAgriculture = true;
    let isProduct = true;
    let isService = true;

    isDrink = (this.FormItem.get('drink').value < 0 && this.activeRes) ? false : true;
    isPlant = (this.FormItem.get('plant').value < 0 && this.activeWateringRes) ? false : true;
    isAgriculture = (this.FormItem.get('agriculture').value < 0 && this.activeAgi) ? false : true;
    isProduct = (this.FormItem.get('product').value < 0 && this.activeFac) ? false : true;
    isProduct = (this.FormItem.get('service').value < 0 && this.activeCom) ? false : true;

    return this.resultSum == 100 && isDrink && isPlant && isAgriculture && isProduct && isService
  }
}