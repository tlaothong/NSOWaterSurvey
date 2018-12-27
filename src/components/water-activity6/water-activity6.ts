import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidentialShellPageModule } from '../../shells/pages/residential-shell/residential-shell.module';
import { summaryFileName } from '@angular/compiler/src/aot/util';

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

  public waterActivitiesWhichToUse: any;
  public totalSum: number

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity6Component.CreateFormGroup(fb);
    this.waterActivitiesWhichToUse = {
      'plant': false,
      'farm': false,
      'service': false,
      'product': false,
      'drink': false,
      'agriculture': false,
    }
    this.totalSum = 0;
  }

  submitRequest() {
    this.submitRequested = true;
  }

  ngOnInit() {
    this.waterActivitiesWhichToUse = {
      'plant': this.gardeningUse,
      'farm': this.riceDoing,
      'service': this.commerceUse,
      'product': this.factoryUse,
      'drink': this.residenceUse,
      'agriculture': this.agricultureUse,
    }
    this.sum();
  }

  resetSum() {
    this.totalSum = 0;
  }

  sum() {
    this.resetSum();
    for (let k in this.waterActivitiesWhichToUse) {
      if (this.waterActivitiesWhichToUse[k]) {
        this.totalSum += this.FormItem.value[k];
      }
    }
  }

  makeAllInt() {
    for (let k in this.waterActivitiesWhichToUse) {
      if (this.waterActivitiesWhichToUse[k]) {
        this.FormItem.value[k] = Number(this.FormItem.value[k]);
      }
    }
  }

  onchange() {
    this.makeAllInt();
    this.sum();
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