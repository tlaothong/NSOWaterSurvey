import { Component, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { TableCheckItemCountComponent } from '../../components/table-check-item-count/table-check-item-count';
import { combineLatest } from 'rxjs/operators';

/**
 * Generated class for the ZeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zero',
  templateUrl: 'zero.html',
})
export class ZeroPage {

  public f: FormGroup;

  public headtext = "กำหนดมาจาก code ห้ามใช้แบบนี้ในตอนนี้";

  private submitRequested: boolean;
  @ViewChild('ws8') ws8: ISubmitRequestable;
  @ViewChildren(TableCheckItemCountComponent) private checkedItems: ISubmitRequestable[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modalCtrl: ModalController, private fb: FormBuilder) {
    this.f = this.fb.group({
      'name': [null, Validators.required],
      'fieldCount': 0,
      'fieldUsage': null,
      'fieldAreas': null,
      'preSchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'kindergarten': this.fb.group({
        'hasItem': false,
        'itemCount': [null, Validators.required]
      }),
      'secondarySchool': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'vocational': this.fb.group({
        'hasItem': false,
        'itemCount': null
      }),
      'waterSources': this.fb.group({
        'hasOther': false,
        'other': [null, Validators.required]
      })
    });

    const fieldCount = this.f.get('fieldCount');
    this.f.get('fieldUsage').valueChanges.pipe(
      combineLatest(fieldCount.valueChanges)
    ).subscribe(it => this.onFieldUsageChanges());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZeroPage');
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.ws8.submitRequest();
    this.checkedItems.forEach(it => it.submitRequest());
  }

  public isValid(name: string) : boolean {
    var ctrl = this.f.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public onFieldUsageChanges() {
    var fields = this.f.get('fieldAreas').value || [];
    var fieldCount = this.f.get('fieldCount').value || 0;
    var farr = this.fb.array([]);

    for (let i = 0; i < fieldCount; i++) {
      var ctrl = null;
      if (i < fields.length) {
        const fld = fields[i];
        ctrl = fld;
      } else {
        ctrl = {};
      }
      farr.push(this.fb.group(ctrl));
    }
    this.f.setControl('fieldAreas', farr);
  }

}
