import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportFilePage } from './export-file';

@NgModule({
  declarations: [
    ExportFilePage,
  ],
  imports: [
    IonicPageModule.forChild(ExportFilePage),
  ],
})
export class ExportFilePageModule {}
