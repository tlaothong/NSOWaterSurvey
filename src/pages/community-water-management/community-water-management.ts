import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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

   CommunityWaterManagement: FormGroup
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
      'disasters': [null, Validators.required],
      'hasDisasterWarning': [null, Validators.required],
      'disasterWarningMethods': [null, Validators.required],
    });
    this.setupPublicWaterCountChanges();
    this.setupWaterServiceCountChanges();
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
      const componentFormArray: string = "waterService";
      const componentCount: string = "waterServiceCount";
  
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
            ctrl = DetailOrgWaterSupplyComponent.CreateFormGroup(this.fb);
          }
  
          field.push(ctrl);
        }
        this.CommunityWaterManagement.setControl(componentFormArray, field);
      };
  
      this.CommunityWaterManagement.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());
  
      onComponentCountChanges();
    }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailWaterManagement.forEach(it => it.submitRequest());
    this.detailOrgWaterSupply.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.CommunityWaterManagement.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityWaterManagementPage');
  }
}
