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

  private formDataCom$ = this.store.select(getLoadCommunityForEdit).pipe(map(s => s.communityProject));
  
  // private formData$ = this.store.select(getCommunitySample).pipe(map(s => s.communityProject));
  // private dataCommunuty$ = this.store.select(getSetCommunity);
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private DataStoreWorkEaOneRecord: any;

  private getSetCommunity$ = this.store.select(getSetCommunity);
  public getSetCommunity: any;
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

  public handleSubmit() {
    this.submitRequested = true;
    this.detailManagementForFarming.forEach(it => it.submitRequest());

    let formItem = this.fb.group({
      'management': [null],
      'communityProject': this.managementforfarming,
      'ea':[null],
      '_id': [null]
    });
    formItem.controls['ea'].setValue(this.DataStoreWorkEaOneRecord._id);
    formItem.controls['_id'].setValue(this.getSetCommunity._id);
    console.log(formItem.value);
    
    this.store.dispatch(new SetCommunity(formItem.value));
    this.navCtrl.popToRoot();
  }

  public isValid(name: string): boolean {
    var ctrl = this.managementforfarming.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementForFarmingPage');
    this.formDataCom$.subscribe(data => this.managementforfarming.setValue(data));
    this.getSetCommunity$.subscribe(data => {
      if (data != null) {
        this.getSetCommunity = data
      }
    });
    this.DataStoreWorkEaOneRecord$.subscribe(data => {
      if (data != null) {
        this.DataStoreWorkEaOneRecord = data;
      }
    });
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
