import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SearchDropdownPage } from '../../pages/search-dropdown/search-dropdown';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

@Component({
  selector: 'modal-plant',
  templateUrl: 'modal-plant.html'
})
export class ModalPlantComponent implements ISubmitRequestable {

  @Input() InputList;
  @Input() InputLimit: any[];
  @Input() Title;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;
  public shownData: string[];
  public text: string;
  public plant: string[];
  public selectPlants: string[];

  constructor(public modalCtrl: ModalController, public fb: FormBuilder) {
    this.FormItem = ModalPlantComponent.CreateFormGroup(this.fb);
  }

  submitRequest() {
    this.submitRequested = true
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

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
      { title: this.Title, selected: this.FormItem.get('plants').value, list: this.InputList, limit: this.InputLimit });
    modal.onDidDismiss(data => {
      if (data) {
        var adata = data as Array<any>;
        var arr = [];
        adata.forEach(value => {
          arr.push({
            "code": value.code,
            "name": value.name,
          })
        });
        this.FormItem.setValue({ 'plantingCount': arr.length, 'plants': arr });
      }
    });
    modal.present();
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