import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SearchDropdownPage } from '../../pages/search-dropdown/search-dropdown';

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
  @Input() public FormItem: FormGroup;

  shownData: string[];
  text: string;

  constructor(public modalCtrl: ModalController, public fb: FormBuilder) {
    
    this.FormItem = ModalPlantComponent.CreateFormGroup(this.fb);
    console.log("dddd",JSON.stringify(this.FormItem.value))
  }

  // public static CreateFormArray(fb: FormBuilder, count: number): FormArray {
  //   var arr = [];
  //   for (var i = 0; i < count; i++) {
  //     arr.push({
  //       "code": [null],
  //       "name": [null]
  //     });
  //   }
  //   return fb.array(arr);
  // }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    var fg = fb.group(
      {
        'plantingCount': [null],
        'plants': fb.array([])
      },
    );
    ModalPlantComponent.setupPlantCountChanges(fb, fg);
    return fg;
    
  }


  model() {
   
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: this.Title, selected: [], list: this.InputList, limit: this.InputLimit });
    modal.onDidDismiss(data => {
      if (data) {
        var adata = data as Array<string>;
        this.shownData = adata.map(it => it.split(".")[1]);
      }
    });
    modal.present();
    console.log(this.fb);
  }

  private static setupPlantCountChanges(fb: FormBuilder, fg: FormGroup) {
    const componentFormArray: string = "plants";
    const componentCount: string = "plantingCount";

    var onComponentCountChanges = () => {
      var plants = (fg.get(componentFormArray) as FormArray).controls || [];
      var plantCount = fg.get(componentCount).value || 0;
      var farr = fb.array([]);

      plantCount = Math.max(0, plantCount);

      for (let i = 0; i < plantCount; i++) {
        var ctrl = null;
        if (i < plants.length) {
          const fld = plants[i];
          ctrl = fld;
        } else {
          ctrl = SearchDropdownPage.CreateFormGroup(fb);
        }
        farr.push(ctrl);
      }
      fg.setControl(componentFormArray, farr);
    };

    fg.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

}
