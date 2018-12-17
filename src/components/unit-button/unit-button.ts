import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';

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

  public access: number;
  public comment = '';
  public allComment = '';

  public index: number;
  public class = "play";
  public roomNumber = '';

  public fgac: FormArray;
  public fgcm: FormArray;

  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s));

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, private fb: FormBuilder) {
    console.log('Hello UnitButtonComponent Component');
    this.text = '';
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
  }

  ngOnInit() {
    let count = 0;
    this.formData$.subscribe(data => count = data.subUnit.accessCount);
    this.FormItem.get('subUnit.accessCount').setValue(count);
    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();
    this.setupAccessCountChanges()
    this.formData$.subscribe(data => this.FormItem.setValue(data));
    if (this.FormItem.get('subUnit.accessCount').value > 0) {
      this.setAccess();
    }
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      '_id': [null, Validators.required],
      'ea': [null, Validators.required],
      'buildingId': [null, Validators.required],
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'accessCount': [null],
        'accesses': fb.array([]),
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
      'comments': fb.array([]),
      'residence': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'factory': [null, Validators.required],
      'commerce': [null, Validators.required],
      'waterUsage': [null, Validators.required],
      'disaster': [null, Validators.required],
      'closing': [null, Validators.required],
      'recCtrl': [null, Validators.required],
      'population': [null, Validators.required]
    });
  }

  public showModalSetting() {
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
      this.navCtrl.push('WaterActivityUnitPage', { FormItem: this.FormItem });;
    }
    else if (this.class == "play" || this.class == "return" || this.class == "returnCm") {

      let count = this.FormItem.get('subUnit.accessCount').value + 1;
      this.FormItem.get('subUnit.accessCount').setValue(count);
      this.setupAccessCountChanges();
      this.setupAccessCountChangesForComments();

      const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
      modal.onDidDismiss(data => {
        if (data) {
          var fg = <FormGroup>data;
          this.FormItem.setValue(fg.value);
          this.setAccess();
        }
        else {
          this.FormItem.get('subUnit.accessCount').setValue(count - 1);
          this.setupAccessCountChanges();
          this.setupAccessCountChangesForComments();
        }
      });
      modal.present();
    }
  }

  submitRequest() {
    this.submitRequested = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitButtonComponent');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setAccess() {
    this.fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    this.fgcm = this.FormItem.get('comments') as FormArray;
    this.index = this.FormItem.get('subUnit.accessCount').value - 1;
    this.index = (this.index < 0) ? 0 : this.index;
    this.access = this.fgac.at(this.index).value;
    this.comment = this.fgcm.at(this.index).value.text;

    let text = '';
    for (let i = 0; i < this.index + 1; i++) {
      text += (this.fgcm.at(i).value.text != '') ? 'ครั้งที่ ' + (i + 1) + ' : ' + this.fgcm.at(i).value.text + '<br>' : '';
    }
    this.allComment = text;

    this.roomNumber = this.FormItem.get('subUnit.roomNumber').value;
    this.checkAccess();
  }

  private checkAccess() {
    switch (this.access) {
      case 1:
        if (this.FormItem.valid) {
          this.class = (this.allComment == '') ? "complete" : "completeCm";
        }
        else {
          this.class = (this.allComment == '') ? "pause" : "pauseCm";
        }
        break;
      case 2:
      case 3:
        if (this.index < 2) {
          this.class = (this.allComment == '') ? "return" : "returnCm";
        }
        else {
          this.class = (this.allComment == '') ? "complete" : "completeCm";
        }
        break;
      case 4:
      case 5:
        this.class = (this.allComment == '') ? "abandoned" : "abandonedCm";
        break;
      default:
        break;
    }
  }

  showComment() {
    const alert = this.alertCtrl.create({
      title: 'ปัญหา/อุปสรรค',
      subTitle: this.allComment,
      buttons: ['OK']
    });
    alert.present();
  }

  public static CreateComment(fb: FormBuilder): FormGroup {
    return fb.group({
      'at': [null],
      'text': [''],
    });
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "subUnit.accesses";
    const componentCount: string = "subUnit.accessCount";

    var onComponentCountChanges = () => {
      var accesses = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.FormItem.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < accesses.length) {
          const fld = accesses[i];
          ctrl = fld;
        } else {
          ctrl = new FormControl();
        }

        farr.push(ctrl);
      }
      let fgrp = this.FormItem.get('subUnit') as FormGroup;
      fgrp.setControl('accesses', farr);
    };

    this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupAccessCountChangesForComments() {
    const componentFormArray: string = "comments";
    const componentCount: string = "subUnit.accessCount";

    var onComponentCountChanges = () => {
      var comments = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.FormItem.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < comments.length) {
          const fld = comments[i];
          ctrl = fld;
        } else {
          ctrl = UnitButtonComponent.CreateComment(this.fb);
        }

        farr.push(ctrl);
      }
      this.FormItem.setControl(componentFormArray, farr);
    };

    this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
