import { Component, Input } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'table-disasterous',
  templateUrl: 'table-disasterous.html'
})
export class TableDisasterousComponent {

  @Input("headline") public year: string;
  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder, public alertController: AlertController) {
    this.year = 'Hello World';

    // TODO: Remove this
    this.FormItem = TableDisasterousComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'count': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'avgDay': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'avgHour': [null, [Validators, Validators.min(1), Validators.max(23)]],
      'waterHeightCm': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'year': [null],
    });
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableDisasterousPage", { FormItem: this.FormItem, headline: this.year });
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

  presentAlertPopulation() {
    const alert = this.alertController.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [
        {
          text: 'ยืนยัน',
          handler: data => {
            this.FormItem.reset();

          }
        },
        {
          text: 'ยกเลิก',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }
  deleteData() {
    this.presentAlertPopulation()
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}