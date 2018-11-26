import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ModalController, Form, NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { HouseHoldState } from '../../states/household/household.reducer';

/**
 * Generated class for the UnitButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'unit-button',
  templateUrl: 'unit-button.html'
})
export class UnitButtonComponent {

  @Input() forwardFormData$: any;
  @Input("headline") public text: string;
  @Input('no') public unitNo: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;
  // private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));

  public access: number;
  public comment: string;

  public index: number;
  public class = "play";
  public roomNumber = '';

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, private fb: FormBuilder) {
    console.log('Hello UnitButtonComponent Component');
    this.text = '';
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      '_id': [null, Validators.required],
      'ea': [null, Validators.required],
      'buildingId': [null, Validators.required],
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'accessCount': [0],
        'accesses': fb.array([{
          'access': [null],
        }, {
          'access': [null],
        }, {
          'access': [null],
        }]),
        'hasPlumbing': [null, Validators.required],
        'hasPlumbingMeter': [false, Validators.required],
        'isPlumbingMeterXWA': [false, Validators.required],
        'hasGroundWater': [null, Validators.required],
        'hasGroundWaterMeter': [false, Validators.required],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.array([{
        'at': [null],
        'text': [''],
      }, {
        'at': [null],
        'text': [''],
      }, {
        'at': [null],
        'text': [''],
      }]),
      'residence': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'factory': [null, Validators.required],
      'commerce': [null, Validators.required],
      'waterUsage': [null, Validators.required],
      'disaster': [null, Validators.required],
      'closing': [null, Validators.required],
      'recCtrl': [null, Validators.required],
    });
  }

  public showModalSetting() {
    this.FormItem.get('subUnit.accessCount').setValue(this.index);
    const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
        this.setAccess();
      }
    });
    modal.present();
  }

  public showModal() {
    if (this.access == 1) {
      this.goWaterActivityUnitPage();
    }
    else if (this.class != "complete" && this.class != "completeCm") {
      const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
      modal.onDidDismiss(data => {
        if (data) {
          var fg = <FormGroup>data;
          this.FormItem.setValue(fg.value);
          this.setAccess();
        }
      });
      modal.present();
    }
  }

  submitRequest() {
    this.submitRequested = true;
  }

  goWaterActivityUnitPage() {
    this.navCtrl.push('WaterActivityUnitPage');
  }

  ionViewDidEnter() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitButtonComponent');
    // this.formData$.subscribe(data => this.FormItem.setValue(data));
    // this.DlgUnitPage.forEach(it => it.ionViewDidLoad());
    // console.log('dasdsadsad');
    // console.log(this.FormItem);

  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static CreateAccess(fb: FormBuilder): FormGroup {
    return fb.group({
      'access': [null, Validators.required],
    });
  }

  public static CreateComment(fb: FormBuilder): FormGroup {
    return fb.group({
      'at': [null],
      'text': [''],
    });
  }

  private setAccess() {
    this.index = this.FormItem.get('subUnit.accessCount').value - 1;
    let fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    let fgcm = this.FormItem.get('comments') as FormArray;
    this.access = fgac.at(this.index).value.access[0];
    this.comment = fgcm.at(this.index).value.text[0];
    this.roomNumber = this.FormItem.get('subUnit.roomNumber').value;
    this.checkAccess();
  }

  private checkAccess() {
    switch (this.access) {
      case 1:
        if (this.FormItem.valid) {
          this.class = (this.comment == '') ? "complete" : "completeCm";
        }
        else {
          this.class = (this.comment == '') ? "pause" : "pauseCm";
        }
        break;
      case 2:
      case 3:
        if (this.index < 2) {
          this.class = (this.comment == '') ? "return" : "returnCm";
        }
        else {
          this.class = (this.comment == '') ? "complete" : "completeCm";
        }
        break;
      case 4:
      case 5:
        this.class = "complete";
        break;
      default:
        break;
    }
  }
}
