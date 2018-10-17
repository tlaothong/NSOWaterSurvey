import { Component, Input, ViewChildren, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FrogFarmingComponent } from '../frog-farming/frog-farming';
import { PoolAreaComponent } from '../pool-area/pool-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { WaterSources9Component } from '../water-sources9/water-sources9';

/**
 * Generated class for the CrocodileFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crocodile-farming',
  templateUrl: 'crocodile-farming.html'
})
export class CrocodileFarmingComponent implements AfterViewInit ,ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input("headline") public text: string;
  @Input('no') no :string;

  @ViewChildren(PoolAreaComponent) private poolArea: PoolAreaComponent[];
  
  @ViewChildren(WaterSources9Component) private waterSources9 : WaterSources9Component[];

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello CrocodileFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = CrocodileFarmingComponent.CreateFormGroup(fb);
  }

  
  ngAfterViewInit(): void {
    this.setupFieldCountChanges()
    
  }
  
  
  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      "doing": [null, Validators.required],
      "depression": [false, Validators.required],
      "hasOther": [false, Validators.required],
      "other": ['', Validators.required],
      "fieldCount": [null, Validators.required],
      "fieldsAreSameSize": [null, Validators.required],
      
      "fields": fb.array([]),
      
      "animalsCount": [null, Validators.required],
      'waterSources': WaterSources9Component.CreateFormGroup(fb)
      
      
    });
    
  }
  
  submitRequest() {
    this.submitRequested = true;
    this.poolArea.forEach(it => it.submitRequest());
    this.waterSources9.forEach(it=>it.submitRequest());
    
  }

  
  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
  

  private setupFieldCountChanges() {

    const componentFormArray: string = "fields";
    const componentCount: string = "fieldCount";

    var onComponentCountChanges = () => {
      var fields = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
      var fieldCount = this.FormItem.get(componentCount).value || 0;
      var field = this.fb.array([]);

      fieldCount = Math.max(0, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = PoolAreaComponent.CreateFormGroup(this.fb);
        }

        field.push(ctrl);
      }
      this.FormItem.setControl(componentFormArray, field);
    };

    this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }








}
