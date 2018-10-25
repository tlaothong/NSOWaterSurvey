import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailWaterManagementComponent } from '../../components/detail-water-management/detail-water-management';
import { DetailOrgWaterSupplyComponent } from '../../components/detail-org-water-supply/detail-org-water-supply';

/**
 * Generated class for the CommunityWaterManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community-water-management',
  templateUrl: 'community-water-management.html',
})
export class CommunityWaterManagementPage {

  @ViewChildren(DetailWaterManagementComponent) private detailWaterManagement: DetailWaterManagementComponent[];
  @ViewChildren(DetailOrgWaterSupplyComponent) private detailOrgWaterSupply: DetailOrgWaterSupplyComponent[];

  public CommunityWaterManagement: FormGroup
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.CommunityWaterManagement = this.fb.group({
      'hasPublicWater': [null, Validators.required],
      'publicWaterCount': [null, Validators.required],
      'detail': fb.array([]),
      'pwa': [null, Validators.required],
      'mwa': [null, Validators.required],
      'otherPlumbing': [null, Validators.required],
      'hasWaterService': [null, Validators.required],
      'waterServiceCount': [null, Validators.required],
      'waterServices': fb.array([]),
      'hasWaterTreatment': [null, Validators.required],
      'hasDisaster': [null, Validators.required],
      'disasters': CommunityWaterManagementPage.CreateFormGroup1(fb),
      'hasDisasterWarning': [null, Validators.required],
      'disasterWarningMethods': CommunityWaterManagementPage.CreateFormGroup2(fb),
    });
    this.setupPublicWaterCountChanges();
    this.setupWaterServiceCountChanges();

  }


  public static CreateFormGroup1(fb: FormBuilder): FormGroup {
    return fb.group({
      'tsunami': [false, Validators.required],
      'landSlide': [false, Validators.required],
      'earthquake': [false, Validators.required],
      'cyclone': [false, Validators.required],
      'forestFire': [false, Validators.required],
      'drought': [false, Validators.required],
      'cold': [false, Validators.required],
      'epidemic': [false, Validators.required],
      'pest': [false, Validators.required],
      'epizootics': [false, Validators.required],

    }, {
        validator: CommunityWaterManagementPage.checkAnyOrOther1()
      });
  }

  public static checkAnyOrOther1(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const tsunami = c.get('tsunami');
      const landSlide = c.get('landSlide');
      const earthquake = c.get('earthquake');
      const cyclone = c.get('cyclone');
      const forestFire = c.get('forestFire');
      const drought = c.get('drought');
      const cold = c.get('cold');
      const epidemic = c.get('epidemic');
      const pest = c.get('pest');
      const epizootics = c.get('epizootics');




      if (!tsunami.value && !landSlide.value && !earthquake.value && !cyclone.value && !drought.value &&
        !cold.value && !epidemic.value && !pest.value && !forestFire.value && !epizootics.value) {
        return { 'anycheck': true };
      }

      return null;
    }
  }

  public static CreateFormGroup2(fb: FormBuilder): FormGroup {
    return fb.group({
      'governmentProcess': [false, Validators.required],
      'communityPlan': [false, Validators.required],
      'consultingService': [false, Validators.required],
      'hasOther': [false, Validators.required],
      'other': [null, Validators.required],
    }, {
        validator: CommunityWaterManagementPage.checkAnyOrOther2()
      });
  }


  public static checkAnyOrOther2(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const governmentProcess = c.get('governmentProcess');
      const communityPlan = c.get('communityPlan');
      const consultingService = c.get('consultingService');
      const hasOther = c.get('hasOther');
      const other = c.get('other');

      if (!governmentProcess.value && !communityPlan.value && !consultingService.value && !hasOther.value ) {
        return { 'anycheck': true };
      } else if (hasOther.value == true && (!other.value || other.value.trim() == '')) {
        return { 'other': true };
      }
      return null;
    }
  }

  private setupPublicWaterCountChanges() {
    const componentFormArray: string = "detail";
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
  }

  public isValid(name: string): boolean {
    var ctrl = this.CommunityWaterManagement.get(name);
    if (name == 'anycheck') {
      ctrl = this.CommunityWaterManagement;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    } else if (name == 'other') {
      return this.CommunityWaterManagement.errors && this.CommunityWaterManagement.errors.other && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityWaterManagementPage');
  }
}
