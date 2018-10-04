import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactorialPage } from './factorial';

@NgModule({
  declarations: [
    FactorialPage,
  ],
  imports: [
    IonicPageModule.forChild(FactorialPage),
  ],
})
export class FactorialPageModule {}
