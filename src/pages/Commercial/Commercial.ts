import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';

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
  private f: FormGroup;
  private submitRequested: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'serviceType': [null, Validators.required],
      'questionForAcademy': this.fb.group({
        'preSchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'kindergarten': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'primarySchool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'highschool': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'vocational': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'higherEducation': TableCheckItemCountComponent.CreateFormGroup(this.fb),
        'personnelCount': [null, Validators.required],
      }),
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
      'waterSources': this.fb.group({
        'plumbing': [null, Validators.required],
        'underGround': [null, Validators.required],
        'pool': [null, Validators.required],
        'river': [null, Validators.required],
        'irrigation': [null, Validators.required],
        'rain': [null, Validators.required],
        'buying': [null, Validators.required],
        'rainingAsIs': [null, Validators.required],
        'hasOther': [null, Validators.required],
        'other': [null, Validators.required],
      }),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommercialPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.tableCheckItemCount.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
