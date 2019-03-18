import { CommunityState } from './../../states/community/community.reducer';
import { Component, Input } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../questionnaire-menu-popover/questionnaire-menu-popover';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getUnitNo } from '../../states/household';
import { getComNo } from '../../states/community';

@Component({
  selector: 'questionnaire-menu',
  templateUrl: 'questionnaire-menu.html'
})
export class QuestionnaireMenuComponent {

  @Input('title') public text: string;
  @Input('Pop') public Pop: boolean;
  @Input('isDisabled') public isDisabled: boolean;
  @Input('isCommunity') public isCommunity: boolean;

  public No: string;

  private unitNo$ = this.store.select(getUnitNo);
  private comNo$ = this.storeCom.select(getComNo);

  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController, private store: Store<HouseHoldState>, private storeCom: Store<CommunityState>) {
    this.text = 'Hello World';
    this.isDisabled = false;
    this.isCommunity = false;
    this.Pop = false;
  }

  ngOnInit() {
    console.log("Pop: " + this.Pop);
    if (this.isCommunity) {
      this.comNo$.subscribe(data => this.No = data);
    }
    else if (!this.isDisabled) {
      this.unitNo$.subscribe(data => this.No = data);
    }
  }

  public showQuickMenu(myEvent) {
    let popover = this.popoverCtrl.create(QuestionnaireMenuPopoverComponent, { nav: this.navCtrl, isDisabled: this.isDisabled, isCommunity: this.isCommunity, Pop: this.Pop, No: this.No });
    popover.present({
      ev: myEvent
    });
  }

}