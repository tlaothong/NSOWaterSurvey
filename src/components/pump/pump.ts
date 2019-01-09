import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';
import { surfacePumpTypeData } from '../../models/SurfacePumpTypeData';
import { PumpDataProvider } from '../../providers/pump-data/pump-data';
import { surfaceWattHpData } from '../../models/SurfaceWattHpData';
import { surfaceSuctionPipeData } from '../../models/SurfaceSuctionPipeData';

@Component({
  selector: 'pump',
  templateUrl: 'pump.html'
})

export class PumpComponent implements ISubmitRequestable {

  @Input() public FormItem: FormGroup;
  @Input('no') public text: string;
  private submitRequested: boolean;
  public surfacePumpTypeData = surfacePumpTypeData;
  public surfacePump: any;
  public surfaceWattHpData: any;
  public surfaceSuctionPipeData: any;
  public surfacePipeLineData: any;
  
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

  onChange(code:any){
    this.surfacePump = PumpDataProvider.getSurfacePumpTypeData(code);
  }

  onChange1(name:string){
    var code = surfacePumpTypeData.find(it=>it.name == name);
    this.surfaceWattHpData = PumpDataProvider.getSurfaceWattHpData(code.codePumpType);
    console.log(this.surfaceWattHpData)
  }
  
  onChange2(name:string){
    var code = surfaceWattHpData.find(it=>it.name == name);
    this.surfaceSuctionPipeData = PumpDataProvider.getSurfaceSuctionPipeData(code.codeWattHp);
    console.log(this.surfaceSuctionPipeData)
  }

  onChange3(name:string){
    var code = surfaceSuctionPipeData.find(it=>it.name == name);
    this.surfacePipeLineData = PumpDataProvider.getSurfacePipeLineData(code.codeSuctionPipe);
    console.log(this.surfacePipeLineData);
  }
}