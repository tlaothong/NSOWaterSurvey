import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the WaterSources9Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-sources9',
  templateUrl: 'water-sources9.html'
})
export class WaterSources9Component {

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterSources9Component Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = this.fb.group({
      'hasOther': false,
      'other': null
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }
}
