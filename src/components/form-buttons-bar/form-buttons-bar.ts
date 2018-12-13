import { Component } from '@angular/core';

@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  public text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
