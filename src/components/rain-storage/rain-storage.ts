import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup,FormBuilder } from '@angular/forms';

/**
 * Generated class for the RainStorageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rain-storage',
  templateUrl: 'rain-storage.html'
})
export class RainStorageComponent {
  @Input("headline") private text: string;
  @Input("order") private order: string;
  @Input() public FormItem: FormGroup;

  constructor(public modalCtrl: ModalController,private fb: FormBuilder) {
    console.log('Hello RainStorageComponent Component');
    this.text = '';


     // TODO: Remove this
     this.FormItem = this.fb.group({
      'category': null,
      'size': null,
      'count': null,
    });
  }
  
  DlgRainStoragePage
  presentModal() {
    const modal = this.modalCtrl.create("DlgRainStoragePage", { FormItem: this.FormItem, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        this.FormItem = data;
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }
}
