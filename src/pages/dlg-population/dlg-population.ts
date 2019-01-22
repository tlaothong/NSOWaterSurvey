import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TablePopulationComponent } from '../../components/table-population/table-population';
import { Nationality, nationalityData } from '../../models/Nationality';
import { Province, provinceData } from '../../models/ProvinceData';
import { Select } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dlg-population',
  templateUrl: 'dlg-population.html',
})
export class DlgPopulationPage {
  @ViewChild('nationSelect') nation: Select;

  public FormItem: FormGroup;
  public FormArray: FormArray;
  public text: string;
  private submitRequested: boolean;
  public checkHead: boolean;
  public clickCheckHead: boolean;
  public proName:any;

  public Nation: Nationality[] = nationalityData.filter(it => it.Tag == true);
  public OtherNation: Nationality[] = nationalityData.filter(it => it.Tag == false);
  public Province: Province[] = provinceData;

  public dateTime: Date = new Date();

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, private viewCtrl: ViewController, private fb: FormBuilder) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
    this.proName = navParams.get('proName');

    this.FormItem = TablePopulationComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);

    this.FormArray = navParams.get('FormArray');
  }


  ionViewDidLoad() {
    if (this.FormItem.get('nationality').value != null) {
      this.Nation = nationalityData;
    }
    console.log(this.Nation)
  }

  change(event) {
    if (event == 'สัญชาติอื่นๆ') {
      this.Nation = this.OtherNation;
      let element = document.getElementById('nationSelect');

      setTimeout(() => {
        this.nation.open();
        console.log(this.nation);
      }, 1000);
    }
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
    console.log("otherProvine",this.FormItem.get('otherProvince').value+"===="+this.proName)
    if (this.FormItem.get('nameTitle').value == '6' && this.FormItem.get('otherTitle').value == null
      || this.FormItem.get('registration').value == '3' && this.FormItem.get('otherProvince').value == null
      || (this.FormItem.get('relationship').value == 7) && (this.FormItem.get('age').value < 13 && this.FormItem.get('age').value != null)
      || (this.FormItem.get('nameTitle').value == 1 
      || this.FormItem.get('nameTitle').value == 4) && (this.FormItem.get('sex').value == 2 && this.FormItem.get('sex').value != null)
      || (this.FormItem.get('nameTitle').value == 2 
      || this.FormItem.get('nameTitle').value == 3 
      || this.FormItem.get('nameTitle').value == 5) && (this.FormItem.get('sex').value == 1 && (this.FormItem.get('sex').value != null))
      || this.FormItem.get('otherProvince').value == this.proName) {
      return true
    }
    return false;
  }

  public isCheckHeadfamily(): boolean {
    let index = Number(this.text) - 1;
    let count = 0;
    for (let i = 0; i < this.FormArray.length; i++) {
      if (this.FormArray.at(i).get('relationship').value == "1" && i != index) count++;
    }
    if (this.FormItem.get('relationship').value == "1") count++;
    return count > 1;
  }

  public CalculateAge() {
    let birthDate = this.FormItem.get('birthDate').value;
    let birthMonth = this.FormItem.get('birthMonth').value - 1;
    let birthYear = this.FormItem.get('birthYear').value + 1457;

    let age = this.dateTime.getFullYear() - birthYear;

    if (birthDate == 99) birthDate = 0;
    if (birthMonth == 99) birthMonth = 0;
    if (birthMonth > this.dateTime.getMonth() || birthMonth == this.dateTime.getMonth() && birthDate > this.dateTime.getDate()) age--;
    if (age < 0) age = null;

    this.FormItem.get('age').setValue(age);
  }

  picture(){
    let profileModal = this.modalCtrl.create("DlgCalendarAgePage", { });
    profileModal.present();
  }


}
