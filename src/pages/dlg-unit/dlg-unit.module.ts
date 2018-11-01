import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgUnitPage } from './dlg-unit';

@NgModule({
  declarations: [
    DlgUnitPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgUnitPage),
  ],
})
export class DlgUnitPageModule {}
