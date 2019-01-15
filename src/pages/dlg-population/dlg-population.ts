import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';

@IonicPage()
@Component({
  selector: 'page-dlg-population',
  templateUrl: 'dlg-population.html',
})
export class DlgPopulationPage {

  public FormItem: FormGroup;
  public text: string;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
    this.FormItem = TablePopulationComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPopulationPage');
    
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.valid) {
      this.viewCtrl.dismiss(this.FormItem);
      console.log(this.FormItem)
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public isDisabled():boolean{
    if (this.FormItem.get('nameTitle').value == '6' && this.FormItem.get('otherTitle').value == null 
    || this.FormItem.get('registration').value == '3' && this.FormItem.get('otherProvince').value == null
    || (this.FormItem.get('relationship').value == 7) && (this.FormItem.get('age').value < 13 && this.FormItem.get('age').value != null)
    || (this.FormItem.get('nameTitle').value == 1 || this.FormItem.get('nameTitle').value == 4)  && (this.FormItem.get('sex').value == 2 && this.FormItem.get('sex').value != null)
    || (this.FormItem.get('nameTitle').value == 2 || this.FormItem.get('nameTitle').value == 3 || this.FormItem.get('nameTitle').value == 5 ) && (this.FormItem.get('sex').value == 1 && (this.FormItem.get('sex').value != null)))
    {
      return true
    }
    return false;
  }
}
