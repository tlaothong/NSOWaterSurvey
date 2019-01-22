import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      'pumpAuto': [null, Validators.required],
      'hoursPerPump': [null, Validators.required],
      'numberOfPumpsPerYear': [null, Validators.required],
      'hasPumpRate': [null, Validators.required],
      'pumpRate': [null, Validators.required],
      'energySource': [null, Validators.required],
      'pumpType': [null, Validators.required],
      'horsePower': [null, Validators.required],
      'suctionPipeSize': [null, Validators.required],
      'pipelineSize': [null, Validators.required]
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
      let code = surfaceSuctionPipeData.find(it=>it.name == name);
      this.pipeLineData = PumpDataProvider.getSurfacePipeLineData(code.codeSuctionPipe);
      }
    console.log(this.pipeLineData);
  }

  picture() {
    let profileModal = this.modalCtrl.create("DlgPumpPicturePage", {
      checkg:this.G
    });
    profileModal.present();
  }
}