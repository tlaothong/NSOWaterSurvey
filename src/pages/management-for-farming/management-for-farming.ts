import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DetailManagementForFarmingComponent } from '../../components/detail-management-for-farming/detail-management-for-farming';

/**
 * Generated class for the ManagementForFarmingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-management-for-farming',
  templateUrl: 'management-for-farming.html',
})
export class ManagementForFarmingPage {

  @ViewChildren(DetailManagementForFarmingComponent) private  detailManagementForFarming: DetailManagementForFarmingComponent[];

  public managementforfarming: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.managementforfarming = this.fb.group({
  
        'doing': [null, Validators.required],
        'projectcount': [null, Validators.required],
        'details': fb.array([]),
     
    });
    this.setupprojectcountChanges();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.detailManagementForFarming.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.managementforfarming.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementForFarmingPage');
  }

  private setupprojectcountChanges() {
    const componentFormArray: string = "details";
    const componentCount: string = "projectcount";

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
