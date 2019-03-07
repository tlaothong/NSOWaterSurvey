import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailWaterManagementComponent } from '../../components/detail-water-management/detail-water-management';
import { DetailOrgWaterSupplyComponent } from '../../components/detail-org-water-supply/detail-org-water-supply';
import { NaturalDisasterComponent } from '../../components/natural-disaster/natural-disaster';
import { DisasterWarningMethodsComponent } from '../../components/disaster-warning-methods/disaster-warning-methods';
import { CommunityState } from '../../states/community/community.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SetCommunity } from '../../states/community/community.actions';
import { getStoreWorkEaOneRecord, getLoadCommunityForEdit } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getCommunitySample } from '../../states/community';
import { LoadCommunityForEdit } from '../../states/logging/logging.actions';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-community-water-management',
  templateUrl: 'community-water-management.html',
})
export class CommunityWaterManagementPage {

  @ViewChildren(NaturalDisasterComponent) private naturalDisaster: NaturalDisasterComponent[];
  @ViewChildren(DisasterWarningMethodsComponent) private disasterWarningMethods: DisasterWarningMethodsComponent[];
  @ViewChildren(DetailWaterManagementComponent) private detailWaterManagement: DetailWaterManagementComponent[];
  @ViewChildren(DetailOrgWaterSupplyComponent) private detailOrgWaterSupply: DetailOrgWaterSupplyComponent[];
  // @ViewChildren(ManagementForFarmingPage) private managementForFarming: ManagementForFarmingPage;

  public CommunityWaterManagement: FormGroup;
  private submitRequested: boolean;

  // private formData$ = this.store.select(getCommunitySample).pipe(map(s => s.management));
  private formDataCom$ = this.store.select(getLoadCommunityForEdit).pipe(map(s => s));
  private formDataCom: FormGroup;
  private DataStoreWorkEaOneRecord$ = this.store.select(getStoreWorkEaOneRecord);
  private DataStoreWorkEaOneRecord: any;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private fb: FormBuilder, private storeCom: Store<CommunityState>, private store: Store<LoggingState>) {
    this.CommunityWaterManagement = CommunityWaterManagementPage.CreateFormGroup(fb);
    this.setupPublicWaterCountChanges();
    this.setupWaterServiceCountChanges();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'hasPublicWater': [null, Validators.required],
      'publicWaterCount': [null, Validators.required],
      'details': fb.array([]),
      'pwa': [null, Validators.required],
      'mwa': [null, Validators.required],
      'otherPlumbing': [null, Validators.required],
      'hasWaterService': [null, Validators.required],
      'waterServiceCount': [null, Validators.required],
      'waterServices': fb.array([]),
      'hasWaterTreatment': [null, Validators.required],
      'hasDisaster': [null, Validators.required],
      'disasters': NaturalDisasterComponent.CreateFormGroup(fb),
      'hasDisasterWarning': [null, Validators.required],
      'disasterWarningMethods': DisasterWarningMethodsComponent.CreateFormGroup(fb),
    });
  }

  ionViewDidLoad() {
    this.formDataCom = this.fb.group({
      '_id': [null],
      'ea': [null],
      'management': null,
      'communityProject': [null],
    })
    this.formDataCom$.subscribe(data => {
      if (data != null) {
        this.formDataCom.setValue(data);
        this.CommunityWaterManagement.setValue(data.management);
      }
    });
    this.DataStoreWorkEaOneRecord$.subscribe(data => {
      if (data != null) {
        this.DataStoreWorkEaOneRecord = data;
      }
    });
    
    // this.formData$.subscribe(data => {
    //   if (data != null) {
    //     this.CommunityWaterManagement.setValue(data)
    //   }
    // });
  }

  private setupPublicWaterCountChanges() {
    const componentFormArray: string = "details";
    const componentCount: string = "publicWaterCount";

    var onComponentCountChanges = () => {
      var fieldFlowerCrop = (this.CommunityWaterManagement.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.CommunityWaterManagement.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fieldFlowerCrop.length) {
          const fld = fieldFlowerCrop[i];
          ctrl = fld;
        } else {
          ctrl = DetailWaterManagementComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.CommunityWaterManagement.setControl(componentFormArray, field);
    };

    this.CommunityWaterManagement.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupWaterServiceCountChanges() {
    const waterservicecomponentFormArray: string = "waterServices";
    const waterservicecomponentCount: string = "waterServiceCount";

    var onWaterServiceComponentCountChanges = () => {
      var waterServices = (this.CommunityWaterManagement.get(waterservicecomponentFormArray) as FormArray).controls || [];
      var waterServiceCount = this.CommunityWaterManagement.get(waterservicecomponentCount).value || 0;
      var waterService = this.fb.array([]);

      waterServiceCount = Math.max(0, waterServiceCount);

      for (let i = 0; i < waterServiceCount; i++) {
        var ctrl = null;
        if (i < waterServices.length) {
          const fld = waterServices[i];
          ctrl = fld;
        } else {
          ctrl = DetailOrgWaterSupplyComponent.CreateFormGroup(this.fb);
        }

        waterService.push(ctrl);
      }
      this.CommunityWaterManagement.setControl(waterservicecomponentFormArray, waterService);
    };

    this.CommunityWaterManagement.get(waterservicecomponentCount).valueChanges.subscribe(it => onWaterServiceComponentCountChanges());

    onWaterServiceComponentCountChanges();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailWaterManagement.forEach(it => it.submitRequest());
    this.detailOrgWaterSupply.forEach(it => it.submitRequest());
    this.naturalDisaster.forEach(it => it.submitRequest());
    this.disasterWarningMethods.forEach(it => it.submitRequest());
    if (this.formDataCom.get('_id').value == null) {
      this.formDataCom.get('_id').setValue(Guid.create().toString());
    }

    this.formDataCom.get('management').setValue(this.CommunityWaterManagement.value);
    this.formDataCom.get('ea').setValue(this.DataStoreWorkEaOneRecord._id);
    // this.store.dispatch(new SetCommunity(this.formDataCom.value));

    let key = this.formDataCom.get('_id').value
    this.storage.set(key, this.formDataCom.value)

    console.log(this.formDataCom.value);
    
    let keyEA = "CL" + this.formDataCom.get('ea').value
    this.storage.get(keyEA).then((data) => {
      console.log(data);
      
      let listBD = data
      if (listBD != null) {
        let fin = listBD.find(it => it._id == key)
        if (fin == null) {
          console.log("1");
          
          listBD.push(this.formDataCom.value)
          this.storage.set(keyEA, listBD)
        } else {
          console.log("2");
          let index = listBD.findIndex(it => it._id == key)
          listBD.splice(index, 1);
          listBD.push(this.formDataCom.value);
          this.storage.set(keyEA, listBD)
        }
      } else {
        console.log("3");
        listBD = []
        listBD.push(this.formDataCom.value)
        this.storage.set(keyEA, listBD)
      }
    })

    this.navCtrl.push("ManagementForFarmingPage", { formData: this.formDataCom.value });
  }

  public isValid(name: string): boolean {
    var ctrl = this.CommunityWaterManagement.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
