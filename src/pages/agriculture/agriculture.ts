import { SetArraySkipPageAgiculture, SetSelectorIndex, SaveHouseHold, } from './../../states/household/household.actions';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { map } from 'rxjs/operators';
import { getArraySkipPageAgiculture, getArrayIsCheck, getNextPageDirection, getHouseHoldSample } from '../../states/household';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { AppStateProvider } from '../../providers/app-state/app-state';


@IonicPage()
@Component({
  selector: 'page-agriculture',
  templateUrl: 'agriculture.html',
})
export class AgriculturePage {

  private submitRequested: boolean;
  public f: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample);
  private formDatAgiculture$ = this.store.select(getArraySkipPageAgiculture).pipe(map(s => s));
  private frontNum: any;
  private isCheckWarningBox: boolean;
  private backNum: any;
  public id: any;

  constructor(private appState: AppStateProvider, public alertController: AlertController, 
      private loadingCtrl: LoadingController,
      public modalCtrl: ModalController, public navCtrl: NavController, 
      public local: LocalStorageProvider, private store: Store<HouseHoldState>, 
      public fb: FormBuilder, public navParams: NavParams) {
    this.f = this.fb.group({
      "ricePlant": this.fb.group({
        'doing': [false, Validators.required],
      }),
      'agronomyPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'rubberTree': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'perennialPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'herbsPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'flowerCrop': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'mushroomPlant': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'animalFarm': this.fb.group({
        'doing': [false, Validators.required],
      }),
      'aquaticAnimals': this.fb.group({
        'doing': [false, Validators.required],
      }),
    }, {
        validator: AgriculturePage.checkAnyOrOther()
      });
  }

  presentAlert(Title: string) {
    if (Title == "พืชไร่") {

      const alert = this.alertController.create({
        title: 'ตัวอย่าง พืชไร่',
        subTitle: 'เช่น กก ข้าวโพดเลี้ยงสัตว์ ข้าวฟ่าง งา ถั่วทุกชนิด ทานตะวัน นุ่น ปอ ฝ้าย มันสำปะหลัง ยาสูบ ละหุ่ง <br> ลูกเดือย สาคู แห้ว อ้อย สัปปะรด กาแฟ เป็นต้น',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'ตกลง',
            handler: data => {
            }
          }
        ]
      });
      alert.present();
    }

    if (Title == "พืชยืนต้น") {

      const alert = this.alertController.create({
        title: 'ตัวอย่าง พืชยืนต้น',
        subTitle: '<b>พืชยืนต้น ไม้ผล</b> เช่น กระท้อน กล้วย แก้วมังกร จาก เงาะ ชมพู่ หมาก หวาย หม่อน มะม่วง มะนาว มังคุด ทุเรียน ลิ้นจี่ มะละกอ ลองกอง ลางสาด สะตอ สะเดา ส้มโอ ส้มเขียวหวาน น้อยหน่า องุ่น แอ๊ปเปิ้ล มะพร้าว แตงโม <br> ปาล์มน้ำมัน เป็นต้น <br> <b>สวนป่า</b> เช่น กระถินณรงค์ กฤษณา โกงกาง ชิงชัน แดง ตะเคียนทอง ทองหลาง ตีนเป็ด ประดู่ ไผ่ <br> มะค่าโมง ยางนา ยูคาลิปตัส สน สัก เป็นต้น',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'ตกลง',
            handler: data => {
            }
          }
        ]
      });
      alert.present();
    }

    if (Title == "พืชผักสมุนไพร") {

      const alert = this.alertController.create({
        title: 'ตัวอย่าง พืชผักสมุนไพร',
        subTitle: 'เช่น กะหล่ำปลี ข่า ขิง ขมิ้น คะน้า ชะอม ตะไคร้ แตงกวา บวบ บัวสาย ผักกาดขาว ผักชี เผือก พริก หอม มันเทศ โหระพา กะเพรา แมงลัก มะเขือเทศ มะเขือ พริกไทย กระวาน กานพลู กวาวเครือ สำรอง <br> หญ้าหวาน อบเชย อัญชัน <br> ข้าวโพดฝักอ่อน ข้าวโพดรับประทาน เป็นต้น',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'ตกลง',
            handler: data => {
            }
          }
        ]
      });
      alert.present();
    }

    if (Title == "ไม้ดอกไม้ประดับ") {

      const alert = this.alertController.create({
        title: 'ตัวอย่าง ไม้ดอกไม้ประดับ',
        subTitle: '<b>ไม้ดอก</b> เช่น กล้วยไม้ กุหลาบ คาร์เนชั่น จำปา จำปี ดอกกระดาษ ดอกรัก ดาวเรือง บานไม่รู้โรย เบญจมาศ มะลิ เยอร์บิรา หน้าวัว เป็นต้น <br> <b>ไม้ประดับ</b> เช่น โกสน เข็ม เตย ไทร เทียนทอง บอนไซ บอนสี เฟิร์นต่างๆ ปาล์มต่าง ๆ ไผ่ เฟื่องฟ้า ลิ้นมังกร วาสนา ว่าน ต่างๆ หญ้าปูสนาม เป็นต้น',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'ตกลง',
            handler: data => {
            }
          }
        ]
      });
      alert.present();
    }
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {

      const ricePlant = c.get('ricePlant');
      const agronomyPlant = c.get('agronomyPlant');
      const rubberTree = c.get('rubberTree');
      const perennialPlant = c.get('perennialPlant');
      const herbsPlant = c.get('herbsPlant');
      const flowerCrop = c.get('flowerCrop');
      const mushroomPlant = c.get('mushroomPlant');
      const animalFarm = c.get('animalFarm');
      const aquaticAnimals = c.get('aquaticAnimals');

      if (!ricePlant.value && !agronomyPlant.value && !rubberTree.value && !perennialPlant.value && !herbsPlant.value && !flowerCrop.value && !mushroomPlant.value
        && !animalFarm.value && !aquaticAnimals.value) {
        return { 'anycheck': true };
      }
      return null;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgriculturePage');
    this.countNumberPage();
    this.formDatAgiculture$.subscribe(data => {
      if (data != null) {
        console.log("data agi", data);

        this.f.get('ricePlant.doing').setValue(data.ricePlant);
        this.f.get('agronomyPlant.doing').setValue(data.agronomyPlant);
        this.f.get('rubberTree.doing').setValue(data.rubberTree);
        this.f.get('perennialPlant.doing').setValue(data.perennialPlant);
        this.f.get('herbsPlant.doing').setValue(data.herbsPlant);
        this.f.get('flowerCrop.doing').setValue(data.flowerCrop);
        this.f.get('mushroomPlant.doing').setValue(data.mushroomPlant);
        this.f.get('animalFarm.doing').setValue(data.animalFarm);
        this.f.get('aquaticAnimals.doing').setValue(data.aquaticAnimals);

      }
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.isCheckWarningBox = !this.isValid('anycheck');

    if (!this.isValid('anycheck')) {
      let argiRice = {
        ...this.appState.houseHoldUnit.agriculture.ricePlant,
        doing: this.f.get('ricePlant.doing').value,
      }
      let argiAgronomyPlant = {
        ...this.appState.houseHoldUnit.agriculture.agronomyPlant,
        doing: this.f.get('agronomyPlant.doing').value,
      }
      let argiRubberTree = {
        ...this.appState.houseHoldUnit.agriculture.rubberTree,
        doing: this.f.get('rubberTree.doing').value,
      }
      let argiPerennialPlant = {
        ...this.appState.houseHoldUnit.agriculture.perennialPlant,
        doing: this.f.get('perennialPlant.doing').value,
      }
      let argiHerbsPlant = {
        ...this.appState.houseHoldUnit.agriculture.herbsPlant,
        doing: this.f.get('herbsPlant.doing').value,
      }
      let argiFlowerCrop = {
        ...this.appState.houseHoldUnit.agriculture.flowerCrop,
        doing: this.f.get('flowerCrop.doing').value,
      }
      let argiMushroomPlant = {
        ...this.appState.houseHoldUnit.agriculture.mushroomPlant,
        doing: this.f.get('mushroomPlant.doing').value,
      }
      let argiAnimalFarm = {
        ...this.appState.houseHoldUnit.agriculture.animalFarm,
        doing: this.f.get('animalFarm.doing').value,
      }
      let argiAquaticAnimals = {
        ...this.appState.houseHoldUnit.agriculture.aquaticAnimals,
        doing: this.f.get('aquaticAnimals.doing').value,
      }

      let argi = {
        ...this.appState.houseHoldUnit.agriculture,
        ricePlant: argiRice,
        agronomyPlant: argiAgronomyPlant,
        rubberTree: argiRubberTree,
        perennialPlant: argiPerennialPlant,
        herbsPlant: argiHerbsPlant,
        flowerCrop: argiFlowerCrop,
        mushroomPlant: argiMushroomPlant,
        animalFarm: argiAnimalFarm,
        aquaticAnimals: argiAquaticAnimals,
      };
      let houseHold = {
        ...this.appState.houseHoldUnit,
        agriculture: argi,
      };
      this.store.dispatch(new SaveHouseHold(houseHold));
      this.arrayIsCheckMethod();

      const loading = this.loadingCtrl.create({
        content: 'กำลังบันทึก กรุณารอสักครู่',
        enableBackdropDismiss: false,
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.pop();
      }, 654);
    }
  }

  arrayIsCheckMethod() {
    this.store.dispatch(new SetSelectorIndex(1));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: Array<number>;
    arrayIsCheck$.subscribe(data => {
      if (data != null) {
        arrayIsCheck = data;

        if (arrayIsCheck.every(it => it != 1)) {
          arrayIsCheck.push(1);
        }
        console.log(arrayIsCheck);
      }
    });
  }

  countNumberPage() {
    console.log("onSubmit ");
    let arrayNextPage$ = this.store.select(getNextPageDirection).pipe(map(s => s));
    let arrayNextPage: any[];
    arrayNextPage$.subscribe(data => {

      if (data != null) {
        arrayNextPage = data;
        let arrLength = arrayNextPage.filter((it) => it == true);
        this.backNum = arrLength.length;
      }

    });
    console.log("back", this.backNum);

    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck: any[];
    arrayIsCheck$.subscribe(data => {

      if (data != null) {
        arrayIsCheck = data
        this.frontNum = arrayIsCheck.length;
      }

    });
    console.log("frontNum", this.frontNum);
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'anycheck') {
      ctrl = this.f;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
