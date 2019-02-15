import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'pool-area',
  templateUrl: 'pool-area.html'
})
export class PoolAreaComponent implements ISubmitRequestable {

  @Input("headline") private text: string;
  @Input("pool") private poolText: string;
  @Input('no') public no: string;
  @Input() public FormItem: FormGroup;
  @ViewChildren(FieldAreaComponent) private fieldArea: FieldAreaComponent[];
  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = '';
    this.poolText = "บ่อหรือร่องสวน";

    // TODO: Remove this
    this.FormItem = PoolAreaComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'shape': [null, Validators.required],
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'depth': [null, Validators.required],
      'rectangle': fb.group({
        'width': [null, Validators.required],
        'length': [null, Validators.required],
      }),
      'diameter': [null, Validators.required]
    });
  }

  public checkPoolValid():boolean{
    if((this.FormItem.get('shape').value == 2) 
    && (this.FormItem.get('rectangle.width').value != null)
    && (this.FormItem.get('rectangle.length').value != null)
    && (this.FormItem.get('depth').value != null)){
      return true;
    }else if((this.FormItem.get('shape').value == 3)
    && (this.FormItem.get('diameter').value != null)
    && (this.FormItem.get('depth').value != null)){
      return true;
    }else if((this.FormItem.get('shape').value == 1) && (this.FormItem.get('depth').value != null)){
      return true;
    }
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.no });
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

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}