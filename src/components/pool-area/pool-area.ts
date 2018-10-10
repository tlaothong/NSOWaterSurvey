import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the PoolAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-area',
  templateUrl: 'pool-area.html'
})
export class PoolAreaComponent {

  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello PoolAreaComponent Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = this.fb.group({
      'shape':this.fb.group({
        'area':[''],
        'rectangle':[''],
        'circle':[''],
      }),
      'area':this.fb.group({
        'rai':[''],
        'ngan':[''],
        'sqWa':[''],
      }),
      'depth':[''],
      'rectangle':this.fb.group({
        'width':[''],
        'length':[''],
      }),
      'diameter':['']
    });
  }

  public showModalArea() {
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.text });
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
