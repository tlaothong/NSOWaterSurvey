import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RicePage } from './rice';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    RicePage,
  ],
  imports: [
    IonicPageModule.forChild(RicePage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class RisePageModule {}
