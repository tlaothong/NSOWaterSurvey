import { Component, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { PoolUsageComponent } from '../../components/pool-usage/pool-usage';

/**
 * Generated class for the PoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {

  f: FormGroup;
  @ViewChildren(PoolUsageComponent) private poolUsage: PoolUsageComponent[];
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      'isExist': [null, Validators.required],
      'poolCount': [null, Validators.required],
      'poolEqual': [null, Validators.required],
      'poolSize': this.fb.group({
        'shape': this.fb.group({
          'area': [''],
          'rectangle': [''],
          'circle': [''],
        }),
        'area': this.fb.group({
          'rai': [''],
          'ngan': [''],
          'sqWa': [''],
        }),
        'depth': [''],
        'rectangle': this.fb.group({
          'width': [''],
          'length': [''],
        }),
        'diameter': ['']
      }),
      'poolCountUsage': [null, Validators.required],
      'poolUsage': this.fb.array([]),
      // 'poolUsage': PoolUsageComponent.CreateFormGroup(fb),

      'waterActivity': this.fb.group({
        'drink': [''],
        'plant': [''],
        'farm': [''],
        'agriculture': [''],
        'product': [''],
        'service': [''],
      }),
      'waterProblem': this.fb.group({
        'hasProblem': [''],
        'problem': this.fb.group({
          'turbidWater': [''],
          'saltWater': [''],
          'smell': [''],
          'filmOfOil': [''],
          'fogWater': [''],
          'hardWater': [''],
        })
      })

    });

    this.setupPumpCountChanges()
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad PoolPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.poolUsage.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setupPumpCountChanges() {
    const componentFormArray: string = "poolUsage";
    const componentCount: string = "poolCount";

    var onComponentCountChanges = () => {
      var pumps = (this.f.get(componentFormArray) as FormArray).controls || [];
      var pumpCount = this.f.get(componentCount).value || 0;
      var pump = this.fb.array([]);

      pumpCount = Math.max(0, pumpCount);

      for (let i = 0; i < pumpCount; i++) {
        var ctrl = null;
        if (i < pumps.length) {
          const fld = pumps[i];
          ctrl = fld;
        } else {
          ctrl = PoolUsageComponent.CreateFormGroup(this.fb);
        }

        pump.push(ctrl);
      }
      this.f.setControl(componentFormArray, pump);
    };

    this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }


}
