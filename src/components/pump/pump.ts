import { Component, Input, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
export class PumpComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') text: string;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController,
    public navParams: NavParams, public fb: FormBuilder) {

    this.FormItem = PumpComponent.CreateFormGroup(this.fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'pumpAuto': ['', Validators.required],
      'unknowHoursPerPump': ['', Validators.required],
      'hoursPerPump': ['', Validators.required],
      'numberOfPumpsPerYear': ['', Validators.required],
      'pumpRate': ['', Validators.required],
      'knowPumpRate': ['', Validators.required],
      'energySource': ['', Validators.required],
      'pumpType': ['', Validators.required],
      'horsePower': ['', Validators.required],
      'suctionPipeSize': ['', Validators.required],
      'pipelineSize': ['', Validators.required]
    });
  }

  public showModalArea() {
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
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
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


}
