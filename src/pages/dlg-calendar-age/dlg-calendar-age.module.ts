import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgCalendarAgePage } from './dlg-calendar-age';

@NgModule({
  declarations: [
    DlgCalendarAgePage,
  ],
  imports: [
    IonicPageModule.forChild(DlgCalendarAgePage),
  ],
})
export class DlgCalendarAgePageModule {}
