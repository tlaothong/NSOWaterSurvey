import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

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
    this.FormItem = WaterSources9Component.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb:FormBuilder) : FormGroup {
    return fb.group({
      'plumbing' : [false,Validators.required],
      'underGround': [false, Validators.required],
      'pool': [false, Validators.required],
      'river': [false, Validators.required],
      'irrigation': [false, Validators.required],
      'rain': [false, Validators.required],
      'buying': [false, Validators.required],
      'rainingAsIs': [false, Validators.required],
      'other': ['', Validators.required],
      'hasOther' : [false,Validators.required]
    })
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  submitRequest() {
    this.submitRequested = true;
  }
}
