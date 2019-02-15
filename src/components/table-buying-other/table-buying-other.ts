import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'table-buying-other',
  templateUrl: 'table-buying-other.html'
})
export class TableBuyingOtherComponent {

  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;
  @Input() public size: string;
  @Input("getIsHouseHold") public getIsHouseHold: boolean;
  @Input("getIsAgriculture") public getIsAgriculture: boolean;
  @Input("getIsFactorial") public getIsFactorial: boolean;
  @Input("getIsCommercial") public getIsCommercial: boolean;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = '';
    this.size = 'ลิตร';
    this.FormItem = TableBuyingOtherComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': [null, Validators.required],
      'size': [null, Validators.required],
      'drink': [null, Validators.required],
      'agriculture': [null, Validators.required],
      'factory': [null, Validators.required],
      'service': [null, Validators.required],
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableBuyingOtherPage", { FormItem: this.FormItem, headline: this.text, size: this.size, getIsHouseHold: this.getIsHouseHold, getIsAgriculture: this.getIsAgriculture, getIsFactorial: this.getIsFactorial, getIsCommercial: this.getIsCommercial });
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
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}