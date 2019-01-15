import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'water-activity6',
  templateUrl: 'water-activity6.html'
})
export class WaterActivity6Component {
  private submitRequested: boolean;
  @Input('headline') public text: string;
  @Input('headline2') public text2: string;
  @Input() public FormItem: FormGroup;
  @Input('usee') public gardeningUse: boolean;
  @Input('doing') public riceDoing: boolean;
  @Input('commerce') public commerceUse: boolean;
  @Input('factory') public factoryUse: boolean;
  @Input('residence') public residenceUse: boolean;
  @Input('agriculture') public agricultureUse: boolean;
  @Input('activeRes') public activeRes:any;
  @Input('activeWateringRes') public activeWateringRes:any;
  @Input('activRice') public activRice:any;
  @Input('activeAgi') public activeAgi:any;
  @Input('activeFac') public activeFac:any;
  @Input('activeCom') public activeCom:any;

  public waterActivitiesWhichToUse: any;
  public totalSum: number

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity6Component.CreateFormGroup(fb);
    this.totalSum = 0;
  }

  submitRequest() {
    this.submitRequested = true;
  }

  onChangeValue() {
    this.totalSum = 0
    this.totalSum = Number(this.FormItem.get('plant').value) + Number(this.FormItem.get('service').value) + Number(this.FormItem.get('product').value) + Number(this.FormItem.get('drink').value) + Number(this.FormItem.get('agriculture').value) + Number(this.FormItem.get('farm').value);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'drink': [0],
      'plant': [0],
      'farm': [0],
      'agriculture': [0],
      'product': [0],
      'service': [0]
    });
  }

}