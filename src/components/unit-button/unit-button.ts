import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, Form, NavController } from 'ionic-angular';

/**
 * Generated class for the UnitButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'unit-button',
  templateUrl: 'unit-button.html'
})
export class UnitButtonComponent {

  @Input("headline") public text: string;
  @Input('no') public unitNo: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController, private fb: FormBuilder) {
    console.log('Hello UnitButtonComponent Component');
    this.text = '';
    // TODO: Remove this
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
  }

  ionViewDidLoad() {
    console.log('load');
  }

  ionViewDidEnter() {
    console.log('enter');
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'access': [null, Validators.required],
        'hasPlumbing': [null, Validators.required],
        'hasPlumbingMeter': [false, Validators.required],
        'isPlumbingMeterXWA': [false, Validators.required],
        'hasGroundWater': [null, Validators.required],
        'hasGroundWaterMeter': [false, Validators.required],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.group({
        'at': [null],
        'text': [''],
      }),
      'residence': [null, Validators.required],
      'Agriculture': [null, Validators.required],
      'Factory': [null, Validators.required],
      'Commerce': [null, Validators.required],
      'WaterUsage': [null, Validators.required],
      'Disaster': [null, Validators.required],
      'Closing': [null, Validators.required],

    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
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

  goWaterActivityUnitPage() {
    this.navCtrl.push('WaterActivityUnitPage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
