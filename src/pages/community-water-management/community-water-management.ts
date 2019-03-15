import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
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
import { getStoreWorkEaOneRecord, getLoadCommunityForEdit, getIdEsWorkHomes } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getCommunitySample } from '../../states/community';
import { LoadCommunityForEdit } from '../../states/logging/logging.actions';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage';
import { subDistrictData } from '../../models/SubDistrictData';

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
  public id: string;

  private getIdHomes$ = this.store.select(getIdEsWorkHomes);
  private getIdHomes: any;
  public subDistrict: any;
  public MWA: boolean;
  public PWA: boolean;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private fb: FormBuilder, private storeCom: Store<CommunityState>, private store: Store<LoggingState>) {
    this.id = this.navParams.get('id')
    this.CommunityWaterManagement = CommunityWaterManagementPage.CreateFormGroup(fb);
    this.setupPublicWaterCountChanges();
    this.setupWaterServiceCountChanges();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'hasPublicWater': [null, Validators],
      'publicWaterCount': [0, Validators],
      'details': fb.array([]),
      'pwa': [null, Validators],
      'mwa': [null, Validators],
      'otherPlumbing': [null, Validators],
      'hasWaterService': [null, Validators],
      'waterServiceCount': [null, Validators],
      'waterServices': fb.array([]),
      'hasWaterTreatment': [null, Validators],
      'hasDisaster': [null, Validators],
      'disasters': NaturalDisasterComponent.CreateFormGroup(fb),
      'hasDisasterWarning': [null, Validators],
      'disasterWarningMethods': DisasterWarningMethodsComponent.CreateFormGroup(fb),
    }, {
        validator: CommunityWaterManagementPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    this.formDataCom = this.fb.group({
      '_id': [null],
      'ea': [null],
      'management': null,
      'communityProject': [null],
      'status': null
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

    this.getIdHomes$.subscribe(data => {
      this.getIdHomes = data
      console.log(this.getIdHomes);

      this.subDistrict = subDistrictData.find(it => it.codeSubDistrict == Number(this.getIdHomes));
      console.log(this.subDistrict);

      this.MWA = this.subDistrict.MWA;
      this.PWA = this.subDistrict.PWA;
      if (this.MWA == false) {
        this.CommunityWaterManagement.get('mwa').setValue(this.MWA);
      }
      if (this.PWA == false) {
        this.CommunityWaterManagement.get('pwa').setValue(this.PWA);
      }
    })
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

    if (this.CommunityWaterManagement.get('otherPlumbing').value == false) {
      this.CommunityWaterManagement.get('hasWaterService').setValue(null);
      this.CommunityWaterManagement.get('waterServiceCount').setValue(null);
    }
    if (this.CommunityWaterManagement.valid) {
      console.log("5555555555555555");
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
            listBD.splice(index, 1, this.formDataCom.value);
            // listBD.push(this.formDataCom.value);
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
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const hasPublicWater = c.get('hasPublicWater');
      const publicWaterCount = c.get('publicWaterCount');
      const pwa = c.get('pwa');
      const mwa = c.get('mwa');
      const otherPlumbing = c.get('otherPlumbing');
      const hasWaterService = c.get('hasWaterService');
      const waterServiceCount = c.get('waterServiceCount');
      const hasWaterTreatment = c.get('hasWaterTreatment');
      const hasDisaster = c.get('hasDisaster');
      const hasDisasterWarning = c.get('hasDisasterWarning');

      if (hasPublicWater.value == null) {
        return { 'hasPublicWater': true };
      }
      if ((hasPublicWater.value != null) && (hasPublicWater.value == true) && (publicWaterCount.value <= 0)) {
        return { 'publicWaterCount': true };
      }
      if ((hasPublicWater.value != null)
        && (hasPublicWater.value == true)
        && (publicWaterCount.value > 0)
        && (pwa.value == null)) {
        return { 'pwa': true };
      }
      if ((hasPublicWater.value != null)
        && (hasPublicWater.value == true)
        && (publicWaterCount.value > 0)
        && (mwa.value == null)) {
        return { 'mwa': true };
      }
      if ((hasPublicWater.value != null)
        && (hasPublicWater.value == true)
        && (publicWaterCount.value > 0)
        && (otherPlumbing.value == null)) {
        return { 'otherPlumbing': true };
      }
      if (hasPublicWater.value != null && hasPublicWater.value == false && pwa.value == null) {
        return { 'pwa': true };
      }
      if (hasPublicWater.value != null && hasPublicWater.value == false && mwa.value == null) {
        return { 'mwa': true };
      }
      if (hasPublicWater.value != null && hasPublicWater.value == false && otherPlumbing.value == null) {
        return { 'otherPlumbing': true };
      }

      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == null) {
        return { 'hasWaterService': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == true
        && waterServiceCount.value <= 0) {
        return { 'waterServiceCount': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == true
        && hasWaterService.value == true
        && waterServiceCount.value <= 0) {
        return { 'waterServiceCount': true };
      }
      if (hasWaterService.value == true && hasWaterTreatment.value == null) {
        return { 'hasWaterTreatment': true };
      }

      if (hasWaterService.value == true && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }

      if (hasWaterService.value == true && hasDisasterWarning.value == null) {
        return { 'hasDisasterWarning': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == true
        && hasWaterService.value == null) {
        return { 'hasWaterService': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == false
        && hasWaterTreatment.value == null) {
        return { 'hasWaterTreatment': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == false
        && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == false
        && hasDisasterWarning.value == null) {
        return { 'hasDisasterWarning': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == true
        && hasWaterService.value == false
        && hasWaterTreatment.value == null) {
        return { 'hasWaterTreatment': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == false
        && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == true
        && hasWaterService.value == false
        && hasWaterTreatment.value != null
        && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == false
        && hasWaterTreatment.value == null) {
        return { 'hasWaterTreatment': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == false
        && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == false
        && otherPlumbing.value == false
        && hasDisasterWarning.value == null) {
        return { 'hasDisasterWarning': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == true
        && hasWaterTreatment.value == null) {
        return { 'hasWaterTreatment': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == true
        && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == true
        && hasWaterService.value == true
        && hasDisasterWarning.value == null) {
        return { 'hasDisasterWarning': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == false
        && hasWaterTreatment.value == null) {
        return { 'hasWaterTreatment': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == false
        && hasDisaster.value == null) {
        return { 'hasDisaster': true };
      }
      if (hasPublicWater.value != null
        && hasPublicWater.value == true
        && otherPlumbing.value == false
        && hasDisasterWarning.value == null) {
        return { 'hasDisasterWarning': true };
      }
      // if (hasPublicWater.value != null && hasPublicWater.value == false && otherPlumbing.value == true && hasWaterService.value == true 
      //   && waterServiceCount.value >1 ) {
      //   return { 'waterServiceCount': true };
      // }
      // if (hasPublicWater.value != null && hasPublicWater.value == false && otherPlumbing.value == false) {
      //   return { 'hasWaterTreatment': true };
      // }
      // if (hasPublicWater.value != null && hasPublicWater.value == false && otherPlumbing.value == false) {
      //   return { 'hasWaterTreatment': true };
      // }
      return null;


    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.CommunityWaterManagement.get(name);
    if (name == 'hasPublicWater') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.hasPublicWater && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'publicWaterCount') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.publicWaterCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'pwa') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.pwa && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'mwa') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.mwa && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'otherPlumbing') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.otherPlumbing && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasWaterService') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.hasWaterService && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'waterServiceCount') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.waterServiceCount && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasWaterTreatment') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.hasWaterTreatment && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasDisaster') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.hasDisaster && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasDisasterWarning') {
      let ctrls = this.CommunityWaterManagement;
      return ctrls.errors && ctrls.errors.hasDisasterWarning && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
