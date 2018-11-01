import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { WaterSources8BComponent } from '../../components/water-sources8-b/water-sources8-b';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Commercial',
  templateUrl: 'Commercial.html',
})
export class CommercialPage {

  @ViewChildren(TableCheckItemCountComponent) private tableCheckItemCount: TableCheckItemCountComponent[];
  @ViewChildren(WaterSources8BComponent) private waterSources8B: WaterSources8BComponent[];
  private f: FormGroup;
  private submitRequested: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'serviceType': [null, Validators.required],
      'questionForAcademy': this.fb.array([
        TableCheckItemCountComponent.CreateFormGroup(this.fb),
        TableCheckItemCountComponent.CreateFormGroup(this.fb),
        TableCheckItemCountComponent.CreateFormGroup(this.fb),
        TableCheckItemCountComponent.CreateFormGroup(this.fb),
        TableCheckItemCountComponent.CreateFormGroup(this.fb),
         TableCheckItemCountComponent.CreateFormGroup(this.fb),
        ]),
        'personnelCount': [null, Validators.required],
      'hotelsAndResorts': this.fb.group({
        'roomCount': [null, Validators.required],
        'personnelCount': [null, Validators.required],
      }),
      'hospital': this.fb.group({
        'bedCount': [null, Validators.required],
        'personnelCount': [null, Validators.required],
      }),
      'building': this.fb.group({
        'roomCount': [null, Validators.required],
        'occupiedRoomCount': [null, Validators.required],
        'personnelCount': [null, Validators.required],
      }),
      'religious': this.fb.group({
        'peopleCount': [null, Validators.required],
      }),
      'otherBuilding': this.fb.group({
        'personnelCount': [null, Validators.required],
      }),
      'waterSources': WaterSources8BComponent.CreateFormGroup(this.fb),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
    this.waterSources8B.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
