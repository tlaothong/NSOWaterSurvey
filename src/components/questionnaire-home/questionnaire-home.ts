import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LoggingState } from '../../states/logging/logging.reducer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'questionnaire-home',
  templateUrl: 'questionnaire-home.html'
})

export class QuestionnaireHomeComponent {
  public data: any;
  public str: string;
  constructor(private fb: FormBuilder, public navParams: NavParams, private store: Store<LoggingState>) {

    this.data = this.navParams.get('data');
    this.str = this.navParams.get('str');
  }

  ionViewDidLoad() {

  }

}
