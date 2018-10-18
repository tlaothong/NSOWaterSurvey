import { WaterActivity6Component } from './../water-activity6/water-activity6';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'water-problem6',
  templateUrl: 'water-problem6.html'
})
export class WaterProblem6Component {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterProblem6Component Component');
    this.text = '1';
    this.FormItem = WaterProblem6Component.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'hasProblem': [null, Validators.required],
      'problem': fb.group({
        'turbidWater': [null, Validators.required],
        'saltWater': [null, Validators.required],
        'smell': [null, Validators.required],
        'filmOfOil': [null, Validators.required],
        'fogWater': [null, Validators.required],
        'hardWater': [null, Validators.required],
      }),
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
