import { Component, Input } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../questionnaire-menu-popover/questionnaire-menu-popover';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getUnitNo } from '../../states/household';

@Component({
  selector: 'questionnaire-menu',
  templateUrl: 'questionnaire-menu.html'
})
export class QuestionnaireMenuComponent {

  @Input('title') public text: string;
  @Input('Pop') public Pop: boolean;
  @Input('isUnit') public isUnit: boolean;

  public No: string;

  private unitNo$ = this.store.select(getUnitNo);

  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
    this.isUnit = true;
  }

  ngOnInit() {
    console.log("isUnit: " + this.isUnit);
    if (this.isUnit == true) {
      this.unitNo$.subscribe(data => this.No = data);
    }
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent, { nav: this.navCtrl });
    popover.present({
      ev: myEvent
    });
  }

}