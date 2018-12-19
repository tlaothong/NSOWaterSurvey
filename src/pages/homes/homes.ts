import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { QuestionnaireHomeComponent } from '../../components/questionnaire-home/questionnaire-home';
import { LoggingState } from '../../states/logging/logging.reducer';
import { Store } from '@ngrx/store';
import { getWorkEAbyIdEA } from '../../states/logging';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-homes',
  templateUrl: 'homes.html',
})
export class HomesPage {
  f: FormGroup;
  office: string = "building";
  private formDataWorkEA$ = this.store.select(getWorkEAbyIdEA).pipe(map(s => s));
  
  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private store: Store<LoggingState>) {
    this.f = this.fb.group({
      'idEA': [null],
      'idUser': [null],
      'province': [null],
      'district': [null],
      'subDistrict': [null],
      'administrative': [null],
      'municipalities': [null]
    });
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireHomeComponent, { nav: this.navCtrl });
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    this.formDataWorkEA$.subscribe(data => {
      if (data != null) {
        this.f.setValue(data);
      }
    });
  }

  goBuildingInfo() {
    this.navCtrl.push("BuildingInformation1Page")
  }
}
