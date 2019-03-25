import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisasterousPage } from './disasterous';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DisasterousPage,
  ],
  imports: [
    IonicPageModule.forChild(DisasterousPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class DisasterousPageModule {}
