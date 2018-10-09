import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the FieldAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-area',
  templateUrl: 'field-area.html'
})
export class FieldAreaComponent {

  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello FieldAreaComponent Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = this.fb.group({
      'rai': null,
      'ngan': null,
      'sqWa': null,
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgFieldAreaPage", { FormItem: this.FormItem, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        this.FormItem = data;
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
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
