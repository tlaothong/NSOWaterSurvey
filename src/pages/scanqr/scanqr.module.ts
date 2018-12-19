import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanqrPage } from './scanqr';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ScanqrPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanqrPage),
    ComponentsModule,
  ],
})
export class ScanqrPageModule {}
