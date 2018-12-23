import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'water-activity5',
  templateUrl: 'water-activity5.html'
})
export class WaterActivity5Component {

  private submitRequested: boolean;

  @Input() public FormItem: FormGroup;
  @Input('use') public gardeningUse: boolean;
  @Input('total') public total: number;
  @Input('factory') public factoryUse: boolean;
  @Input('headline') public text: string;
  @Input('commerce') public commerceUse: boolean;
  @Input('residence') public residenceUse: boolean;
  @Input('agriculture') public agricultureUse: boolean;
  
  @Input('tag') tagIn: String;

  @Output() tagOut = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity5Component.CreateFormGroup(fb);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }

  onChangeValue() {
    this.tagOut.emit({ tag: this.tagIn });
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