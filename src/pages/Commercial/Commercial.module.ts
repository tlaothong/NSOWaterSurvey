import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CommercialPage } from './Commercial';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CommercialPage,
  ],
  imports: [
    IonicPageModule.forChild(CommercialPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class CommercialPageModule {}
