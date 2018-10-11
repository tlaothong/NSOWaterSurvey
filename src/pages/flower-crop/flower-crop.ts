import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the FlowerCropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flower-crop',
  templateUrl: 'flower-crop.html',
})
export class FlowerCropPage {

  flowerCrop: FormGroup;
  shownData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerCropPage');
  }
  ionViewDidEnter() {
    this.flowerCrop = this.fb.group({
      doing: [null, Validators.required],
      fieldCount: [null, Validators.required],
      fields: this.fb.group({
        thisPlantOnly: [null, Validators.required],
        mixedWithPrimaryPlant: [null, Validators.required],
        waterSources: this.fb.group({
          rainingAsIs: [null, Validators.required],
          plumbing: [null, Validators.required],
          underGround: [null, Validators.required],
          pool: [null, Validators.required],
          river: [null, Validators.required],
          irrigation: [null, Validators.required],
          rain: [null, Validators.required],
          buying: [null, Validators.required],
          other: [null, Validators.required]
        })
      })
    });
  }

  model() {
    const modal = this.modalCtrl.create("SearchDropdownPage", { type: "TREEDOK", model: [], list: [] });

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
