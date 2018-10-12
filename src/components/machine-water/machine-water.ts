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

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello MachineWaterComponent Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = MachineWaterComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'energySource': ['', Validators.required],
      'pumpType': ['', Validators.required],
      'horsePower': ['', Validators.required],
      'suctionPipeSize': ['', Validators.required],
      'pipelineSize': ['', Validators.required]
    });
  }
  // core 
  submitRequest() {
    this.submitRequested = true;
  }
  
  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


}
