import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DlgShowSuggestionUnitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-show-suggestion-unit',
  templateUrl: 'dlg-show-suggestion-unit.html',
})
export class DlgShowSuggestionUnitPage {

  public suggestions: string;
  public suggestion: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.suggestions = this.navParams.get("suggestions");
    this.suggestion = this.suggestions.split(',');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
