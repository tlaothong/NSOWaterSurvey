import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuidlingInformation2Page } from './buidling-information2';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    BuidlingInformation2Page,
  ],
  imports: [
    IonicPageModule.forChild(BuidlingInformation2Page),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class BuidlingInformation2PageModule {}
