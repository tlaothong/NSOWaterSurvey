import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ModalController, Form, NavController } from 'ionic-angular';

@Component({
  selector: 'unit-button',
  templateUrl: 'unit-button.html'
})
export class UnitButtonComponent {

  @Input("headline") public text: string;
  @Input('no') public unitNo: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = '';
    // TODO: Remove this
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
  }

  ionViewDidLoad() {
    console.log('load');
  }

  ionViewDidEnter() {
    console.log('enter');
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
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
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }

  submitRequest() {
    this.submitRequested = true;
  }

  goWaterActivityUnitPage() {
    this.navCtrl.push('WaterActivityUnitPage');
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

  // private setupAccessCountChanges() {
  //   const componentFormArray: string = "subUnit.accesses";
  //   const componentCount: string = "subUnit.accessCount";

  //   var onComponentCountChanges = () => {
  //     var accesses = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
  //     var accessCount = this.FormItem.get(componentCount).value || 0;
  //     var farr = this.fb.array([]);

  //     accessCount = Math.max(0, accessCount);

  //     for (let i = 0; i < accessCount; i++) {
  //       var ctrl = null;
  //       if (i < accesses.length) {
  //         const fld = accesses[i];
  //         ctrl = fld;
  //       } else {
  //         ctrl = UnitButtonComponent.CreateAccess(this.fb);
  //       }

  //       farr.push(ctrl);
  //     }
  //     // this.FormItem.setControl(componentFormArray, farr);
  //     let fgrp = this.FormItem.get('subUnit') as FormGroup;
  //     fgrp.setControl('accesses', farr);
  //   };

  //   this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

  //   onComponentCountChanges();
  // }

  // private setupAccessCountChangesForComments() {
  //   const componentFormArray: string = "comments";
  //   const componentCount: string = "subUnit.accessCount";

  //   var onComponentCountChanges = () => {
  //     var comments = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
  //     var accessCount = this.FormItem.get(componentCount).value || 0;
  //     var farr = this.fb.array([]);

  //     accessCount = Math.max(0, accessCount);

  //     for (let i = 0; i < accessCount; i++) {
  //       var ctrl = null;
  //       if (i < comments.length) {
  //         const fld = comments[i];
  //         ctrl = fld;
  //       } else {
  //         ctrl = UnitButtonComponent.CreateComment(this.fb);
  //       }

  //       farr.push(ctrl);
  //     }
  //     this.FormItem.setControl(componentFormArray, farr);
  //   };

  //   this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

  //   onComponentCountChanges();
  // }

}
