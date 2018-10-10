import { Component } from '@angular/core';

/**
 * Generated class for the QuestionnaireMenuPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'questionnaire-menu-popover',
  templateUrl: 'questionnaire-menu-popover.html'
})
export class QuestionnaireMenuPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello QuestionnaireMenuPopoverComponent Component');
    this.text = 'Hello World';
  }

}
