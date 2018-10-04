import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisasterousPage } from './disasterous';

@NgModule({
  declarations: [
    DisasterousPage,
  ],
  imports: [
    IonicPageModule.forChild(DisasterousPage),
  ],
})
export class DisasterousPageModule {}
