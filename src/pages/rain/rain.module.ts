import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RainPage } from './rain';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    RainPage,
  ],
  imports: [
    IonicPageModule.forChild(RainPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class RainPageModule {}
