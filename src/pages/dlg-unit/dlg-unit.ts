import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UnitButtonComponent } from '../../components/unit-button/unit-button';

/**
 * Generated class for the DlgUnitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-unit',
  templateUrl: 'dlg-unit.html',
})
export class DlgUnitPage {
  private submitRequested: boolean;
  public FormItem: FormGroup;

  @ViewChildren(UnitButtonComponent) private unitButton: UnitButtonComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public fb: FormBuilder) {
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
    const dataIn = navParams.get('FormItem') as FormGroup;
    this.FormItem.setValue(dataIn.value);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgUnitPage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.submitRequested = true;
    this.viewCtrl.dismiss(this.FormItem);
    // if (this.FormItem.get('subUnit.roomNumber').valid && this.FormItem.get('subUnit.accesses').valid) {
    //   this.viewCtrl.dismiss(this.FormItem);
    //   if (this.FormItem.get('subUnit.accesses').value == 1) {
    //     this.navCtrl.push("WaterActivityUnitPage")
    //   }
    // }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
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
          ctrl = UnitButtonComponent.CreateAccess(this.fb);
        }

        farr.push(ctrl);
      }
      // this.FormItem.setControl(componentFormArray, farr);
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
