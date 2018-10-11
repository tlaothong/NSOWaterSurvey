import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the PerennialPlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perennial-planting',
  templateUrl: 'perennial-planting.html',
})
export class PerennialPlantingPage {
  public PerennialPlantingFrm: FormGroup;
  private submitRequested: boolean;
  shownData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public modalCtrl: ModalController) {
    this.PerennialPlantingFrm = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': [null, Validators.required],
      'fields': this.fb.group({
        'names': [null, Validators.required],
        'area': this.fb.group({
          'rai': [null, Validators.required],
          'ngan': [null, Validators.required],
          'sqWa': [null, Validators.required]
        }),
        'irrigationField': [null, Validators.required],
        'waterSource': this.fb.group({
          'rainingAsIs': [null, Validators.required],
          'plumbing': [null, Validators.required],
          'underGround': [null, Validators.required],
          'pool': [null, Validators.required],
          'river': [null, Validators.required],
          'irrigation': [null, Validators.required],
          'rain': [null, Validators.required],
          'buying': [null, Validators.required],
          'other': [null, Validators.required]
        })
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerennialPlantingPage');
  }
  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.PerennialPlantingFrm.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  model() {
  const modal = this.modalCtrl.create("SearchDropdownPage", { type: "TREETON", model: [], list: [] });

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
