import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstpagePage } from './firstpage';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FirstpagePage,
  ],
  imports: [
    IonicPageModule.forChild(FirstpagePage),
    ComponentsModule,
  ],
})
export class FirstpagePageModule {}
