import { getSendDataBuilding } from './../../states/building/index';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';

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
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;
  private GetPlantDrycrop$ = this.storeBuild.select(getSendDataBuilding);

  private testData: any;
  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private storeBuild: Store<BuildingState>) {
    console.log('Hello UnitButtonComponent Component');
    this.text = '';

    // TODO: Remove this
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
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
        'text': [null],
      })
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
  ionViewDidLoad() {
    this.GetPlantDrycrop$.subscribe(data => this.testData = data);
    console.log('testData');
    console.log(this.testData);

  }


  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
