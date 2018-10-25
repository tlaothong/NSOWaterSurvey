import { Component, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FieldAreaComponent } from '../field-area/field-area';

/**
 * Generated class for the DetailManagementForFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-management-for-farming',
  templateUrl: 'detail-management-for-farming.html'
})
export class DetailManagementForFarmingComponent {

  @Input() public FormItem: FormGroup;

  text: string;

  private submitRequested: boolean;
  constructor(public fb: FormBuilder) {
    this.FormItem = DetailManagementForFarmingComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'membercount': [null, Validators.required],
      'avgsurfacewateruse': [null, Validators.required],
      'groundwatercount': [null, Validators.required],
      'avggroundwateruse': [null, Validators.required],
    });

    // this.FormItem = GroundWaterUsageComponent.CreateFormGroup(this.fb);
  }

}
