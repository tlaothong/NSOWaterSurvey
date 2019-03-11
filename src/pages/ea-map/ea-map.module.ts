import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EaMapPage } from './ea-map';

@NgModule({
  declarations: [
    EaMapPage,
  ],
  imports: [
    IonicPageModule.forChild(EaMapPage),
  ],
})
export class EaMapPageModule {}
