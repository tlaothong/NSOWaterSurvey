import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'water-activity5',
  templateUrl: 'water-activity5.html'
})
export class WaterActivity5Component {

  private submitRequested: boolean;

  private service: number;
  private product: number;
  private agriculture: number;
  private plant: number;
  private drink: number;
  private total: number;

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;
  @Input('use') public gardeningUse: boolean;
  @Input('commerce') public commerceUse: boolean;
  @Input('factory') public factoryUse: boolean;
  @Input('residence') public residenceUse: boolean;
  @Input('agriculture') public agricultureUse: boolean;

  constructor(private fb: FormBuilder) {
    this.FormItem = WaterActivity5Component.CreateFormGroup(fb);
    this.service = this.product = this.agriculture = this.plant = this.drink = this.total = 0;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }

  keyup(num: string, item: string) {
    switch (item) {
      case 'drink':
        this.drink = Number(num);
        this.FormItem.patchValue({ 'drink': this.drink });
        break;
      case 'plant':
        this.plant = Number(num);
        this.FormItem.patchValue({ 'plant': this.plant });
        break;
      case 'agriculture':
        this.agriculture = Number(num);
        this.FormItem.patchValue({ 'agriculture': this.agriculture });
        break;
      case 'product':
        this.product = Number(num);
        this.FormItem.patchValue({ 'product': this.product });
        break;
      case 'service':
        this.service = Number(num);
        this.FormItem.patchValue({ 'service': this.service });
        break;
    }
    this.total = this.service + this.product + this.agriculture + this.plant + this.drink;
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