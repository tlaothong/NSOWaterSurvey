import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgUnitPage } from './dlg-unit';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DlgUnitPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgUnitPage),
    DirectivesModule,
  ],
})
export class DlgUnitPageModule {}
