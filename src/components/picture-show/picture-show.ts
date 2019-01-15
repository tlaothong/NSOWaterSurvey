import { Component } from '@angular/core';

/**
 * Generated class for the PictureShowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'picture-show',
  templateUrl: 'picture-show.html'
})
export class PictureShowComponent {

  text: string;

  constructor() {
    console.log('Hello PictureShowComponent Component');
    this.text = 'Hello World';
  }

}
