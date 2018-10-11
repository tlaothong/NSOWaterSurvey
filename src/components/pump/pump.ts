import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
/**
 * Generated class for the PoolComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pump',
  templateUrl: 'pump.html'
})
export class PumpComponent implements ISubmitRequestable  {

 @Input() public FormItem: FormGroup;

  @Input('headline') text: string;
  submitRequested: boolean;


  constructor(private modalCtrl: ModalController,public navCtrl: NavController,
    public navParams: NavParams, private fb: FormBuilder) {
    this.FormItem = this.fb.group({
      'pumpAuto': [''],
      'unknowHoursPerPump': [''],
      'hoursPerPump': [''],
      'numberOfPumpsPerYear': [''],
      'pumpRate': this.fb.group({
        'knowPumpRate': [''],
        'pumpRateUsage': [''],
      }),
      'energySource': this.fb.group({
        'electicPump': [''],
        'solaPump': [''],
        'petrolPump': [''],
        'twoWheeledTractors': [''],
      }),
      'pumpType': this.fb.group({
        'electicPump': [''],
        'solaPump': [''],
        'petrolPump': [''],
        'twoWheeledTractors': [''],
      }),
      'horsePower': [''],
      'suctionPipeSize': [''],
      'pipelineSize': [''],
    })
}
public showModalArea() {
  const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.text });
  modal.onDidDismiss(data => {
    if (data) {
      this.FormItem = data;
      var fg = <FormGroup>data;
      this.FormItem.setValue(fg.value);
    }
  });
  modal.present();
}

submitRequest() {
  this.submitRequested = true;
}

public isValid(name: string): boolean {
  var ctrl = this.FormItem.get(name);
  return ctrl.invalid && (ctrl.dirty || this.submitRequested);
}


}
