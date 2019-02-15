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
  @Input('use') public gardeningUse: boolean;
  @Input('factory') public factoryUse: boolean;
  @Input('headline') public text: string;
  @Input('commerce') public commerceUse: boolean;
  @Input('residence') public residenceUse: boolean;
  @Input('agriculture') public agricultureUse: boolean;
  @Input('activeRes') public activeRes: any;
  @Input('activeWateringRes') public activeWateringRes: any;
  @Input('activeAgi') public activeAgi: any;
  @Input('activeFac') public activeFac: any;
  @Input('activeCom') public activeCom: any;

  public resultSum: number;

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity5Component.CreateFormGroup(fb);
  }


  submitRequest() {
    this.submitRequested = true;
  }

  onChangeValue() {
    this.resultSum = 0
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

}