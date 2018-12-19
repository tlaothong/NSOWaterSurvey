import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getWorkEAbyIdEA } from '../../states/logging';
import { LoggingState } from '../../states/logging/logging.reducer';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'questionnaire-home',
  templateUrl: 'questionnaire-home.html'
})

export class QuestionnaireHomeComponent {
  private fg: FormGroup;
  private formDataWorkEA$ = this.store.select(getWorkEAbyIdEA).pipe(map(s => s));

  constructor(private fb: FormBuilder, private store: Store<LoggingState>) {
    this.fg = this.fb.group({
      'idEA': [null],
      'idUser': [null],
      'province': [null],
      'district': [null],
      'subDistrict': [null],
      'administrative': [null],
      'municipalities': [null]
    });
  }

  ionViewDidLoad() {
    this.formDataWorkEA$.subscribe(data => {
      if (data != null) {
        this.fg.setValue(data);
      }
    });
  }

}
