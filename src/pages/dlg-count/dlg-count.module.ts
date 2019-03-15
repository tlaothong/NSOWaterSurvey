import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgCountPage } from './dlg-count';

@NgModule({
  declarations: [
    DlgCountPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgCountPage),
  ],
})
export class DlgCountPageModule {}
