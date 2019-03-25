import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlumbingPage } from './plumbing';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    PlumbingPage,
  ],
  imports: [
    IonicPageModule.forChild(PlumbingPage),
    ComponentsModule,
    DirectivesModule
  ],
})
export class PlumbingPageModule {}
