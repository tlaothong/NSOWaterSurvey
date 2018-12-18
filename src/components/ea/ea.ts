import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the EaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ea',
  templateUrl: 'ea.html'
})
export class EaComponent {

  text: string;
  @Input() public FormItem: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('Hello EaComponent Component');
    this.text = 'Hello World';

    this.FormItem = EaComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'idEA': [null],
      'idUser': [null],
      'province': [null],
      'district': [null],
      'subDistrict': [null],
      'administrative': [null],
      'municipalities': [null]
    });
  }

}
