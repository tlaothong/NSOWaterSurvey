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
  @Input('isBuilding') public isBuilding: boolean;

  public No: string;

  private unitNo$ = this.store.select(getUnitNo);

  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController, private store: Store<HouseHoldState>) {
    this.text = 'Hello World';
    this.isBuilding = false;
  }

  ngOnInit() {
    console.log("isBuilding: " + this.isBuilding);
    if (!this.isBuilding) {
      this.unitNo$.subscribe(data => this.No = data);
    }
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent, { nav: this.navCtrl, isBuilding: this.isBuilding });
    popover.present({
      ev: myEvent
    });
  }

}