import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'count',
  templateUrl: 'count.html'
})
export class CountComponent {

  @Input() title: string;
  @Input() bePlant: boolean = false;
  @Input() FormItem: FormGroup;
  @Input() count: string;
  @Input() beUnitCount: boolean;
  @Input() beResidential: boolean;
  @Input() beWater: boolean;

  public item: string;
  public group: string;
  public isGroup: boolean;

  public submitRequested: boolean;

  constructor(public modalCtrl: ModalController) {

  }

  ngOnInit() {
  
    let st = this.count.split(".");
    console.log(st);
    this.isGroup = (st.length > 1);
    console.log(this.isGroup);
    if (this.isGroup) {
      this.group = st[0];
      this.item = st[1];
      console.log(this.group);
      console.log(this.item);
    }
  }

  submitRequest() {
    this.submitRequested = true;
  }

  presentModalCount() {
    const modal = this.modalCtrl.create("DlgCountPage", { count: this.FormItem.get(this.count).value, title: this.title, bePlant: this.bePlant, beUnitCount: this.beUnitCount, beResidential: this.beResidential, beWater: this.beWater });
    modal.onDidDismiss(data => {
      if (data) {
        this.FormItem.get(this.count).setValue(data);
      }
    });
    modal.present();
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
