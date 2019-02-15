import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetworkPage } from './getwork';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GetworkPage,
  ],
  imports: [
    IonicPageModule.forChild(GetworkPage),
    ComponentsModule,
  ],
})
export class GetworkPageModule {}
