import { Component, Input, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDisasterousComponent } from '../../components/table-disasterous/table-disasterous';
import { HouseHoldState } from '../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getHouseHoldSample, getArrayIsCheck } from '../../states/household';
import { SetNextPageDirection } from '../../states/household/household.actions';

@IonicPage()
@Component({
  selector: 'page-disasterous',
  templateUrl: 'disasterous.html',
})
export class DisasterousPage {

  @ViewChildren(TableDisasterousComponent) private tableDisasterous: TableDisasterousComponent[];
  @Input("headline") private text: string;

  private submitRequested: boolean;
  public Disasterous: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.disaster));

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<HouseHoldState>) {
    this.Disasterous = this.fb.group({
      '_id': [null],
      'flooded': [null, Validators.required],
      'yearsDisasterous': this.fb.array([
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
        TableDisasterousComponent.CreateFormGroup(this.fb),
      ]),
    })
  }

  ionViewDidLoad() {
    this.formData$.subscribe(data => this.Disasterous.setValue(data));
  }

  public showModal() {
    const modal = this.modalCtrl.create("DlgTableDisasterousPage", { FormItem: this.Disasterous, headline: this.text });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.Disasterous.setValue(fg.value);
      }
    });
    modal.present();
  }
  
  public handleSubmit() {
    this.submitRequested = true;
    this.tableDisasterous.forEach(it => it.submitRequest());
    this.store.dispatch(new SetNextPageDirection(21));
    let arrayIsCheck$ = this.store.select(getArrayIsCheck).pipe(map(s => s));
    let arrayIsCheck :Array<number>;
    arrayIsCheck$.subscribe(data => arrayIsCheck = data);
    arrayIsCheck.push(20);
    console.log(arrayIsCheck);
    if (this.Disasterous.valid) {
      this.navCtrl.pop();
      // this.navCtrl.push("UserPage");
    }
  }

  submitRequest() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.Disasterous.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
