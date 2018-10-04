import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoPage } from './demo';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DemoPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoPage),
    ComponentsModule,
  ],
})
export class DemoPageModule {}
