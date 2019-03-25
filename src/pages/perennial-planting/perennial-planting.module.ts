import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerennialPlantingPage } from './perennial-planting';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    PerennialPlantingPage,
  ],
  imports: [
    IonicPageModule.forChild(PerennialPlantingPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class PerennialPlantingPageModule {}
