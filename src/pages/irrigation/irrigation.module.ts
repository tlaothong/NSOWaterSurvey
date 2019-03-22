import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IrrigationPage } from './irrigation';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    IrrigationPage,
  ],
  imports: [
    IonicPageModule.forChild(IrrigationPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class IrrigationPageModule {}
