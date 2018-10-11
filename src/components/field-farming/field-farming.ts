import { Input , Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs/operators';

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
export class FieldFarmingComponent {

  @Input("headline") public text: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(public fb: FormBuilder) {
    console.log('Hello FieldFarmingComponent Component');
    this.text = 'Hello World';

    this.FormItem = this.fb.group({
      
      'doing': ['',Validators.required],
      'fieldCount': ['',Validators.required],
      'fields': this.fb.group({
        'location': this.fb.group({
          'province': ['',Validators.required],
          'district':['',Validators.required],
          'subDistrict':['',Validators.required]
        }),
        'area': this.fb.group({
          'rai': ['',Validators.required],
          'ngan': ['',Validators.required],
          'sqWa': ['',Validators.required]
        }),
        'plantingCount': ['',Validators.required],
        'plantingArea': ['',Validators.required],
        'areaUsed': this.fb.array([])
      }),
      'plantingFromMonth': ['',Validators.required],
      'plantingThruMonth': ['',Validators.required],
      'waterFillingCount': ['',Validators.required],
      'waterHigh': ['',Validators.required],
      'irrigationField': ['',Validators.required],
      'waterSources': this.fb.group({
        'plumbing': ['',Validators.required],
        'underGround': ['',Validators.required],
        'pool': ['',Validators.required],
        'river': ['',Validators.required],
        'irrigation': ['',Validators.required],
        'rain': ['',Validators.required],
        'buying': ['',Validators.required],
        'rainingAsIs': ['',Validators.required],
        'other': ['',Validators.required],
      })
  
  });

    this.initPlantingAreaChanges();
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


  private readonly outerGroup: string = "fields";
  private readonly areaUsedName: string = "areaUsed";
  private readonly areaUsed: string = "fields.areaUsed";
  private readonly areaCount: string = "fields.plantingCount";
  private readonly areaOption: string = "fields.plantingArea";

  private initPlantingAreaChanges() {
    const areaCount = this.FormItem.get(this.areaCount);
    this.FormItem.get(this.areaOption).valueChanges.pipe(
      combineLatest(areaCount.valueChanges)
    ).subscribe(it => this.onPlantingAreaChanges());

    this.onPlantingAreaChanges();
  }

  public onPlantingAreaChanges() {
    var fields = this.FormItem.get(this.areaUsed).value || [];
    var fieldCount = this.FormItem.get(this.areaCount).value || 0;
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
    // this.FormItem.setControl(this.areaUsed, farr);
    // For nested form use this instead
    (this.FormItem.get(this.outerGroup) as FormGroup).setControl(this.areaUsedName, farr);
  }

}
