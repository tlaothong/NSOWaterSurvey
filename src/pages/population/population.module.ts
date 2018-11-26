import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopulationPage } from './population';

@NgModule({
  declarations: [
    PopulationPage,
  ],
  imports: [
    IonicPageModule.forChild(PopulationPage),
  ],
})
export class PopulationPageModule {}
