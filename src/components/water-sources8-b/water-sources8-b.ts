import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the WaterSources8BComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-sources8-b',
  templateUrl: 'water-sources8-b.html'
})
export class WaterSources8BComponent{

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterSources8BComponent Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = this.fb.group({
      'hasOther': [false,Validators.required],
      'other': ['',Validators.required]
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }

}
