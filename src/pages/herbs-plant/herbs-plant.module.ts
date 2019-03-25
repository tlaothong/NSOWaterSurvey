import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HerbsPlantPage } from './herbs-plant';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    HerbsPlantPage,
  ],
  imports: [
    IonicPageModule.forChild(HerbsPlantPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class HerbsPlantPageModule {}
