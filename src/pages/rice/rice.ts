import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs/operators';

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
  ricePlant: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.ricePlant = this.fb.group({
      
        'doing': [null ,Validators.required],
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.ricePlant.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  private readonly outerGroup: string = "fields";
  private readonly areaUsedName: string = "areaUsed";
  private readonly areaUsed: string = "fields.areaUsed";
  private readonly areaCount: string = "fields.plantingCount";
  private readonly areaOption: string = "fields.plantingArea";
  
  private initPlantingAreaChanges() {
    const areaCount = this.ricePlant.get(this.areaCount);
    this.ricePlant.get(this.areaOption).valueChanges.pipe(
      combineLatest(areaCount.valueChanges)
    ).subscribe(it => this.onPlantingAreaChanges());

    this.onPlantingAreaChanges();
  }

  public onPlantingAreaChanges() {
    var fields = this.ricePlant.get(this.areaUsed).value || [];
    var fieldCount = this.ricePlant.get(this.areaCount).value || 0;
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
        'rai': [null, [ Validators.required, Validators.min(0) ]],
        'ngan': [null, [ Validators.required, Validators.min(0), Validators.max(3) ]],
        'sqWa': [null, [ Validators.required, Validators.min(0), Validators.max(99) ]],
      });
      fg.setValue(ctrl);
      farr.push(fg);
    }
    // this.ricePlant.setControl(this.areaUsed, farr);
    // For nested form use this instead
    (this.ricePlant.get(this.outerGroup) as FormGroup).setControl(this.areaUsedName, farr);
  }

}
