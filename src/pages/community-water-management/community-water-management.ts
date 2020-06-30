import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailWaterManagementComponent } from '../../components/detail-water-management/detail-water-management';
import { DetailOrgWaterSupplyComponent } from '../../components/detail-org-water-supply/detail-org-water-supply';
import { NaturalDisasterComponent } from '../../components/natural-disaster/natural-disaster';
import { DisasterWarningMethodsComponent } from '../../components/disaster-warning-methods/disaster-warning-methods';
import { CommunityState } from '../../states/community/community.reducer';
import { Store } from '@ngrx/store';
import { LoggingState } from '../../states/logging/logging.reducer';
import { getCommunitySample } from '../../states/community';
import { AppStateProvider } from '../../providers/app-state/app-state';
import { CountComponent } from '../../components/count/count';
import { SaveCommunity } from '../../states/community/community.actions';
import { SubDistrict, subDistrictData } from '../../models/SubDistrictData';

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
  @ViewChildren(CountComponent) private count: CountComponent[];

  public CommunityWaterManagement: FormGroup;
  private submitRequested: boolean;

  private formData$ = this.store.select(getCommunitySample);
  private formDataCom: FormGroup;
  public id: string;
  public subDistrict: any;
  public subDistrictData: SubDistrict[] = subDistrictData;
  public MWA: boolean;
  public PWA: boolean;
  public isCheckWarningBox: boolean;
  public isCommunity: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public navParams: NavParams, private fb: FormBuilder, private storeCom: Store<CommunityState>,
    private store: Store<LoggingState>, private appState: AppStateProvider) {
    this.id = this.navParams.get('id');
    this.formDataCom = CommunityWaterManagementPage.CreateMainFormGroup(fb);
    this.CommunityWaterManagement = CommunityWaterManagementPage.CreateFormGroup(fb);
    this.setupPublicWaterCountChanges();
    this.setupWaterServiceCountChanges();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'vil': [null, Validators.required],
      'vil_name': [null, Validators.required],
      'hasPublicWater': [null, Validators.required],
      'publicWaterCount': [0, Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])],
      'details': fb.array([]),
      'pwa': [null, Validators.required],
      'mwa': [null, Validators.required],
      'otherPlumbing': [null, Validators.required],
      'hasWaterService': [null, Validators.required],
      'waterServiceCount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'waterServices': fb.array([]),
      'hasWaterTreatment': [null, Validators.required],
      'hasDisaster': [null, Validators.required],
      'disasters': NaturalDisasterComponent.CreateFormGroup(fb),
      'hasDisasterWarning': [null, Validators.required],
      'disasterWarningMethods': DisasterWarningMethodsComponent.CreateFormGroup(fb),
    }, {
      validator: CommunityWaterManagementPage.checkAnyOrOther()
    });
  }

  public static CreateMainFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      '_id': null,
      'ea': null,
      'management': null,
      'communityProject': null,
      'status': null
    });
  };

  ionViewDidLoad() {
    this.setParamiterValue();


  }

  setParamiterValue() {
    var cwtamptam = this.appState.eaCode;
    switch (cwtamptam.length) {
      case 6:
        this.subDistrict = this.subDistrictData.find(it => it.codeSubDistrict == cwtamptam);
        break;
      case 4:
        this.subDistrict = this.subDistrictData.filter(it => it.codeDistrict == cwtamptam)[0]  ;
        break;
      case 2:
        this.subDistrict = this.subDistrictData.filter(it => it.CWT == cwtamptam)[0]  ;
        break;
      case 1:
        this.subDistrict = this.subDistrictData.find(it => it.codeSubDistrict == cwtamptam);
        break;
      default:
        break;
    }
    // var cwtamptam = this.appState.eaCode.substr(1, 6);
    this.MWA = this.subDistrict && this.subDistrict.MWA;
    this.PWA = this.subDistrict && this.subDistrict.PWA;
    if (this.MWA == false) {
      this.CommunityWaterManagement.get('mwa').setValue(this.MWA);
    }
    if (this.PWA == false) {
      this.CommunityWaterManagement.get('pwa').setValue(this.PWA);
    }
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
    this.count.forEach(it => it.submitRequest());
    this.disasterWarningMethods.forEach(it => it.submitRequest());

    if (this.appState.communityData != null && this.appState.communityId != null) {
      this.formDataCom.setValue(this.appState.communityData);
    }

    if (this.formDataCom.get('_id').value == null || this.formDataCom.get('_id').value == '') {
      this.formDataCom.get('_id').setValue(this.appState.generateId('com1v'));
    }

    this.formDataCom.get('management').setValue(this.CommunityWaterManagement.value);
    this.formDataCom.get('ea').setValue(this.appState.eaCode);
    this.formDataCom.get('status').setValue("pause");

    if (this.CommunityWaterManagement.get('otherPlumbing').value == false) {
      this.CommunityWaterManagement.get('hasWaterService').setValue(null);
      this.CommunityWaterManagement.get('waterServiceCount').setValue(null);
    }

    this.isCheckWarningBox = this.checkValid();

    if (this.checkValid()) {

      this.storeCom.dispatch(new SaveCommunity(this.formDataCom.value));

      this.navCtrl.push("ManagementForFarmingPage");
    }
  }

  public checkValid(): boolean {
    return this.CommunityWaterManagement.get('vil').valid
      && this.CommunityWaterManagement.get('vil_name').valid
      && this.CommunityWaterManagement.get('hasPublicWater').valid
      && this.checkPublicWater()
      && this.checkHasDisaster()
      && this.checkHasDisasterWarning()
      && this.checkWater()
      && this.checkHas()
  }

  public checkPublicWater(): boolean {
    let isCheckDetail = this.detailWaterManagement.find(it => it.FormItem.invalid) ? false : true;
    return (this.CommunityWaterManagement.get('hasPublicWater').value) ? isCheckDetail : true;
  }

  public checkWater(): boolean {
    if (this.MWA) {
      return this.CommunityWaterManagement.get('mwa').valid
        && this.CommunityWaterManagement.get('otherPlumbing').valid
        && this.checkOtherWater();
    }
    if (this.PWA) {
      return this.CommunityWaterManagement.get('pwa').valid
        && this.CommunityWaterManagement.get('otherPlumbing').valid
        && this.checkOtherWater();
    }
  }

  public checkOtherWater(): boolean {
    let invalid = this.detailOrgWaterSupply.find(it => it.FormItem.invalid);
    return (this.CommunityWaterManagement.get('otherPlumbing').value == true) ?
      (this.CommunityWaterManagement.get('hasWaterService').value) ?
        this.CommunityWaterManagement.get('waterServiceCount').value > 0 && !invalid : true : true;
  }

  private checkHas(): boolean {
    return this.CommunityWaterManagement.get('hasWaterTreatment').valid
      && this.CommunityWaterManagement.get('hasDisaster').valid
      && this.CommunityWaterManagement.get('hasDisasterWarning').valid;
  }

  public checkHasDisaster(): boolean {
    let invalid = this.naturalDisaster.find(it => it.FormItem.invalid);
    return (this.CommunityWaterManagement.get('hasDisaster').value) ? !invalid : true;
  }

  public checkHasDisasterWarning(): boolean {
    let invalid = this.disasterWarningMethods.find(it => it.FormItem.invalid)
    return (this.CommunityWaterManagement.get('hasDisasterWarning').value) ? !invalid : true;
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
