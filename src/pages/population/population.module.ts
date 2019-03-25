import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopulationPage } from './population';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    PopulationPage,
  ],
  imports: [
    IonicPageModule.forChild(PopulationPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class PopulationPageModule {}
