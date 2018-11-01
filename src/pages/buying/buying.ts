import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableBuyingComponent } from '../../components/table-buying/table-buying';
import { TableBuyingOtherComponent } from '../../components/table-buying-other/table-buying-other';


/**
 * Generated class for the BuyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buying',
  templateUrl: 'buying.html',
})
export class BuyingPage {
  @ViewChildren(TableBuyingComponent) private tableBuying: TableBuyingComponent[];
  @ViewChildren(TableBuyingOtherComponent) private tableBuyingOther: TableBuyingOtherComponent[];

  BuyingForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.BuyingForm = this.fb.group({
      'package': this.fb.array([
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingComponent.CreateFormGruop(this.fb),
        TableBuyingOtherComponent.CreateFormGroup(this.fb),
      ]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyingPage');
  }

}
