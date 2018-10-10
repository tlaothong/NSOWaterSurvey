import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the WaterSources8AComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-sources8-a',
  templateUrl: 'water-sources8-a.html'
})
export class WaterSources8AComponent implements ISubmitRequestable {

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    console.log('Hello WaterSources8AComponent Component');
    this.text = 'Hello World';

    // TODO: Remove this
    this.FormItem = this.fb.group({
      'hasOther': false,
      'other': null
    });
  }

  public isValid(name: string) : boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
  
  submitRequest() {
    this.submitRequested = true;
  }

}
