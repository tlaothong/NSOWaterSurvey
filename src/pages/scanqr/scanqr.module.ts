import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanqrPage } from './scanqr';

@NgModule({
  declarations: [
    ScanqrPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanqrPage),
  ],
})
export class ScanqrPageModule {}
