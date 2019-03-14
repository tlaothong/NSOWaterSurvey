import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { surfacePumpTypeData } from '../../models/SurfacePumpTypeData';
import { PumpDataProvider } from '../../providers/pump-data/pump-data';
import { surfaceWattHpData } from '../../models/SurfaceWattHpData';
import { surfaceSuctionPipeData } from '../../models/SurfaceSuctionPipeData';
import { groundWaterPumpTypeData } from '../../models/GroundPumpTypeData';
import { groundWaterSuctionPipeData } from '../../models/GroundSuctionPipeData';
import { groundWaterWattHpData } from '../../models/GroundWattHpData';

@Component({
  selector: 'pump',
  templateUrl: 'pump.html'
})

export class PumpComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('G') public G: boolean;
  @Input('no') public text: string;
  private submitRequested: boolean;
  public surfacePumpTypeData = surfacePumpTypeData;
  public pumpTypes: any;
  public wattHpData: any;
  public suctionPipeData: any;
  public pipeLineData: any;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController,
    public navParams: NavParams, public fb: FormBuilder) {
    this.FormItem = PumpComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'pumpAuto': [null, Validators],
      'hoursPerPump': [null, Validators],
      'numberOfPumpsPerYear': [null, Validators],
      'hasPumpRate': [null, Validators],
      'pumpRate': [null, Validators],
      'energySource': [0, Validators],
      'pumpType': [null, Validators],
      'horsePower': [null, Validators],
      'suctionPipeSize': [null, Validators],
      'pipelineSize': [null, Validators]
    },
      {
        validator: PumpComponent.checkAnyOrOther()
      });
  }

  public showModalArea() {
    const modal = this.modalCtrl.create("DlgPoolAreaPage", { FormItem: this.FormItem, headline: this.text, head: "เครื่องสูบน้ำที่" });
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

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const pumpAuto = c.get('pumpAuto');
      const hoursPerPump = c.get('hoursPerPump');
      const numberOfPumpsPerYear = c.get('numberOfPumpsPerYear');
      const hasPumpRate = c.get('hasPumpRate');
      const pumpRate = c.get('pumpRate');
      const energySource = c.get('energySource');
      const pumpType = c.get('pumpType');
      const horsePower = c.get('horsePower');
      const suctionPipeSize = c.get('suctionPipeSize');
      const pipelineSize = c.get('pipelineSize');

      if (pumpAuto.value == null) {
        return { 'pumpAuto': true };
      }
      if ((pumpAuto.value == false)
        && ((hoursPerPump.value == null)
          || (hoursPerPump.value.trim() == ''))) {
        return { 'hoursPerPump': true, };
      }
      if ((pumpAuto.value == false)
        && ((numberOfPumpsPerYear.value == null)
          || (numberOfPumpsPerYear.value.trim() == ''))) {
        return { 'numberOfPumpsPerYear': true, };
      }
      if ((pumpAuto.value == false)
        && (hasPumpRate.value == null)) {
        return { 'hasPumpRate': true, }
      }
      if ((hasPumpRate.value == true)
        && ((pumpRate.value == null)
          || (pumpRate.value.trim() == ''))) {
        return { 'pumpRate': true, }
      }
      if ((hasPumpRate.value == false)
        && (energySource.value <= 0)) {
        return { 'energySource': true, }
      }
      if ((hasPumpRate.value == false)
        && (energySource.value > 0)
        && (pumpType.value == null)) {
        return { 'pumpType': true, }
      }
      if ((hasPumpRate.value == false)
        && (energySource.value > 0)
        && (pumpType.value != null)
        && (horsePower.value == null)) {
        return { 'horsePower': true, }
      }
      if ((hasPumpRate.value == false)
        && (energySource.value > 0)
        && (pumpType.value != null)
        && (horsePower.value != null)
        && (suctionPipeSize.value == null)) {
        return { 'suctionPipeSize': true, }
      }
      if ((hasPumpRate.value == false)
        && (energySource.value > 0)
        && (pumpType.value != null)
        && (horsePower.value != null)
        && (suctionPipeSize.value != null)
        && (pipelineSize.value == null)) {
        return { 'pipelineSize': true, }
      }
      return null;
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == 'pumpAuto') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.pumpAuto && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hoursPerPump') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.hoursPerPump && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'numberOfPumpsPerYear') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.numberOfPumpsPerYear && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'hasPumpRate') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.hasPumpRate && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'pumpRate') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.pumpRate && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'energySource') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.energySource && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'pumpType') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.pumpType && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'horsePower') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.horsePower && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'suctionPipeSize') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.suctionPipeSize && (ctrl.dirty || this.submitRequested);
    }
    if (name == 'pipelineSize') {
      let ctrls = this.FormItem;
      return ctrls.errors && ctrls.errors.pipelineSize && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  onChange(code: any) {
    if (this.G == true) {
      this.pumpTypes = PumpDataProvider.getGroundWaterPumpTypeData(code);
    }
    else {
      this.pumpTypes = PumpDataProvider.getSurfacePumpTypeData(code);
    }

  }

  onChange1(name: string) {
    if (this.G == true) {
      let code = groundWaterPumpTypeData.find(it => it.name == name);
      this.wattHpData = PumpDataProvider.getGroundWaterWattHpData(code.codePumpType);
    }
    else {
      let code = surfacePumpTypeData.find(it => it.name == name);
      this.wattHpData = PumpDataProvider.getSurfaceWattHpData(code.codePumpType);
    }
    console.log(this.wattHpData)
  }

  onChange2(name: string) {
    if (this.G == true) {
      let code = groundWaterWattHpData.find(it => it.name == name);
      this.suctionPipeData = PumpDataProvider.getGroundWaterSuctionPipeData(code.codeWattHp);
    }
    else {
      let code = surfaceWattHpData.find(it => it.name == name);
      this.suctionPipeData = PumpDataProvider.getSurfaceSuctionPipeData(code.codeWattHp);
    }
    console.log(this.suctionPipeData)
  }

  onChange3(name: string) {
    if (this.G == true) {
      let code = groundWaterSuctionPipeData.find(it => it.name == name);
      this.pipeLineData = PumpDataProvider.getGroundWaterPipeLineData(code.codeSuction);
    }
    else {
      let code = surfaceSuctionPipeData.find(it => it.name == name);
      this.pipeLineData = PumpDataProvider.getSurfacePipeLineData(code.codeSuctionPipe);
    }
    console.log(this.pipeLineData);
  }

  picture() {
    let profileModal = this.modalCtrl.create("DlgPumpPicturePage", {
      checkg: this.G,
      val: this.FormItem.get('energySource').value
    });
    profileModal.present();
  }
}