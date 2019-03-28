import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime, ModalController, ActionSheetController } from 'ionic-angular';
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
  public proName: any;

  public Nation: Nationality[] = nationalityData.filter(it => it.Tag == true);
  public OtherNation: Nationality[] = nationalityData
  public Province: Province[] = provinceData;

  public dateTime: Date = new Date();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private viewCtrl: ViewController,
    private fb: FormBuilder, public actionSheetCtrl: ActionSheetController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
    this.proName = navParams.get('proName');
    this.Province = this.Province.sort((a, b) => a.name.localeCompare(b.name));

    this.FormItem = TablePopulationComponent.CreateFormGroup(this.fb);
    const datain = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(datain.value);

    this.FormArray = navParams.get('FormArray');
  }


  ionViewDidLoad() {
    let check = this.FormItem.get('nationality').value
    if (check != null && check != "สัญชาติอื่นๆ") {
      let nat = nationalityData.find(it => it.Name == check)
      let natValue = nat.Tag
      if (natValue == false) {
        this.Nation = nationalityData;
      }
    }
  }

  change(event) {
    if (event == 'สัญชาติอื่นๆ') {
      this.FormItem.get('nationality').setValue(null)
      this.Nation = this.OtherNation;
      let element = document.getElementById('nationSelect');

      setTimeout(() => {
        this.nation.open();
        console.log(this.nation);
      }, 500);
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
    if (name == 'age') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.age && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public isDisabled(): boolean {
    // console.log("otherProvine", this.FormItem.get('otherProvince').value + "====" + this.proName)
    if (this.FormItem.get('nameTitle').value == '6' && this.FormItem.get('otherTitle').value == null
      || this.FormItem.get('registration').value == '3' && this.FormItem.get('otherProvince').value == null
      || (this.FormItem.get('relationship').value == 7) && (this.FormItem.get('age').value < 13 && this.FormItem.get('age').value != null)
      || (this.FormItem.get('nameTitle').value == 1
        || this.FormItem.get('nameTitle').value == 4) && (this.FormItem.get('sex').value == 2 && this.FormItem.get('sex').value != null)
      || (this.FormItem.get('nameTitle').value == 2
        || this.FormItem.get('nameTitle').value == 3
        || this.FormItem.get('nameTitle').value == 5) && (this.FormItem.get('sex').value == 1 && (this.FormItem.get('sex').value != null))
      || ((this.FormItem.get('otherProvince').value != null) && (this.FormItem.get('otherProvince').value == this.proName))) {
      return true
    }
    if (((this.FormItem.get('birthDate').value == 30 || this.FormItem.get('birthDate').value == 31) && (this.FormItem.get('birthMonth').value == 2))) {
      return true;
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
    this.dateTime.setFullYear(2019, 4, 30);

    let birthDate = this.FormItem.get('birthDate').value || 99;
    let birthMonth = this.FormItem.get('birthMonth').value || 99;
    let birthYear = this.FormItem.get('birthYear').value + 1457;

    let age = this.dateTime.getFullYear() - birthYear;

    if (birthDate == 99) birthDate = 0;
    if (birthMonth == 99) birthMonth = 0;
    if (birthMonth > this.dateTime.getMonth() || birthMonth == this.dateTime.getMonth() && birthDate > this.dateTime.getDate()) age--;
    if (age < 0) age = null;

    this.FormItem.get('age').setValue(age);
  }

  picture() {
    let profileModal = this.modalCtrl.create("DlgCalendarAgePage", {});
    profileModal.present();
  }

  presentModal() {
    const modal = this.modalCtrl.create("DlgPopulationBirthYearPage");
    modal.onDidDismiss(data => {
      if (data) {
        this.FormItem.get('birthYear').setValue(data);
        this.CalculateAge();
      }
    });
    modal.present();
  }

  showActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'ช่วยจำ (3 สกุล)',
      buttons: [
        {
          text: 'LastName1',
          //role: 'lastName1',
          handler: () => {
            console.log('LastName1 clicked');
          }
        }, {
          text: 'LastName2',
          handler: () => {
            console.log('LastName2 clicked');
          }
        }
        , {
          text: 'LastName3',
          handler: () => {
            console.log('LastName3 clicked');
          }
        }, {
          text: 'Cancel',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

