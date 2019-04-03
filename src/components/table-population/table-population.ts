import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'table-population',
  templateUrl: 'table-population.html'
})
export class TablePopulationComponent {

  @Input('no') public personNo: string;
  @Input() public FormItem: FormGroup;
  @Input() public FormArray: FormArray;
  @Input('ProName') public proName: string;
  // @Input('nameTitle') public nameTitle: FormGroup;
  private submitRequested: boolean;

  constructor(public modalCtrl: ModalController, public fb: FormBuilder, public navParams: NavParams) {
    this.FormItem = TablePopulationComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group({
      'nameTitle': [null, Validators.required],
      'otherTitle': [null],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'relationship': [null, Validators.required],
      'sex': [null, Validators.required],
      'age': [null, Validators],
      'birthDate': [null, Validators.required],
      'birthMonth': [null, Validators.required],
      'birthYear': [null, Validators.required],
      'nationality': [null, Validators.required],
      'registration': [null, Validators.required],
      'otherProvince': [null],
    }, {
        validator: TablePopulationComponent.checkAnyOrOther()
      }
    );
    return fg

  }

  presentModal() {
    const modal = this.modalCtrl.create("DlgPopulationPage",
      {
        FormItem: this.FormItem,
        FormArray: this.FormArray,
        iTitle: this.personNo,
        proName: this.proName
      });
    modal.onDidDismiss(data => {
      if (data) {
        if (data == 'delete') {
          const count = this.FormArray.length;
          this.FormArray.removeAt(+this.personNo - 1);
          const f = this.FormArray.parent;
          f.get('personCount').setValue(count);
        } else {
          var fg = <FormGroup>data;
          this.FormItem.setValue(fg.value);
        }
      }
    });
    modal.present();
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'age') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.age && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);

  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const age = c.get('age');

      if (age.value == null || age.value == " ไม่ทราบ ") {
        return { 'age': true };
      }
      return null;
    }
  }

}