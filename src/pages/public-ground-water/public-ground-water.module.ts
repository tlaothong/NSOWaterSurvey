import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicGroundWaterPage } from './public-ground-water';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PublicGroundWaterPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicGroundWaterPage),
    ComponentsModule,
  ],
})
export class PublicGroundWaterPageModule {}
