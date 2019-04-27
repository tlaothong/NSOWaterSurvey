import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the PoolAreaForCommuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-area-for-commu',
  templateUrl: 'pool-area-for-commu.html'
})
export class PoolAreaForCommuComponent implements ISubmitRequestable {
  @Input("headline") private text: string;
  @Input("head") private head: string;
  @Input("pool") private poolText: string;
  @Input('no') public no: string;
  @Input() public FormItem: FormGroup;
  @Input('isCommunity') public isCommunity: boolean;
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  private submitRequested: boolean;


  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = '';
    this.poolText = "แหล่งน้ำ";
    this.FormItem = PoolAreaForCommuComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'shape': [null, Validators],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'depth': [null, Validators.compose([Validators.pattern('[0-9].*')])],
      'rectangle': fb.group({
        'width': [null, Validators.compose([Validators.pattern('[0-9].*')])],
        'length': [null, Validators.compose([Validators.pattern('[0-9].*')])],
      }),
      'diameter': [null, Validators.compose([Validators.pattern('[0-9]*.')])],
    }, {
        validator: PoolAreaForCommuComponent.checkAnyOrOther()
      });
  }

  public setArea() {
    if (this.FormItem.get('shape').value == '1') {
      if (this.FormItem.get('area.rai').value == 0
        && this.FormItem.get('area.ngan').value == 0
        && this.FormItem.get('area.sqWa').value == 0) {
        this.FormItem.get('area').reset();
      }
    } else if (this.FormItem.get('area').invalid) {
      this.FormItem.get('area.rai').setValue(0);
      this.FormItem.get('area.ngan').setValue(0);
      this.FormItem.get('area.sqWa').setValue(0);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'shape') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.shape && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'depth') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.depth && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'rectangle.width') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.width && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'rectangle.length') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.length && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'diameter') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.diameter && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.no, head: this.head, isCommunity: this.isCommunity });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.get('rectangle').setValue(fg.value);
      }
    });
    modal.present();
  }

  submitRequest() {
    this.submitRequested = true;
    this.fieldArea.forEach(it => it.submitRequest());
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const shape = c.get('shape');
      const depth = c.get('depth');
      const width = c.get('rectangle.width');
      const length = c.get('rectangle.length');
      const diameter = c.get('diameter');

      if (shape.value <= 0) {
        return { 'shape': true };
      }
      if ((shape.value == 2) && width.value == null && length.value == null && depth.value == null) {
        return { 'width': true, 'length': true, 'depth': true };
      }
      if ((shape.value == 2) && width.value == null && length.value == null && depth.value != null) {
        return { 'width': true, 'length': true };
      }
      if ((shape.value == 2) && width.value == null && length.value != null && depth.value != null) {
        return { 'width': true };
      }
      if ((shape.value == 2) && width.value != null && length.value == null && depth.value != null) {
        return { 'length': true };
      }
      if ((shape.value == 2) && width.value != null && length.value != null && ((depth.value == null) || (depth.value <= 0))) {
        return { 'depth': true };
      }
      if ((shape.value == 1) && ((depth.value == null) || (depth.value <= 0))) {
        return { 'depth': true };
      }
      if ((shape.value == 3) && (diameter.value == null || diameter.value.trim() == '') && (depth.value == null || depth.value.trim() == '')) {
        return { 'diameter': true, 'depth': true };
      }
      if ((shape.value == 3) && (diameter.value != null || diameter.value.trim() != '') && (depth.value == null || depth.value.trim() == '')) {
        return { 'depth': true };
      }
      if ((shape.value == 3) && (diameter.value == null || diameter.value.trim() == '') && (depth.value != null || depth.value.trim() != '')) {
        return { 'diameter': true };
      }
      if ((shape.value == 3) && ((diameter.value == null) || (diameter.value <= 0)) && ((depth.value == null) || (depth.value <= 0))) {
        return { 'diameter': true, 'depth': true };
      }
      return null;
    }
  }
}
