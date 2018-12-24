import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RainStorageComponent } from '../../components/rain-storage/rain-storage';

@IonicPage()
@Component({
  selector: 'page-dlg-rain-storage',
  templateUrl: 'dlg-rain-storage.html',
})
export class DlgRainStoragePage {
  public FormItem: FormGroup;
  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get('headline');
    this.FormItem = RainStorageComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgRainStoragePage');
    if (this.FormItem.get('category').invalid) {
      this.FormItem.get('category').setValue(this.text);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched);
  }
}
