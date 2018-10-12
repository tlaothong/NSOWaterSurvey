import { Component, Input, AfterViewInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ISubmitRequestable } from '../../shared/ISubmitRequestable';

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
export class TableCheckItemCountComponent implements AfterViewInit, ISubmitRequestable {

  @Input("ititle") public text: string;
  @Input('unit') public unittext: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.text = 'Hello World';

    // TODO: Remove this
    this.FormItem = this.fb.group({
      'hasItem': false,
      'itemCount': 0
    });
  }

  public ngAfterViewInit() {
    // this.FormItem.get('hasItem').valueChanges.subscribe(it => this.showModal());
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableCheckItemCountPage",
      {
        FormItem: this.FormItem,
        iTitle: this.text,
        unit: this.unittext,
      });
    modal.onDidDismiss(data => {
      if (data) {
        this.FormItem = data;
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
