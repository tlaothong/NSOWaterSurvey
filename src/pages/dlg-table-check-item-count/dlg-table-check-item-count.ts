import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';

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

  constructor(public navCtrl: NavController, private fb: FormBuilder, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = TableCheckItemCountComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);

    this.text = navParams.get("iTitle");
    this.unit = navParams.get("unit");
  }

  public closeDialog() {

    this.viewCtrl.dismiss();
  }

  public okDialog() {
    // this.navCtrl.pop();
    if (this.FormItem.get('hasItem').value == false && this.FormItem.get('itemCount').value != null) 
    {
      this.FormItem.get('itemCount').setValue(null);
      this.viewCtrl.dismiss(this.FormItem);
    }
    else
    {
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgTableCheckItemCountPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'anycheck') {
      ctrl = this.FormItem;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public isDisabled() {
    console.log(this.FormItem.get('animalName').value);
    console.log();
    
    

    if (this.FormItem.get('hasItem').value == true) {
      return (
        (this.FormItem.get('hasItem').value == true) && (this.FormItem.get('itemCount').value == null) ||
        (this.FormItem.get('hasItem').value == true) && (this.FormItem.get('itemCount').value == 0)
      );
    }
  }
}

