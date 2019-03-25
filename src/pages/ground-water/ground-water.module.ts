import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroundWaterPage } from './ground-water';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    GroundWaterPage,
  ],
  imports: [
    IonicPageModule.forChild(GroundWaterPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class GroundWaterPageModule {}
