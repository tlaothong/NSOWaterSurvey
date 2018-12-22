import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableDisasterousComponent } from '../../components/table-disasterous/table-disasterous';

@IonicPage()
@Component({
  selector: 'page-dlg-table-disasterous',
  templateUrl: 'dlg-table-disasterous.html',
})
export class DlgTableDisasterousPage {

  public FormItem: FormGroup;
  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder ) {
    this.FormItem = TableDisasterousComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
    this.text = navParams.get("headline");
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgTableDisasterousPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched);
  }
}
