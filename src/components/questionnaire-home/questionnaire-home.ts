import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavParams } from 'ionic-angular';
import { getCurrentWorkingEA } from '../../states/bootup';
import { BootupState } from '../../states/bootup/bootup.reducer';

@Component({
  selector: 'questionnaire-home',
  templateUrl: 'questionnaire-home.html'
})

export class QuestionnaireHomeComponent {

  public currentEA$ = this.store.select(getCurrentWorkingEA);

  constructor(private store: Store<BootupState>) {
  }

  ionViewDidLoad() {
  }

}
