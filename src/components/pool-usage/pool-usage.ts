import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

/**
 * Generated class for the PoolUsageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pool-usage',
  templateUrl: 'pool-usage.html'
})
export class PoolUsageComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;


  private submitRequested: boolean;

  @Input("headline") public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.FormItem = this.fb.group({
      'isPoolUsage' : ['',Validators.required],
      'cubicMeterPerMonth': [null, Validators.required],
      // 'unknowPoolUsage': [null, Validators.required],
      'hasPump': [null, Validators.required],
      'pumpCount': [null, Validators.required]
    });

    console.log('Hello PoolUsageComponent Component');
    this.text = '1';
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


}
