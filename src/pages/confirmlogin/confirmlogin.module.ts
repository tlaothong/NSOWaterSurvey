import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmloginPage } from './confirmlogin';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ConfirmloginPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmloginPage),
    ComponentsModule,
  ],
})
export class ConfirmloginPageModule {}
