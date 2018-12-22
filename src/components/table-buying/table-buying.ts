import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'table-buying',
  templateUrl: 'table-buying.html'
})
export class TableBuyingComponent {

  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;
  @Input() public size: number;
  @Input() public volumn: string;
  @Input("getIsHouseHold") public getIsHouseHold: boolean;
  @Input("getIsAgriculture") public getIsAgriculture: boolean;
  @Input("getIsFactorial") public getIsFactorial: boolean;
  @Input("getIsCommercial") public getIsCommercial: boolean;

  private submitRequested: boolean;
  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = '';
    this.volumn = 'ลิตร';
    this.FormItem = TableBuyingComponent.CreateFormGruop(fb);
  }

  public static CreateFormGruop(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null],
      'size': [null, Validators.required],
      'drink': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'factory': [null, Validators.required],
      'service': [null, Validators.required],
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableBuyingPage", { FormItem: this.FormItem, headline: this.text, size: this.size, volumn: this.volumn, getIsHouseHold: this.getIsHouseHold, getIsAgriculture: this.getIsAgriculture, getIsFactorial: this.getIsFactorial, getIsCommercial: this.getIsCommercial });
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