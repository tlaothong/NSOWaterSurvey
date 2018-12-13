import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;
  public text: string;

  constructor(public fb: FormBuilder) {
    this.text = 'Hello World';
    this.FormItem = LocationComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'province': [null, Validators.required],
      'district': [null, Validators.required],
      'subDistrict': [null, Validators.required]
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested)
  }

  submitRequest() {
    this.submitRequested = true;
  }

}