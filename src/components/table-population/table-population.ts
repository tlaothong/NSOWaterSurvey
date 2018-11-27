import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DlgPopulationPage } from '../../pages/dlg-population/dlg-population';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'table-population',
  templateUrl: 'table-population.html'
})
export class TablePopulationComponent {

  @Input() public FormItem: FormGroup;
  @Input('no') public personNo: string;
  text: string;
  submitRequested: boolean;

  constructor(public modalCtrl: ModalController, public fb: FormBuilder) {
    console.log('Hello TablePopulationComponent Component');
    this.text = '1';
  }

  presentModal() {
    const modal = this.modalCtrl.create("DlgPopulationPage");
    modal.present();
  }
  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'nameTitle': [null, Validators.required],
      'otherTitle': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'relationship': [null, Validators.required],
      'sex': [null, Validators.required],
      'age': [null, Validators.required],
      'nationality': [null, Validators.required],
      'registration': [null, Validators.required],
      'otherProvince': [null, Validators.required],

    });
    return fg
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
