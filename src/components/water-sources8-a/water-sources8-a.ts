import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the WaterSources8AComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'water-sources8-a',
  templateUrl: 'water-sources8-a.html'
})
export class WaterSources8AComponent {

  @Input('headline') public text: string;
  @Input() public FormItem: FormGroup;

  constructor() {
    console.log('Hello WaterSources8AComponent Component');
    this.text = 'Hello World';
  }

  public hasOtherItem() : Observable<boolean> {
    return this.FormItem.get('hasOther').valueChanges;
  }

}
