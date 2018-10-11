import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the WaterProblem4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-problem4',
  templateUrl: 'water-problem4.html'
})
export class WaterProblem4Component {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterProblem4Component Component');
    this.text = 'Hello World';
    this.text = '1';
    this.FormItem = this.fb.group({
      'hasProblem': [''],
      'problem': this.fb.group({
        'turbidWater': [''],
        'saltWater': [''],
        'smell': [''],
        'filmOfOil': [''],
        'fogWater': [''],
        'hardWater': [''],
      }),
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
