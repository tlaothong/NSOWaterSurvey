import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoolPage } from './pool';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    PoolPage,
  ],
  imports: [
    IonicPageModule.forChild(PoolPage),
    ComponentsModule,
    DirectivesModule,

  ],
})
export class PoolPageModule {}
