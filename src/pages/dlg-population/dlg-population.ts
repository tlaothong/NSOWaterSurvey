import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';
import { Nationality, nationalityData } from '../../models/Nationality';
import { Province, provinceData } from '../../models/ProvinceData';


@IonicPage()
@Component({
  selector: 'page-dlg-population',
  templateUrl: 'dlg-population.html',
})
export class DlgPopulationPage {

  public FormItem: FormGroup;
  public FormArray: FormArray;
  public text: string;
  private submitRequested: boolean;
  public checkHead: boolean;
  public clickCheckHead: boolean;

  public Nation: Nationality[] = nationalityData.filter(it => it.Tag == true);
  public OtherNation: Nationality[] = nationalityData.filter(it => it.Tag == false);
  public Province: Province[] = provinceData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");

    this.FormItem = TablePopulationComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);

    this.FormArray = navParams.get('FormArray');
  }

  ionViewDidLoad() {
    console.log(this.Nation)
  }

  public closeDialog() {

    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    if (this.FormItem.valid && !this.isCheckHeadfamily()) {
      this.viewCtrl.dismiss(this.FormItem);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public isDisabled(): boolean {
    if (this.FormItem.get('nameTitle').value == '6' && this.FormItem.get('otherTitle').value == null
      || this.FormItem.get('registration').value == '3' && this.FormItem.get('otherProvince').value == null
      || (this.FormItem.get('relationship').value == 7) && (this.FormItem.get('age').value < 13 && this.FormItem.get('age').value != null)
      || (this.FormItem.get('nameTitle').value == 1 || this.FormItem.get('nameTitle').value == 4) && (this.FormItem.get('sex').value == 2 && this.FormItem.get('sex').value != null)
      || (this.FormItem.get('nameTitle').value == 2 || this.FormItem.get('nameTitle').value == 3 || this.FormItem.get('nameTitle').value == 5) && (this.FormItem.get('sex').value == 1 && (this.FormItem.get('sex').value != null))) {
      return true
    }
    return false;
  }

  public isCheckHeadfamily(): boolean {
    let index = Number(this.text) - 1;
    let count = 0;
    for (let i = 0; i < this.FormArray.length; i++) {
      if (i != index) {
        count += (this.FormArray.at(i).get('relationship').value == "1") ? 1 : 0;
      }
    }
    count += (this.FormItem.get('relationship').value == "1") ? 1 : 0;
    return count > 1;
  }
}
