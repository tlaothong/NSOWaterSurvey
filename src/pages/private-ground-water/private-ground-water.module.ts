import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateGroundWaterPage } from './private-ground-water';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PrivateGroundWaterPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateGroundWaterPage),
    ComponentsModule,
  ],
})
export class PrivateGroundWaterPageModule {}
