import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalFarmPage } from './animal-farm';

@NgModule({
  declarations: [
    AnimalFarmPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalFarmPage),
  ],
})
export class AnimalFarmPageModule {}
