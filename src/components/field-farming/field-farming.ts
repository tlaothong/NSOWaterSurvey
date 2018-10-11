import { Input, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs/operators';
import { FieldAreaComponent } from '../field-area/field-area';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { FieldRiceHarvestComponent } from '../field-rice-harvest/field-rice-harvest';

/**
 * Generated class for the FieldFarmingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'field-farming',
  templateUrl: 'field-farming.html'
})
export class FieldFarmingComponent implements ISubmitRequestable {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello FieldFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = FieldFarmingComponent.CreateFormGroup(this.fb);
    // this.FormItem = this.fb.group({

    //   'doing': ['', Validators.required],
    //   'fieldCount': ['', Validators.required],
    //   'fields': this.fb.group({
    //     'location': this.fb.group({
    //       'province': ['', Validators.required],
    //       'district': ['', Validators.required],
    //       'subDistrict': ['', Validators.required]
    //     }),
    //     'area': this.fb.group({
    //       'rai': ['', Validators.required],
    //       'ngan': ['', Validators.required],
    //       'sqWa': ['', Validators.required]
    //     }),
    //     'plantingCount': ['', Validators.required],
    //     'plantingArea': ['', Validators.required],
    //     'areaUsed': this.fb.array([])
    //   }),
    //   'plantingFromMonth': ['', Validators.required],
    //   'plantingThruMonth': ['', Validators.required],
    //   'waterFillingCount': ['', Validators.required],
    //   'waterHigh': ['', Validators.required],
    //   'irrigationField': ['', Validators.required],
    //   'waterSources': this.fb.group({
    //     'plumbing': ['', Validators.required],
    //     'underGround': ['', Validators.required],
    //     'pool': ['', Validators.required],
    //     'river': ['', Validators.required],
    //     'irrigation': ['', Validators.required],
    //     'rain': ['', Validators.required],
    //     'buying': ['', Validators.required],
    //     'rainingAsIs': ['', Validators.required],
    //     'other': ['', Validators.required],
    //   })

    // });

    this.setupPlantingAreas();
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'location': fb.group({
        'province': ['', Validators.required],
        'district': ['', Validators.required],
        'subDistrict': ['', Validators.required]
      }),
      'area': FieldAreaComponent.CreateFormGroup(fb),
      'plantingCount': ['', Validators.required],
      'plantingArea': ['', Validators.required],
      'areaUsed': fb.array([]),
      'harvests': fb.array([FieldRiceHarvestComponent.CreateFormGroup(fb)]),
      'irrigationField': ['', Validators.required],
      'waterSources': fb.group({
        'plumbing': ['', Validators.required],
        'underGround': ['', Validators.required],
        'pool': ['', Validators.required],
        'river': ['', Validators.required],
        'irrigation': ['', Validators.required],
        'rain': ['', Validators.required],
        'buying': ['', Validators.required],
        'rainingAsIs': ['', Validators.required],
        'other': ['', Validators.required],
      })
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


  private setupPlantingAreas() {    
    const areaUsed: string = "areaUsed";
    const areaCount: string = "plantingCount";
    const areaOption: string = "plantingArea";

    var onPlantingAreaChanges = () => {
      var fields = this.FormItem.get(areaUsed).value || [];
      var fieldCount = this.FormItem.get(areaCount).value || 0;
      var farr = this.fb.array([]);

      fieldCount = Math.max(1, fieldCount);

      for (let i = 0; i < fieldCount; i++) {
        var ctrl = null;
        if (i < fields.length) {
          const fld = fields[i];
          ctrl = fld;
        } else {
          ctrl = { 'rai': null, 'ngan': null, 'sqWa': null };
        }

        const fg = this.fb.group({
          'rai': [null, [Validators.required, Validators.min(0)]],
          'ngan': [null, [Validators.required, Validators.min(0), Validators.max(3)]],
          'sqWa': [null, [Validators.required, Validators.min(0), Validators.max(99)]],
        });
        fg.setValue(ctrl);
        farr.push(fg);
      }
      this.FormItem.setControl(areaUsed, farr);
    };

    const areaCountCtrl = this.FormItem.get(areaCount);
    this.FormItem.get(areaOption).valueChanges.pipe(
      combineLatest(areaCountCtrl.valueChanges)
    ).subscribe(it => onPlantingAreaChanges());
  }

}
