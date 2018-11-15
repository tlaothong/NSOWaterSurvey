import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterActivityUnitPage } from './water-activity-unit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WaterActivityUnitPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterActivityUnitPage),
    ComponentsModule
  ],
})
export class WaterActivityUnitPageModule {}
