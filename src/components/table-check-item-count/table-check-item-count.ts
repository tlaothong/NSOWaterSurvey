import { Component, Input, AfterViewInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TableCheckItemCountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-check-item-count',
  templateUrl: 'table-check-item-count.html'
})
export class TableCheckItemCountComponent implements AfterViewInit {

  @Input("ititle") private text: string;
  @Input() public FormItem: FormGroup;

  constructor(private modalCtrl: ModalController) {
    this.text = 'Hello World';
  }

  public hasCount(): Observable<boolean> {
    return this.FormItem.get('itemCount').valueChanges;
  }

  public ngAfterViewInit() {
    // this.FormItem.get('hasItem').valueChanges.subscribe(it => this.showModal());
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableCheckItemCountPage", { FormItem: this.FormItem, iTitle: this.text });
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
