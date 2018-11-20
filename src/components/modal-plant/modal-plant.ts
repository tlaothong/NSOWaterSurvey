import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SearchDropdownPage } from '../../pages/search-dropdown/search-dropdown';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetAgronomyPlantSelectPlant, SetRicePlantSelectPlant, SetRubberTreeSelectPlant, SetPerennialPlantSelectPlant } from '../../states/household/household.actions';


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
export class ModalPlantComponent implements ISubmitRequestable {


  @Input() InputList;
  @Input() InputLimit;
  @Input() Title;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;
  shownData: string[];
  text: string;
  plant: string[];
  selectPlants: string[];

  constructor(public modalCtrl: ModalController, public fb: FormBuilder, private store: Store<HouseHoldState>) {

    this.FormItem = ModalPlantComponent.CreateFormGroup(this.fb);
    console.log("dddd", JSON.stringify(this.FormItem.value))
  }

  ionViewDidLoad() {

    // this.store.dispatch(new SetPlant(this.FormItem.get('dataPlant$').value));
  }



  submitRequest() {
    this.submitRequested = true
    this.selectPlants = this.shownData;
    this.plant = this.selectPlants;
    this.selectPlants = [""];

    switch (this.InputList) {
      case "EX_RICH_LIST":
        this.store.dispatch(new SetRicePlantSelectPlant(this.plant));
        break;
      case "EX_TREERAI_LIST":
        this.store.dispatch(new SetAgronomyPlantSelectPlant(this.plant));
        break;
      case "EX_RUBBER_LIST":
        this.store.dispatch(new SetRubberTreeSelectPlant(this.plant));
        break;
      case "EX_TREETON_LIST":
        this.store.dispatch(new SetPerennialPlantSelectPlant(this.plant));
        break;
      default:
        break;
    }

    if (this.InputList = "") {
      this.store.dispatch(new SetAgronomyPlantSelectPlant(this.plant));
    }

    console.log("Send plant");
    console.log(this.plant);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
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
        // this.shownData = arr;
        this.FormItem.setValue({ 'plantingCount': arr.length, 'plants': arr });
        // this.shownData = adata.map(it => it.split("."));     
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
