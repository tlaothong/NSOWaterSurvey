import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowerCropPage } from './flower-crop';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    FlowerCropPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowerCropPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class FlowerCropPageModule {}
