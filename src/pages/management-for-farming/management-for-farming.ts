import { CommunityState } from './../../states/community/community.reducer';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { DetailManagementForFarmingComponent } from '../../components/detail-management-for-farming/detail-management-for-farming';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getCommunitySample, getSetCommunity } from '../../states/community';
import { SetNextPageDirection } from '../../states/household/household.actions';
import { CommunityWaterManagementPage } from '../community-water-management/community-water-management';
import { SetCommunity } from '../../states/community/community.actions';
import { getStoreWorkEaOneRecord, getLoadCommunityForEdit } from '../../states/logging';
import { Storage } from '@ionic/storage';
import { CountComponent } from '../../components/count/count';

@IonicPage()
@Component({
  selector: 'page-management-for-farming',
  templateUrl: 'management-for-farming.html',
})
export class ManagementForFarmingPage {

  @ViewChildren(DetailManagementForFarmingComponent) private detailManagementForFarming: DetailManagementForFarmingComponent[];
  @ViewChildren(CountComponent) private count: CountComponent[];
  // @ViewChildren(CommunityWaterManagementPage) private communityWaterManagement: CommunityWaterManagementPage;

  public managementforfarming: FormGroup;
  private submitRequested: boolean;

  // private formDataCom$ = this.store.select(getLoadCommunityForEdit).pipe(map(s => s.communityProject));

  // private formData$ = this.store.select(getCommunitySample).pipe(map(s => s.communityProject));
  // private dataCommunuty$ = this.store.select(getSetCommunity);
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private DataStoreWorkEaOneRecord: any;

  private getSetCommunity$ = this.store.select(getSetCommunity);
  public getSetCommunity: FormGroup;

  private formData: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public navParams: NavParams, public fb: FormBuilder, private store: Store<CommunityState>) {
    this.managementforfarming = ManagementForFarmingPage.CreateFormGroup(fb);
    this.setupprojectcountChanges();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'doing': [null, Validators],
      'projectCount': [0, Validators],
      'details': fb.array([]),
    }, {
        validator: ManagementForFarmingPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementForFarmingPage');
    this.formData = this.navParams.get('formData');
    console.log("ก่อนส่ง: ", this.formData);

    if (this.formData.communityProject) {
      this.managementforfarming.setValue(this.formData.communityProject)
    }

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailManagementForFarming.forEach(it => it.submitRequest());
    this.count.forEach(it => it.submitRequest());
    this.formData.status = "done-all"
    this.formData.communityProject = this.managementforfarming.value;
    if (this.managementforfarming.valid) {
      console.log("ewfew");

      let key = this.formData._id
      this.storage.set(key, this.formData)

      let keyEA = "CL" + this.formData.ea
      this.storage.get(keyEA).then((data) => {
        let listBD = data
        if (listBD != null) {
          let fin = listBD.find(it => it._id == key)
          if (fin == null) {
            listBD.push(this.formData)
            this.storage.set(keyEA, listBD)
          } else {
            let index = listBD.findIndex(it => it._id == key)
            listBD.splice(index, 1, this.formData);
            // listBD.push(this.formData);
            this.storage.set(keyEA, listBD)
          }
        } else {
          listBD = []
          listBD.push(this.formData)
          this.storage.set(keyEA, listBD)
        }
      })
      console.log("หลังส่ง: ", this.formData);
      this.navCtrl.popToRoot();
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
