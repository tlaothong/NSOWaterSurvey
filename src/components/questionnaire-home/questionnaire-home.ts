import { Component } from '@angular/core';

@Component({
  selector: 'questionnaire-home',
  templateUrl: 'questionnaire-home.html'
})
export class QuestionnaireHomeComponent {

  public text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
