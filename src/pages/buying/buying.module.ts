import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyingPage } from './buying';

@NgModule({
  declarations: [
    BuyingPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyingPage),
  ],
})
export class BuyingPageModule {}
