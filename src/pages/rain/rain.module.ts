import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RainPage } from './rain';

@NgModule({
  declarations: [
    RainPage,
  ],
  imports: [
    IonicPageModule.forChild(RainPage),
  ],
})
export class RainPageModule {}
