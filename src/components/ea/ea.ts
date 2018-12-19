import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { LoadWorkByIdEA } from '../../states/logging/logging.actions';


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
  @Input() public FormItem: FormGroup;

  constructor(private fb: FormBuilder, public navCtrl: NavController,private store:Store<LoggingState>) {
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

  goConfirmSeletEAPage(id: string) {
    this.store.dispatch(new LoadWorkByIdEA(id));
    this.navCtrl.push("HomesPage");
  }
}
