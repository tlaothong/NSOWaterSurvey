import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { LocationComponent } from '../location/location';

@Component({
  selector: 'pool-area',
  templateUrl: 'pool-area.html'
})
export class PoolAreaComponent implements ISubmitRequestable {

  @Input("headline") private text: string;
  @Input("head") private head: string;
  @Input("pool") private poolText: string;
  @Input('no') public no: string;
  @Input("checkIsPool") public checkIsPool: boolean;
  @Input() public FormItem: FormGroup;
  @Input('isAnimal') public isAnimal: boolean;
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  @ViewChildren(LocationComponent) private locationT: LocationComponent[];
  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = '';
    this.poolText = "แหล่งน้ำ";

    // TODO: Remove this
    this.FormItem = PoolAreaComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'shape': [null, Validators],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'depth': [null, Validators],
      'rectangle': fb.group({
        'width': [null, Validators],
        'length': [null, Validators],
      }),
      'diameter': [null, Validators],
      'location': LocationComponent.CreateFormGroup(fb),
    }, {
        validator: PoolAreaComponent.checkAnyOrOther()
      });
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
      if ((shape.value == 1) && ((depth.value == null) || (depth.value <= 0))) {
        return { 'depth': true };
      }
      if ((shape.value == 2) && ((width.value == null) || (width.value <= 0))) {
        return { 'width': true };
      }
      if ((shape.value == 2) && ((length.value == null) || (length.value <= 0))) {
        return { 'length': true };
      }
      if ((shape.value == 2) && ((depth.value == null) || (depth.value <= 0))) {
        return { 'depth': true };
      }
      if ((shape.value == 3) && ((diameter.value == null) || (diameter.value <= 0))) {
        return { 'diameter': true };
      }
      if ((shape.value == 3) && ((depth.value == null) || (depth.value <= 0))) {
        return { 'depth': true };
      }
      return null;
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
    if (name == 'width') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.width && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'length') {
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
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.no, head: this.head });
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
    this.locationT.forEach(it => it.submitRequest());

  }



}