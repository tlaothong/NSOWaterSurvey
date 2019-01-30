import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstloginPage } from './firstlogin';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FirstloginPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstloginPage),
    ComponentsModule,
  ],
})
export class FirstloginPageModule {}
