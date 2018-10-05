import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RisePage } from './rise';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RisePage,
  ],
  imports: [
    IonicPageModule.forChild(RisePage),
    ComponentsModule
  ],
})
export class RisePageModule {}
