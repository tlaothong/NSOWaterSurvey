import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

/**
 * Generated class for the ModalPlantComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-plant',
  templateUrl: 'modal-plant.html'
})
export class ModalPlantComponent {
  @Input() InputList;
  @Input() InputLimit;
  @Input() Title;

  shownData: string[];
  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello ModalPlantComponent Component');
    this.text = 'Hello World';
  }

  public static CreateFormArray(fb: FormBuilder, count: number): FormArray {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push({
        "code": [null],
        "name": [null]
      });
    }
    return fb.array(arr);
  }
  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: this.Title, selected: [], list: this.InputList, limit: this.InputLimit });
    modal.onDidDismiss(data => {
      if (data) {
        // this.FormItem = data;
        // var fg = <FormGroup>data;
        // this.FormItem.setValue(fg.value);
        var adata = data as Array<string>;
        this.shownData = adata.map(it => it.split(".")[1]);
      }
    });
    modal.present();
  }

}
