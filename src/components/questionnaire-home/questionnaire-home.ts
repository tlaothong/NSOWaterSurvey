import { Component } from '@angular/core';

/**
 * Generated class for the QuestionnaireHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'questionnaire-home',
  templateUrl: 'questionnaire-home.html'
})
export class QuestionnaireHomeComponent {

  text: string;

  constructor() {
    console.log('Hello QuestionnaireHomeComponent Component');
    this.text = 'Hello World';
  }

}
