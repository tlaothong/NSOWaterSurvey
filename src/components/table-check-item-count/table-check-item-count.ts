import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl, Validators } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'table-check-item-count',
  templateUrl: 'table-check-item-count.html'
})
export class TableCheckItemCountComponent implements ISubmitRequestable {

  @Input("ititle") public text: string;
  @Input('unit') public unittext: string;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = 'Hello World';

    // TODO: Remove this
    this.FormItem = TableCheckItemCountComponent.CreateFormGroup(this.fb)
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'hasItem': [false, Validators.required],
      'itemCount': [null, Validators.required]
    }, {
        validator: TableCheckItemCountComponent.checkAnyOrOther()
      }
    );
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableCheckItemCountPage",
      {
        FormItem: this.FormItem,
        iTitle: this.text,
        unit: this.unittext,
      });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const hasItem = c.get('hasItem');


      if (!hasItem.value) {
        return { 'anycheck': true };
      }
      return null;
    }
  }

}