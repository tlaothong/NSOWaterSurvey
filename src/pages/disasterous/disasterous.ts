import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the DisasterousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disasterous',
  templateUrl: 'disasterous.html',
})
export class DisasterousPage {
  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;
    private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.FormItem = this.fb.group({
      'flooded': [null, Validators.required],
    })

    
  
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableDisasterousPage", { FormItem: this.FormItem, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
      }
    });
    modal.present();
  }
  public handleSubmit() {
    this.submitRequested = true;

  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
