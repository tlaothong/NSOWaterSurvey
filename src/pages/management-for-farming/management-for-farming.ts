import { CommunityState } from './../../states/community/community.reducer';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DetailManagementForFarmingComponent } from '../../components/detail-management-for-farming/detail-management-for-farming';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getCommunitySample, getSetCommunity } from '../../states/community';
import { SetNextPageDirection } from '../../states/household/household.actions';
import { CommunityWaterManagementPage } from '../community-water-management/community-water-management';
import { SetCommunity } from '../../states/community/community.actions';
import { getStoreWorkEaOneRecord, getLoadCommunityForEdit } from '../../states/logging';

@IonicPage()
@Component({
  selector: 'page-management-for-farming',
  templateUrl: 'management-for-farming.html',
})
export class ManagementForFarmingPage {

  @ViewChildren(DetailManagementForFarmingComponent) private detailManagementForFarming: DetailManagementForFarmingComponent[];
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private store: Store<CommunityState>) {
    this.managementforfarming = ManagementForFarmingPage.CreateFormGroup(fb);
    this.setupprojectcountChanges();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'doing': [null, Validators.required],
      'projectCount': [null, Validators.required],
      'details': fb.array([]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementForFarmingPage');
    this.formData = this.navParams.get('formData');
    console.log("ก่อนส่ง: ", this.formData);

    if (this.formData.communityProject) {
      this.managementforfarming.setValue(this.formData.communityProject)
    }

    // this.getSetCommunity = this.fb.group({
    //   '_id': [null],
    //   'ea': [null],
    //   'management': [null],
    //   'communityProject': [null],
    // })
    // this.getSetCommunity$.subscribe(data => {
    //   if (data != null) {
    //     this.getSetCommunity.setValue(data);
    //     console.log("ก่อนส่ง: ", this.getSetCommunity.value);
    //     let communityProject = this.getSetCommunity.get('communityProject').value;
    //     if (communityProject) {
    //       this.managementforfarming.setValue(communityProject)
    //     }
    //   }
    // });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailManagementForFarming.forEach(it => it.submitRequest());

    // this.getSetCommunity.get('communityProject').setValue(this.managementforfarming.value);
    this.formData.communityProject = this.managementforfarming.value;
    this.store.dispatch(new SetCommunity(this.formData));
    console.log("หลังส่ง: ", this.formData);
    this.navCtrl.popToRoot();
  }

  public isValid(name: string): boolean {
    var ctrl = this.managementforfarming.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
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
