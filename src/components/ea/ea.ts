import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ea',
  templateUrl: 'ea.html'
})
export class EaComponent {
  @Input() public FormItem: FormGroup;

  constructor(private fb: FormBuilder, public navCtrl: NavController) {
    this.FormItem = EaComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      '_id': [null],
      'type': [null],
      'properties': fb.group({
        'fig_id': [0],
        'ea_code_14': [null],
        'ea_type': [null],
        'com_name': [null],
        'tam_name': [null],
        'dis_name': [null],
        'pro_name': [null],
        'ea_remark': [null],
        'muni_name': [null],
        'upd_date': [null],
        'year': [null],
        'old_ea_ref': [null],
        'moo': [0],
        'hh_num': [0],
        'map_status': [0]
      }),
      'geometry': fb.group({
        'type': [null],
        'coordinates': [[[[0]]]]
      })
    });
  }

  goConfirmSeletEAPage() {
    this.navCtrl.push("HomesPage");
  }
}
