import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the FishFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fish-farming',
  templateUrl: 'fish-farming.html'
})
export class FishFarmingComponent {

  @Input() public FormItem: FormGroup;
  text: string;
  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello FishFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FishFarmingComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "doing": ['', Validators.required],
      "depression": ['', Validators.required],
      "gardenGroove": ['', Validators.required],
      "stew": ['', Validators.required],
      "riceField": ['', Validators.required],
      "other": ['', Validators.required],
      "fieldCount": ['', Validators.required],
      "fieldsAreSameSize": ['', Validators.required],
      "fields": fb.group({
        "shape": ['', Validators.required],
        "area": fb.group({
          "rai": ['', Validators.required],
          "ngan": ['', Validators.required],
          "sqWa": ['', Validators.required]
        }),
        "depth": ['', Validators.required],
        "rectangle": fb.group({
          "width": ['', Validators.required],
          "length": ['', Validators.required],
          "_id": ['', Validators.required]
        }),
        "diameter": ['', Validators.required]
      }),

      "animalsCount": ['', Validators.required],
      "waterSources": fb.group({
        "plumbing": ['', Validators.required],
        "underGround": ['', Validators.required],
        "pool": ['', Validators.required],
        "river": ['', Validators.required],
        "irrigation": ['', Validators.required],
        "rain": ['', Validators.required],
        "buying": ['', Validators.required],
        "rainingAsIs": ['', Validators.required],
        "other": ['', Validators.required]
      })
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
