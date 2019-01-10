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

  }

  resetResult() {
    this.totalSum = 0
  }

  onChangeValue() {
    this.resetResult()
    this.totalSum = Number(this.FormItem.get('plant').value) + Number(this.FormItem.get('service').value) + Number(this.FormItem.get('product').value) + Number(this.FormItem.get('drink').value) + Number(this.FormItem.get('agriculture').value) + Number(this.FormItem.get('farm').value);
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