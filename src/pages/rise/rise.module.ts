import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RisePage } from './rise';

@NgModule({
  declarations: [
    RisePage,
  ],
  imports: [
    IonicPageModule.forChild(RisePage),
  ],
})
export class RisePageModule {}
