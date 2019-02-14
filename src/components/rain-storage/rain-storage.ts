import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'rain-storage',
  templateUrl: 'rain-storage.html'
})
export class RainStorageComponent {
  
  @Input("headline") private text: string;
  @Input("no") private no: string;
  @Input() public FormItem: FormGroup;
  private submitRequested : boolean;

  constructor(public modalCtrl: ModalController,private fb: FormBuilder) {
    console.log('Hello RainStorageComponent Component');
    this.text = '';
    this.FormItem = RainStorageComponent.CreateFormGroup(fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup{
    return fb.group({
      'category': [null, Validators.required],
      'size': [null, Validators.required],
      'count': [null, Validators.required],
    });
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name : string) :boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
  
  presentModal() {
    const modal = this.modalCtrl.create("DlgRainStoragePage", { FormItem: this.FormItem, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        this.FormItem = data;
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }

}