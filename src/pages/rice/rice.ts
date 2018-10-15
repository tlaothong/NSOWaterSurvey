import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { combineLatest } from 'rxjs/operators';
import { FieldAreaComponent } from '../../components/field-area/field-area';
import { FieldFarmingComponent } from '../../components/field-farming/field-farming';

/**
 * Generated class for the RicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {

  private submitRequested: boolean;
  f: FormGroup;

  @ViewChildren(FieldFarmingComponent) private fieldFarmings: FieldFarmingComponent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'doing': [null, Validators.required],
      'fieldCount': ['', Validators.required],
      'fields': this.fb.array([]),
    });

    this.setupFieldCountChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fieldFarmings.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupFieldCountChanges() {
    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.f.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.f.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = FieldFarmingComponent.CreateFormGroup(this.fb);
        }

        farr.push(ctrl);
      }
      this.f.setControl(componentFormArray, farr);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }


}
