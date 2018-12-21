import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-table-check-item-count',
  templateUrl: 'dlg-table-check-item-count.html',
})
export class DlgTableCheckItemCountPage {

  public FormItem: FormGroup;
  public text: string;
  public unit: string;
  submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
    this.unit = navParams.get("unit");

  }

  public closeDialog() {
    if (this.FormItem.get('hasItem').value == false) {
      this.FormItem.get('itemCount').setValue(null);
    }

    if (this.FormItem.get('itemCount').value == null || this.FormItem.get('itemCount').value == "") {
      this.FormItem.get('hasItem').setValue(false);
    }

    var a = this.FormItem.get('itemCount').value;
    var b = this.FormItem.get('hasItem').value;
    this.viewCtrl.dismiss();
    
  }

  public okDialog() {
    
    this.viewCtrl.dismiss(this.FormItem);
    // this.navCtrl.pop();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgTableCheckItemCountPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    }

  }

  public isDisabled() {

    if (this.FormItem.get('hasItem').value == true) {
      var a = this.FormItem.get('hasItem').value;
      var b = this.FormItem.get('itemCount').value;
      return (
        (this.FormItem.get('hasItem').value == true) && (this.FormItem.get('itemCount').value == null) ||
        (this.FormItem.get('hasItem').value == true) && (this.FormItem.get('itemCount').value == 0)
      );
    }
    else if (this.FormItem.get('hasItem').value == false) {
      var a = this.FormItem.get('hasItem').value;
      return (
        (this.FormItem.get('itemCount').value)
      );
    }
  
  }
  
}

