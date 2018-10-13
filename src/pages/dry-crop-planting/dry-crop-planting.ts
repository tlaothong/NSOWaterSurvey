import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EX_TREERAI_LIST } from '../../models/tree';

/**
 * Generated class for the DryCropPlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dry-crop-planting',
  templateUrl: 'dry-crop-planting.html',
})
export class DryCropPlantingPage {

  public agronomyPlant: FormGroup;
  private submitRequested: boolean;
  shownData: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController) {
    this.agronomyPlant = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'irrigationField': [null, Validators.required],
      'names': [null, Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DryCropPlantingPage');

  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.agronomyPlant.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
  // model() {
  //   const modal = this.modalCtrl.create("SearchDropdownPage", { type: "TREERAI", model: [], list: [] });

  //   modal.onDidDismiss(data => {
  //     if (data) {
  //       // this.FormItem = data;
  //       // var fg = <FormGroup>data;
  //       // this.FormItem.setValue(fg.value);

  //       var adata = data as Array<string>;
  //       this.shownData = adata.map(it => it.split(".")[1]);
  //     }
  //   });

  //   modal.present();
  // }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage",
      { title: "พืชไร่", selected: [], list: EX_TREERAI_LIST, limit: 5 });


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
