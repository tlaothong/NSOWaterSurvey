import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-pool-area',
  templateUrl: 'dlg-pool-area.html',
})
export class DlgPoolAreaPage {

  public FormItem: FormGroup;
  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("headline");

    this.FormItem = this.fb.group({
      'shape':null,
      'area':this.fb.group({
        'rai':[''],
        'ngan':[''],
        'sqWa':[''],
      }),
      'depth':[''],
      'rectangle':this.fb.group({
        'width':[''],
        'length':[''],
      }),
      'diameter':['']
    });
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgFieldAreaPage');
  }

}
