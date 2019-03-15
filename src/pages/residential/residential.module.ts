import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidentialPage } from './residential';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ResidentialPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidentialPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class ResidentialPageModule {}
