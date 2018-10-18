import { Component, Input, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDisasterousComponent } from '../../components/table-disasterous/table-disasterous';

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

  @ViewChildren(TableDisasterousComponent) private tableDisasterous: TableDisasterousComponent[];
  @Input("headline") private text: string;
  @Input() public FormItem: FormGroup;
    private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.FormItem = this.fb.group({
      'flooded': [null, Validators.required],
      'yearsDisasterous' : TableDisasterousComponent.CreateFormGroup(this.fb),
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
    this.tableDisasterous.forEach(it => it.submitRequest());
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
