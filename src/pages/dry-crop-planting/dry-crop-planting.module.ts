import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DryCropPlantingPage } from './dry-crop-planting';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DryCropPlantingPage,
  ],
  imports: [
    IonicPageModule.forChild(DryCropPlantingPage),
    ComponentsModule,
    DirectivesModule
  ],
})
export class DryCropPlantingPageModule {}
