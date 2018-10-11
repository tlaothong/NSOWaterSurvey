import { ISubmitRequestable } from './../../shared/ISubmitRequestable';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the MachineWaterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'machine-water',
  templateUrl: 'machine-water.html'
})
export class MachineWaterComponent implements ISubmitRequestable {


  text: string;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;
  constructor(public fb: FormBuilder) {
    console.log('Hello MachineWaterComponent Component');
    this.text = 'Hello World';

    this.FormItem = this.fb.group({
      'EnergySource': [''],
      'PumpType': [''],
      'HorsePower': [''],
      'SuctionPipeSize': [''],
      'PipelineSize': ['']
    });
  }
  // core 
  submitRequest() {
    this.submitRequested = true;
  }
  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


}
