import { CommunityState } from './../../states/community/community.reducer';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { DetailManagementForFarmingComponent } from '../../components/detail-management-for-farming/detail-management-for-farming';
import { Store } from '@ngrx/store';
import { CountComponent } from '../../components/count/count';
import { getCommunitySample } from '../../states/community';
import { SaveCommunity } from '../../states/community/community.actions';
import { CommunityWaterManagementPage } from '../community-water-management/community-water-management';
import { AppStateProvider } from '../../providers/app-state/app-state';

@IonicPage()
@Component({
  selector: 'page-management-for-farming',
  templateUrl: 'management-for-farming.html',
})
export class ManagementForFarmingPage {

  @ViewChildren(DetailManagementForFarmingComponent) private detailManagementForFarming: DetailManagementForFarmingComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  public managementforfarming: FormGroup;
  private submitRequested: boolean;
  private isCheckWarningBox: boolean;
  private formData$ = this.store.select(getCommunitySample);
  public getSetCommunity: FormGroup;
  private formData: any;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, 
    public fb: FormBuilder, private store: Store<CommunityState>, private alertCtrl: AlertController,
    private appState: AppStateProvider) {
    this.formData = CommunityWaterManagementPage.CreateMainFormGroup(fb);
    this.managementforfarming = ManagementForFarmingPage.CreateFormGroup(fb);
    this.setupprojectcountChanges();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'doing': [null, Validators],
      'projectCount': [0, Validators.compose([Validators.pattern('[0-9]*')])],
      'details': fb.array([]),
    }, {
        validator: ManagementForFarmingPage.checkAnyOrOther()
      });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailManagementForFarming.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    this.formData.status = "done-all"
    this.formData.get('communityProject').setValue(this.managementforfarming.value);
    this.isCheckWarningBox = this.managementforfarming.valid;
    if (this.managementforfarming.valid) {
      let originalCommunity = this.appState.communityData;
      let newCommunity = {
        ...originalCommunity,
        communityProject: this.managementforfarming.value,
        status: "done-all"
      };
      
      this.store.dispatch(new SaveCommunity(newCommunity))
      this.navCtrl.popToRoot();
    } else {
      const doing = this.managementforfarming.get('doing').value;
      const detaisInvalid = this.managementforfarming.get('details').invalid;
      const projectCountValid = this.managementforfarming.get('projectCount').valid;

      if (doing == false && projectCountValid && detaisInvalid) { // เข้าเงื่อนไขที่ยกเว้นได้
        const confirmChanged = this.alertCtrl.create({
          title: 'แก้ไขข้อมูลให้ถูกต้อง',
          message: 'ไม่สามารถบันทึกรายการได้ เพราะมีข้อมูลรายละเอียดที่ไม่สมบูรณ์ <p>กด<b>ยืนยัน</b>หากท่านต้องการให้ระบบลบข้อมูลที่กรอกไว้เหล่านั้นทิ้ง แล้วกดบันทึกอีกครั้ง</p> <p>หรือกด<b>ยกเลิก</b>เพื่อกลับไปปรับปรุงข้อมูลด้วยตัวท่านเอง</p>',
          buttons: [
            "ยกเลิก",
            {
              text: "ยืนยัน",
              handler: () => {
                this.managementforfarming.get('projectCount').setValue(0);
              },
            },
          ]
        });
        confirmChanged.present();
      }
    }

  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const doing = c.get('doing');
      const projectCount = c.get('projectCount');

      if (doing.value == null) {
        return { 'doing': true };
      }
      if (doing.value != null && doing.value == true && projectCount.value <= 0) {
        return { 'projectCount': true };
      }

      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.managementforfarming.get(name);
    if (name == 'doing') {
      let ctrls = this.managementforfarming;
      return ctrls.errors && ctrls.errors.doing && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'projectCount') {
      let ctrls = this.managementforfarming;
      return ctrls.errors && ctrls.errors.projectCount && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


  private setupprojectcountChanges() {
    const componentFormArray: string = "details";
    const componentCount: string = "projectCount";
    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.managementforfarming.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.managementforfarming.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = DetailManagementForFarmingComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.managementforfarming.setControl(componentFormArray, field);
    };
    this.managementforfarming.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());
    onComponentCountChanges();
  }
}
